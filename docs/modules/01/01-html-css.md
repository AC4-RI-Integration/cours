---
outline: deep
---

# HTML et CSS

| | |
|---|---|
| **Objectif d'apprentissage** | OA-1 - Choisir et utiliser un outil d'édition Web |
| **Élément de compétence** | HK31 - Élément 1 : Choisir un outil d'édition Web |

Une page Web est construite avec plusieurs technologies qui ont chacune un rôle précis.

## Anatomie d'une page Web

Une page Web typique suit généralement une organisation semblable à celle illustrée ci-dessous. Le langage HTML sert à structurer le contenu et ses différentes sections, tandis que le langage CSS sert à le présenter.

![Anatomie d'une page HTML](/modules/01/img/anatomie.png)

### Décortiquons un vrai site

Ouvrez le site Web [Bonjour Québec](https://www.bonjourquebec.com/fr-ca) dans un nouvel onglet. Observez cette page simple comme une intégratrice ou un intégrateur Web, puis comparez-la avec l'image ci-dessus.

1. **L'en-tête** : quels éléments de la page pourraient se trouver dans un en-tête de page `<header>` ? Repérez le logo, le titre et les outils de navigation.
2. **La navigation** : où se trouve la navigation principale `<nav>` ?
3. **Le contenu principal** : quelle zone correspond au contenu principal `<main>` ? Quel est son titre principal et quelles sections y sont regroupées ?
4. **La barre latérale** : le site possède-t-il une barre latérale ?
5. **Le pied de page** : quels liens ou renseignements pourraient être regroupés dans un pied de page `<footer>` ?

::: tip Synthèse
Une page Web est composée de différentes sections ayant différents rôles. Le code HTML sert à délimiter ces sections. Attention, le code HTML sert uniquement à structurer et à organiser le contenu. Il n'a presqu'aucune incidence sur l'apparance.
:::

## Les langages HTML et CSS

HTML et CSS travaillent ensemble, mais ils ne font pas la même chose. Le HTML organise le contenu; le CSS contrôle son apparence.

### HTML

**HTML** (*HyperText Markup Language*) structure le contenu : titres, paragraphes, liens, images et listes.

::: tabs
== Code
```html
<h1>Le café du quartier</h1>
<p>Découvrez nos cafés et nos pâtisseries du jour.</p>
<a href="https://example.com">Voir le menu</a>
```
== Aperçu
<div class="preview">
	<h1>Le café du quartier</h1>
	<p>Découvrez nos cafés et nos pâtisseries du jour.</p>
	<a href="#">Voir le menu</a>
</div>
:::

<SandboxButton html="<h1>Le café du quartier</h1>\n<p>Découvrez nos cafés et nos pâtisseries du jour.</p>\n<a href=&quot;https://example.com&quot;>Voir le menu</a>" css="" />

Le HTML décrit le contenu, pas son apparence : les couleurs, les polices et les espacements relèvent du CSS.

- [MDN - Introduction au HTML](https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML)
- [MDN - Référence des éléments HTML](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements)

### CSS

**CSS** (*Cascading Style Sheets*) présente le contenu HTML : couleurs, typographie, espacements et disposition. Une règle CSS associe un **sélecteur** à des **propriétés**.

::: tabs
== Code
```css
body {
	background-color: #f5f5f5;
	color: #222222;
	font-family: Arial, sans-serif;
}

h1 {
	color: #092d74;
}
```
== Aperçu
<div class="preview" style="background-color: #f5f5f5; color: #222222; font-family: Arial, sans-serif;">
	<h1 style="color: #092d74;">Le café du quartier</h1>
	<p>Découvrez nos cafés et nos pâtisseries du jour.</p>
</div>
:::

<SandboxButton html="<h1>Le café du quartier</h1>\n<p>Découvrez nos cafés et nos pâtisseries du jour.</p>" css="body {\n  background-color: #f5f5f5;\n  color: #222222;\n  font-family: Arial, sans-serif;\n  padding: 1rem;\n}\n\nh1 {\n  color: #092d74;\n}" />

Chaque propriété reçoit une valeur et se termine par un point-virgule. Pour appliquer `style.css` à `index.html`, ajoutez ce lien dans `<head>` :

::: tabs
== Code HTML
```html
<link rel="stylesheet" href="style.css" />
```
== Code CSS
```css
body {
	background-color: #f5f5f5;
	color: #222222;
	font-family: Arial, sans-serif;
}
```
== Aperçu
<div class="preview" style="background-color: #f5f5f5; color: #222222; font-family: Arial, sans-serif;">
	<strong>style.css est liée à la page HTML.</strong>
	<p>Les styles externes peuvent être réutilisés sur plusieurs pages.</p>
</div>
:::

<SandboxButton html="<strong>style.css est liée à la page HTML.</strong>\n<p>Les styles externes peuvent être réutilisés sur plusieurs pages.</p>" css="body {\n  background-color: #f5f5f5;\n  color: #222222;\n  font-family: Arial, sans-serif;\n}" />

- [MDN - Premiers pas en CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps)
- [MDN - Référence CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Reference)

### Démonstration : retirer le CSS d'une page

::: tip Extension utilisée
L'extension Chrome [Disable CSS](https://chromewebstore.google.com/detail/eehkdgmcadagljjahfpnkffgiihhffma?utm_source=item-share-cb) permet d'activer ou de désactiver rapidement le CSS d'une page Web.
:::

### Éditeur de code

L'éditeur de code sert à écrire le code sous forme textuelle. L'exemple le plus simple est le Bloc Notes déjà installé sur votre ordinateur. Dans ce cours, utilisez [Visual Studio Code](https://code.visualstudio.com/) pour écrire et organiser le code. Ouvrez toujours le **dossier du projet** afin de voir les fichiers comme `index.html`, `style.css` et le dossier `img/`.

::: warning Utilisation de l'IAg
Les outils d'IAg sont intégrés dans VS Code. L'utilisation de l'IAg est encadrée dans ce cours. N'utilisez que les balises et les consignes fournies par l'enseignant lors des différentes évaluations. Il faut toujours comprendre et **maîtriser** le code que l'on remet.
:::

## Les navigateurs

Une fois le code HTML et CSS écrit, il peut être exécuté à l'aide d'un navigateur. Un navigateur, comme [Google Chrome](https://www.google.com/intl/fr_ca/chrome/) ou [Mozilla Firefox](https://www.firefox.com/fr/), interprète le HTML et le CSS. Vérifiez régulièrement votre page dans le navigateur pour repérer les erreurs de balisage, de liaison CSS ou de chemin d'image.

## Pour pratiquer

Réalisez le [Lab 1 - Configurer son environnement de développement Web](/labs/lab01).