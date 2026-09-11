---
outline: deep
---

# CSS : présenter le contenu

| | |
|---|---|
| **Objectif d'apprentissage** | OA-3 - Appliquer la présentation visuelle d'une interface Web |
| **Élément de compétence** | HK31P - Élément 4 : Appliquer la présentation visuelle |

CSS (*Cascading Style Sheets*) sert à contrôler l'apparence d'une page HTML. Une règle CSS associe un sélecteur à une ou plusieurs propriétés.

## Lier une feuille de style

Créez un fichier `style.css`, puis liez-le dans l'élément `head` de votre page HTML.

::: tabs
== Code HTML
```html
<link rel="stylesheet" href="css/style.css" />
```
== Code CSS
```css
body {
	background-color: #f7f1e8;
	color: #252525;
	font-family: Georgia, serif;
}
```
== Aperçu
<div class="preview" style="background-color: #f7f1e8; color: #252525; font-family: Georgia, serif;">
	<strong>Le Grain Matin</strong>
	<p>Une feuille de style externe contrôle la présentation de cette zone.</p>
</div>
:::

<SandboxButton html="<strong>Le Grain Matin</strong>\n<p>Une feuille de style externe contrôle la présentation de cette zone.</p>" css="body {\n  background-color: #f7f1e8;\n  color: #252525;\n  font-family: Georgia, serif;\n}" />

Une feuille de style externe facilite la réutilisation des règles sur plusieurs pages et sépare le contenu de la présentation.

## Sélecteurs et classes

Un sélecteur de balise vise tous les éléments du même type. Une classe vise uniquement les éléments qui possèdent l'attribut correspondant.

::: tabs
== Code HTML
```html
<p class="introduction">Un café de quartier, simple et chaleureux.</p>
```
== Code CSS
```css
p {
	line-height: 1.6;
}

.introduction {
	font-size: 1.25rem;
	font-weight: 700;
}
```
== Aperçu
<div class="preview">
	<p style="line-height: 1.6; font-size: 1.25rem; font-weight: 700;">Un café de quartier, simple et chaleureux.</p>
</div>
:::

<SandboxButton html="<p class=&quot;introduction&quot;>Un café de quartier, simple et chaleureux.</p>" css="p {\n  line-height: 1.6;\n}\n\n.introduction {\n  font-size: 1.25rem;\n  font-weight: 700;\n}" />

Préférez les classes pour les styles réutilisables. Évitez de multiplier les identifiants `id` pour la présentation.

## Couleurs, espacements et modèle de boîte

Chaque élément possède une boîte. `padding` crée un espace intérieur, `border` ajoute une bordure et `margin` crée un espace extérieur.

::: tabs
== Code CSS
```css
.carte {
	background-color: #ffffff;
	border: 2px solid #d5b895;
	border-radius: 0.5rem;
	margin: 1rem 0;
	padding: 1.5rem;
}
```
== Aperçu
<div class="preview" style="background-color: #ffffff; border: 2px solid #d5b895; border-radius: 0.5rem; margin: 1rem 0; padding: 1.5rem;">
	<strong>Carte de contenu</strong>
	<p>Le modèle de boîte combine la bordure, l'espace intérieur et l'espace extérieur.</p>
</div>
:::

<SandboxButton html="<div class=&quot;carte&quot;><strong>Carte de contenu</strong><p>Le modèle de boîte combine la bordure, l'espace intérieur et l'espace extérieur.</p></div>" css=".carte {\n  background-color: #ffffff;\n  border: 2px solid #d5b895;\n  border-radius: 0.5rem;\n  margin: 1rem 0;\n  padding: 1.5rem;\n}" />

Utilisez quelques valeurs d'espacement cohérentes plutôt que des valeurs différentes pour chaque élément.

## Une première disposition

Flexbox permet de disposer des éléments sur une ligne ou une colonne.

::: tabs
== Code CSS
```css
.menu {
	display: flex;
	gap: 1rem;
	justify-content: space-between;
}
```
== Aperçu
<div class="preview" style="display: flex; gap: 1rem; justify-content: space-between;">
	<span>Espresso</span>
	<span>Thé glacé</span>
	<span>Croissant</span>
</div>
:::

<SandboxButton html="<div class=&quot;menu&quot;><span>Espresso</span><span>Thé glacé</span><span>Croissant</span></div>" css=".menu {\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n}" />

Pour une grille de cartes, CSS Grid est souvent plus approprié.

::: tabs
== Code CSS
```css
.cartes {
	display: grid;
	gap: 1.5rem;
	grid-template-columns: repeat(3, 1fr);
}
```
== Aperçu
<div class="preview" style="display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr);">
	<div style="border: 1px solid var(--vp-c-divider); padding: 1rem;">Espresso</div>
	<div style="border: 1px solid var(--vp-c-divider); padding: 1rem;">Cappuccino</div>
	<div style="border: 1px solid var(--vp-c-divider); padding: 1rem;">Thé</div>
</div>
:::

<SandboxButton html="<div class=&quot;cartes&quot;><div>Espresso</div><div>Cappuccino</div><div>Thé</div></div>" css=".cartes {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.cartes > div {\n  border: 1px solid #d5b895;\n  padding: 1rem;\n}" />

## États interactifs

Les pseudo-classes permettent de donner un retour visuel lorsqu'une personne interagit avec un lien ou un bouton.

::: tabs
== Code CSS
```css
a {
	color: #7a3e24;
	transition: color 160ms ease-in-out;
}

a:hover,
a:focus-visible {
	color: #b45f32;
}
```
== Aperçu
<div class="preview">
	<a href="#" style="color: #7a3e24;">Survolez ou sélectionnez ce lien</a>
</div>
:::

<SandboxButton html="<a href=&quot;#&quot;>Survolez ou sélectionnez ce lien</a>" css="a {\n  color: #7a3e24;\n  transition: color 160ms ease-in-out;\n}\n\na:hover,\na:focus-visible {\n  color: #b45f32;\n}" />

Le style `:focus-visible` doit rester clairement visible afin de soutenir la navigation au clavier.

## Pour pratiquer

Ajoutez une feuille `css/style.css` à la page créée dans la section HTML. Appliquez une couleur de fond, une typographie, des espacements, une disposition Flexbox et un état `:hover` aux liens.

## Ressources

- [MDN - Premiers pas en CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps)
- [MDN - Référence CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Reference)
- [MDN - Guide Flexbox](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)