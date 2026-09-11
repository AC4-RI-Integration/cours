<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue"
import JSZip from "jszip"
import EditorWorker from "monaco-editor/editor/editor.worker.js?worker"
import CssWorker from "monaco-editor/language/css/css.worker.js?worker"
import HtmlWorker from "monaco-editor/language/html/html.worker.js?worker"

type SandboxProps = {
  html?: string
  css?: string
}

type SavedSnippet = {
  name: string
  html: string
  css: string
}

const snippetsStorageKey = "code-sandbox-snippets"

function normalizeCode(value: string) {
  return value.replaceAll("\\n", "\n")
}

const props = withDefaults(defineProps<SandboxProps>(), {
  html: "<h1>Le café du quartier</h1>\n<p>Découvrez nos cafés et nos pâtisseries du jour.</p>",
  css: "body {\n  font-family: sans-serif;\n  padding: 1rem;\n}",
})

let initialHtml = normalizeCode(props.html)
let initialCss = normalizeCode(props.css)
const html = ref(initialHtml)
const css = ref(initialCss)
const htmlOutlineEnabled = ref(false)
const snippetName = ref("")
const savedSnippets = ref<SavedSnippet[]>([])
const snippetsModalOpen = ref(false)
const selectedSnippetName = ref("")
const snippetMessage = ref("")
const previewKey = ref(0)
const htmlEditor = ref<HTMLElement | null>(null)
const cssEditor = ref<HTMLElement | null>(null)

let htmlModel: import("monaco-editor").editor.ITextModel | undefined
let cssModel: import("monaco-editor").editor.ITextModel | undefined
let htmlInstance: import("monaco-editor").editor.IStandaloneCodeEditor | undefined
let cssInstance: import("monaco-editor").editor.IStandaloneCodeEditor | undefined
let stopHtmlChange: { dispose: () => void } | undefined
let stopCssChange: { dispose: () => void } | undefined
let stopThemeObserver: MutationObserver | undefined
let stopEditorShortcutPropagation: (() => void) | undefined

const documentHtml = computed(() => `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    html, body {
      color: #222222;
      margin: 10px;
    }

    h1, h2, h3, h4, h5, h6 {
      color: inherit;
    }

    ${css.value}

    body.html-outline [data-html-tag] {
      outline: 1px solid rgba(220, 38, 38, 0.65);
      position: relative;
    }

    body.html-outline [data-html-tag]::before {
      background: #dc2626;
      color: #ffffff;
      content: "<" attr(data-html-tag) ">";
      font: 11px/1.2 ui-monospace, SFMono-Regular, Consolas, monospace;
      left: 0;
      padding: 2px 4px;
      pointer-events: none;
      position: absolute;
      top: 0;
      transform: translateY(-100%);
      white-space: nowrap;
      z-index: 1;
    }
  </style>
</head>
<body class="${htmlOutlineEnabled.value ? "html-outline" : ""}">
${html.value}
<script>
  document.querySelectorAll("body *").forEach((element) => {
    element.setAttribute("data-html-tag", element.tagName.toLowerCase())
  })
${"</scr" + "ipt>"}
</body>
</html>`)

function resetSandbox() {
  htmlInstance?.setValue(initialHtml)
  cssInstance?.setValue(initialCss)
}

function refreshPreview() {
  previewKey.value += 1
}

function loadSavedSnippets() {
  const storedSnippets = localStorage.getItem(snippetsStorageKey)

  if (!storedSnippets) {
    return
  }

  try {
    const snippets = JSON.parse(storedSnippets) as SavedSnippet[]
    savedSnippets.value = Array.isArray(snippets) ? snippets : []
  } catch {
    localStorage.removeItem(snippetsStorageKey)
  }
}

