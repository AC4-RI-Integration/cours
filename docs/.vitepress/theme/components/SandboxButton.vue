<script setup lang="ts">
type SandboxButtonProps = {
  html?: string
  css?: string
}

const props = defineProps<SandboxButtonProps>()

function saveSource() {
  const sourceId = crypto.randomUUID()
  localStorage.setItem(
    `code-sandbox-source:${sourceId}`,
    JSON.stringify({
      html: props.html ?? "",
      css: props.css ?? "",
    }),
  )
  return sourceId
}

function openSandbox() {
  const sourceId = saveSource()

  const sandboxUrl = `${import.meta.env.BASE_URL}sandbox?source=${encodeURIComponent(sourceId)}`
  window.open(sandboxUrl, "_blank", "noopener")
}
</script>

<template>
  <button class="sandbox-button" type="button" @click="openSandbox">
    Tester l'extrait
  </button>
</template>

<style scoped>
.sandbox-button {
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  display: inline-block;
  font: 0.85rem/1.4 inherit;
  margin: 0.75rem 0;
  padding: 0.35rem 0.65rem;
  transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease;
}

.sandbox-button:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-text-3);
  color: var(--vp-c-text-1);
}
</style>