function saveSnippet() {
  const name = snippetName.value.trim()

  if (!name) {
    snippetMessage.value = "Donnez un nom à l'extrait avant de l'enregistrer."
    return
  }

  if (name.length > 40) {
    snippetMessage.value = "Le nom doit contenir au maximum 40 caractères."
    return
  }

  const snippet = { name, html: html.value, css: css.value }
  const existingIndex = savedSnippets.value.findIndex((item) => item.name === name)

  if (existingIndex >= 0) {
    savedSnippets.value.splice(existingIndex, 1, snippet)
  } else {
    savedSnippets.value.push(snippet)
  }

  localStorage.setItem(snippetsStorageKey, JSON.stringify(savedSnippets.value))
  selectedSnippetName.value = name
  snippetMessage.value = existingIndex >= 0
    ? "L'extrait existant a été remplacé."
    : "Extrait enregistré dans ce navigateur."
}

function loadSnippet() {
  const name = selectedSnippetName.value
  const snippet = savedSnippets.value.find((item) => item.name === name)

  if (!snippet) {
    return
  }

  initialHtml = snippet.html
  initialCss = snippet.css
  htmlInstance?.setValue(snippet.html)
  cssInstance?.setValue(snippet.css)
  snippetName.value = snippet.name
  snippetMessage.value = `Extrait « ${snippet.name} » chargé.`
  snippetsModalOpen.value = false
}

function deleteSnippet() {
  const name = selectedSnippetName.value

  if (!name) {
    snippetMessage.value = "Sélectionnez un extrait à supprimer."
    return
  }

  savedSnippets.value = savedSnippets.value.filter((snippet) => snippet.name !== name)
  localStorage.setItem(snippetsStorageKey, JSON.stringify(savedSnippets.value))
  selectedSnippetName.value = ""
  snippetName.value = ""
  snippetMessage.value = `Extrait « ${name} » supprimé.`
}

async function downloadSnippet() {
  const snippet = savedSnippets.value.find((item) => item.name === selectedSnippetName.value)

  if (!snippet) {
    snippetMessage.value = "Sélectionnez un extrait avant de le télécharger."
    return
  }

  const folderName = snippet.name
    .replace(/[<>:"/\\|?*]+/g, "-")
    .slice(0, 40)

  const htmlDocument = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${folderName}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
${snippet.html}
</body>
</html>`

  const zip = new JSZip()
  const folder = zip.folder(folderName)!
  folder.file("index.html", htmlDocument)
  folder.file("style.css", snippet.css)

  const archive = await zip.generateAsync({ type: "blob" })
  const downloadUrl = URL.createObjectURL(archive)
  const link = document.createElement("a")
  link.href = downloadUrl
  link.download = `${folderName}.zip`
  link.click()
  URL.revokeObjectURL(downloadUrl)
  snippetMessage.value = "Le dossier a été téléchargé."
}

onMounted(async () => {
  loadSavedSnippets()

  const sourceId = new URL(window.location.href).searchParams.get("source")
  const savedSource = sourceId
    ? localStorage.getItem(`code-sandbox-source:${sourceId}`)
    : sessionStorage.getItem("code-sandbox-source")

  if (savedSource) {
    try {
      const source = JSON.parse(savedSource) as { html?: string; css?: string }
      if (typeof source.html === "string") {
        initialHtml = normalizeCode(source.html)
        html.value = initialHtml
      }
      if (typeof source.css === "string") {
        initialCss = normalizeCode(source.css)
        css.value = initialCss
      }
    } catch {
      if (sourceId) {
        localStorage.removeItem(`code-sandbox-source:${sourceId}`)
      } else {
        sessionStorage.removeItem("code-sandbox-source")
      }
    }
  }

  await nextTick()
  refreshPreview()

  type MonacoEnvironment = {
    getWorker: (_moduleId: string, label: string) => Worker
  }

  ;(globalThis as typeof globalThis & { MonacoEnvironment: MonacoEnvironment }).MonacoEnvironment = {
    getWorker(_moduleId, label) {
      if (label === "css" || label === "scss" || label === "less") {
        return new CssWorker()
      }

      if (label === "html" || label === "handlebars" || label === "razor") {
        return new HtmlWorker()
      }

      return new EditorWorker()
    },
  }

  const monaco = await import("monaco-editor")

  monaco.editor.defineTheme("sandbox-light", {
    base: "vs",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#ffffff",
    },
  })

  monaco.editor.defineTheme("sandbox-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#1f2028",
    },
  })

  const isDarkMode = () => document.documentElement.classList.contains("dark")
  const currentTheme = () => (isDarkMode() ? "sandbox-dark" : "sandbox-light")

  htmlModel = monaco.editor.createModel(html.value, "html")
  cssModel = monaco.editor.createModel(css.value, "css")

  htmlInstance = monaco.editor.create(htmlEditor.value!, {
    model: htmlModel,
    theme: currentTheme(),
    automaticLayout: true,
    fixedOverflowWidgets: true,
    minimap: { enabled: false },
    fontSize: 14,
    tabSize: 2,
  })

  // Ctrl/Cmd+Alt+T insère <div>...</div> (ou enveloppe la sélection); le nom de balise est lié aux deux endroits.
  htmlInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyT, () => {
    const snippetController = htmlInstance?.getContribution("snippetController2") as
      | { insert: (template: string) => void }
      | null
    snippetController?.insert("<${1:div}>${TM_SELECTED_TEXT}$0</${1:div}>")
  })

  htmlInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Digit3, () => {
    htmlInstance?.trigger("keyboard", "editor.action.commentLine", null)
  })

  cssInstance = monaco.editor.create(cssEditor.value!, {
    model: cssModel,
    theme: currentTheme(),
    automaticLayout: true,
    fixedOverflowWidgets: true,
    minimap: { enabled: false },
    fontSize: 14,
    tabSize: 2,
  })

  // Ctrl/Cmd+Alt+R insère un squelette de règle CSS avec le sélecteur prêt à nommer.
  cssInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyR, () => {
    const snippetController = cssInstance?.getContribution("snippetController2") as
      | { insert: (template: string) => void }
      | null
    snippetController?.insert("${1:selector} {\n\t$0\n}")
  })

  cssInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Digit3, () => {
    cssInstance?.trigger("keyboard", "editor.action.commentLine", null)
  })

  stopHtmlChange = htmlModel.onDidChangeContent(() => {
    html.value = htmlModel?.getValue() ?? ""
  })

  stopCssChange = cssModel.onDidChangeContent(() => {
    css.value = cssModel?.getValue() ?? ""
  })

  const stopGlobalSearchShortcut = (event: KeyboardEvent) => {
    if (event.shiftKey && event.code === "Digit3") {
      event.stopPropagation()
    }
  }

  htmlEditor.value?.addEventListener("keydown", stopGlobalSearchShortcut)
  cssEditor.value?.addEventListener("keydown", stopGlobalSearchShortcut)
  stopEditorShortcutPropagation = () => {
    htmlEditor.value?.removeEventListener("keydown", stopGlobalSearchShortcut)
    cssEditor.value?.removeEventListener("keydown", stopGlobalSearchShortcut)
  }

  stopThemeObserver = new MutationObserver(() => {
    monaco.editor.setTheme(currentTheme())
  })
  stopThemeObserver.observe(document.documentElement, {
    attributeFilter: ["class"],
  })
})

onBeforeUnmount(() => {
  stopHtmlChange?.dispose()
  stopCssChange?.dispose()
  stopEditorShortcutPropagation?.()
  stopThemeObserver?.disconnect()
  htmlInstance?.dispose()
  cssInstance?.dispose()
  htmlModel?.dispose()
  cssModel?.dispose()
})
</script>

<template>
  <section class="sandbox" aria-label="Bac à sable HTML et CSS">
    <div class="sandbox__toolbar">
      <strong>Code du bac à sable</strong>
      <div class="sandbox__toolbar-actions">
        <button type="button" @click.stop="snippetsModalOpen = true">Extraits</button>
        <button type="button" @click.stop="refreshPreview">Actualiser l'aperçu</button>
        <button
          class="sandbox__outline-button"
          :class="{ 'is-active': htmlOutlineEnabled }"
          type="button"
          :aria-pressed="htmlOutlineEnabled"
          @click.stop="htmlOutlineEnabled = !htmlOutlineEnabled"
        >
          Balises HTML
        </button>
        <button type="button" @click.stop="resetSandbox">Réinitialiser</button>
      </div>
    </div>

    <div
      v-if="snippetsModalOpen"
      class="sandbox__modal-backdrop"
      role="presentation"
      @click.self="snippetsModalOpen = false"
      @keydown.esc="snippetsModalOpen = false"
    >
      <section
        class="sandbox__modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="snippets-title"
        aria-describedby="snippets-description"
        tabindex="-1"
      >
        <div class="sandbox__modal-header">
          <div>
            <h2 id="snippets-title">Mes extraits</h2>
            <p id="snippets-description">Enregistrez ou rechargez votre code dans ce navigateur. Pour une sauvegarde à long terme, téléchargez le dossier d'un extrait sélectionné.</p>
          </div>
          <button type="button" aria-label="Fermer" @click="snippetsModalOpen = false">×</button>
        </div>
        <p v-if="!savedSnippets.length" class="sandbox__modal-empty">
          Aucun extrait enregistré pour le moment.
        </p>
        <fieldset class="sandbox__modal-group">
          <legend>Enregistrer le code actuel</legend>
        <label class="sandbox__modal-label" for="snippet-name">Nom de l'extrait</label>
        <div class="sandbox__modal-save">
          <input
            id="snippet-name"
            v-model="snippetName"
            class="sandbox__snippet-name"
            type="text"
            placeholder="Ex. première carte"
            maxlength="40"
            required
            @keydown.enter="saveSnippet"
          />
          <button type="button" :disabled="!snippetName.trim()" @click="saveSnippet">Enregistrer</button>
        </div>
        </fieldset>
        <fieldset class="sandbox__modal-group">
          <legend>Charger un extrait</legend>
        <label class="sandbox__modal-label" for="snippet-list">Charger un extrait</label>
        <div class="sandbox__modal-load">
          <select
            id="snippet-list"
            v-model="selectedSnippetName"
            class="sandbox__snippet-list"
          >
            <option value="">Choisir un extrait</option>
            <option v-for="snippet in savedSnippets" :key="snippet.name" :value="snippet.name">
              {{ snippet.name }}
            </option>
          </select>
          <button type="button" :disabled="!selectedSnippetName" @click="loadSnippet">
            Charger
          </button>
        </div>
        <button
          class="sandbox__modal-delete"
          type="button"
          :disabled="!selectedSnippetName"
          @click="deleteSnippet"
        >
          Supprimer l'extrait sélectionné
        </button>
        <button
          class="sandbox__modal-download"
          type="button"
          :disabled="!selectedSnippetName"
          @click="downloadSnippet"
        >
          Télécharger le dossier
        </button>
        </fieldset>
        <p class="sandbox__modal-message" aria-live="polite">{{ snippetMessage }}</p>
      </section>
    </div>

    <div class="sandbox__editors">
      <div class="sandbox__editor">
        <span
          title="Ctrl+Alt+T (Cmd+Alt+T sur Mac) : insérer ou envelopper une balise | Ctrl+Shift+3 : commenter | Shift+Alt+F : formater"
        >HTML (&lt;body&gt;)</span>
        <div ref="htmlEditor" class="sandbox__monaco" role="textbox" aria-label="Code HTML"></div>
      </div>
      <div class="sandbox__editor">
        <span
          title="Ctrl+Alt+R (Cmd+Alt+R sur Mac) : insérer une règle CSS | Ctrl+Shift+3 : commenter | Shift+Alt+F : formater"
        >CSS</span>
        <div ref="cssEditor" class="sandbox__monaco" role="textbox" aria-label="Code CSS"></div>
      </div>
    </div>

    <div class="sandbox__result">
      <span class="sandbox__label">Aperçu</span>
      <iframe :key="previewKey" :srcdoc="documentHtml" title="Aperçu du code HTML et CSS"></iframe>
    </div>
  </section>
</template>

<style scoped>
.sandbox {
  box-sizing: border-box;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 1.5rem 0;
  max-width: 1100px;
  position: relative;
  width: min(1100px, calc(100vw - var(--vp-sidebar-width, 272px) - 48px));
}

.sandbox__toolbar {
  align-items: center;
  background: var(--vp-c-bg-soft);
  display: flex;
  justify-content: space-between;
  padding: 0.45rem 0.75rem;
  pointer-events: auto;
  position: relative;
  z-index: 2;
}

.sandbox__toolbar strong {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  font-weight: 600;
}

.sandbox__toolbar-actions {
  align-items: center;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.sandbox__modal-backdrop {
  align-items: center;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  z-index: 4000;
}

.sandbox__modal {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  max-width: 32rem;
  padding: 1rem;
  width: 100%;
}

.sandbox__modal-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.sandbox__modal-header h2 {
  color: var(--vp-c-text-1);
  font-size: 1rem;
  margin: 0;
}

.sandbox__modal-header p {
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  margin: 0.25rem 0 0;
}

.sandbox__modal-header button {
  background: transparent;
  border: 0;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1;
}

.sandbox__modal-label {
  color: var(--vp-c-text-2);
  display: block;
  font-size: 0.8rem;
  margin: 0.75rem 0 0.35rem;
}

.sandbox__modal-empty {
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  margin: 0 0 0.75rem;
  padding: 0.6rem;
}

.sandbox__modal-group {
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  margin: 0.75rem 0;
  padding: 0.25rem 0.75rem 0.75rem;
}

.sandbox__modal-group legend {
  color: var(--vp-c-text-1);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0 0.35rem;
}

.sandbox__modal-save {
  display: flex;
  gap: 0.5rem;
}

.sandbox__modal-load {
  display: flex;
  gap: 0.5rem;
}

.sandbox__snippet-name,
.sandbox__snippet-list {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  color: var(--vp-c-text-2);
  font: 0.8rem/1.4 inherit;
  min-width: 9rem;
  padding: 0.3rem 0.5rem;
}

.sandbox__modal .sandbox__snippet-name,
.sandbox__modal .sandbox__snippet-list {
  box-sizing: border-box;
  min-width: 0;
  width: 100%;
}

.sandbox__modal-save .sandbox__snippet-name {
  flex: 1;
}

.sandbox__modal-load .sandbox__snippet-list {
  flex: 1;
}

.sandbox__modal button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.sandbox__modal-delete {
  background: transparent;
  border: 0;
  color: var(--vp-c-danger-1, #b42318);
  cursor: pointer;
  display: block;
  font-size: 0.8rem;
  margin-top: 0.75rem;
  padding: 0;
}

.sandbox__modal-download {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  color: var(--vp-c-text-1);
  cursor: pointer;
  font: inherit;
  margin-top: 0.75rem;
  padding: 0.4rem 0.65rem;
  width: 100%;
}

.sandbox__modal-download:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.sandbox__modal-message {
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  min-height: 1.2em;
  margin: 0.75rem 0 0;
}

.sandbox__snippet-name:focus,
.sandbox__snippet-list:focus {
  border-color: var(--vp-c-brand-1);
  outline: 2px solid var(--vp-c-brand-dimm);
  outline-offset: 1px;
}

.sandbox__toolbar button {
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  pointer-events: auto;
}

.sandbox__toolbar button:hover {
  background: var(--vp-c-brand-dimm);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.sandbox__toolbar .sandbox__outline-button.is-active {
  background: rgba(220, 38, 38, 0.1);
  border-color: #dc2626;
  color: #dc2626;
}

.sandbox__editors {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  background: var(--vp-c-divider);
}

.sandbox__editor {
  background: var(--vp-code-block-bg);
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
}

.sandbox__editor span,
.sandbox__label {
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.6rem 0.75rem;
  text-transform: uppercase;
}

.sandbox__monaco {
  border-top: 1px solid var(--vp-c-divider);
  min-height: 190px;
  height: 240px;
  z-index: 2;
  pointer-events: auto;
  user-select: text;
  width: 100%;
}

.sandbox__result {
  background: var(--vp-c-bg);
  display: flex;
  flex-direction: column;
}

.sandbox__result iframe {
  background: #ffffff;
  border: 0;
  border-top: 1px solid var(--vp-c-divider);
  height: 420px;
  width: 100%;
}

@media (max-width: 959px) {
  .sandbox {
    width: calc(100vw - 32px);
  }
}

@media (max-width: 640px) {
  .sandbox__editors {
    grid-template-columns: 1fr;
  }
}
</style>
