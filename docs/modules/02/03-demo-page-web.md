---
outline: deep
---

# Démonstration : intégrer une page Web

| | |
|---|---|
| **Objectif d'apprentissage** | OA-1, OA-3 et OA-5 |
| **Élément de compétence** | HK31P - Éléments 1 et 4 |

Cette démonstration rassemble les notions vues dans les deux premières pages. Nous construirons une page de présentation pour le café **Le Grain Matin** à partir d'un contenu simple et d'une petite direction visuelle.

## Organisation des fichiers

```text
grain-matin/
├── index.html
├── css/
│   └── style.css
└── img/
    └── cafe.jpg
```

## Étape 1 : structure HTML

Créez les zones principales avec des balises qui décrivent leur rôle.

::: tabs
== Code HTML
```html
<body>
	<header class="entete">
		<a class="logo" href="index.html">Le Grain Matin</a>
		<nav aria-label="Navigation principale">
			<a href="#menu">Menu</a>
			<a href="#visite">Nous trouver</a>
		</nav>
	</header>

	<main>
		<section class="hero" aria-labelledby="titre-page">
			<div>
				<p class="surtitre">Café de quartier</p>
				<h1 id="titre-page">Des matins bien commencés.</h1>
				<p>Du café torréfié sur place et des pâtisseries faites chaque jour.</p>
				<a class="bouton" href="#menu">Découvrir le menu</a>
			</div>
			<img src="img/cafe.jpg" alt="Tasse de café et croissant sur une table" />
		</section>

		<section id="menu" aria-labelledby="titre-menu">
			<h2 id="titre-menu">Les incontournables</h2>
			<div class="cartes">
				<article class="carte">
					<h3>Espresso</h3>
					<p>Une extraction courte au goût franc.</p>
				</article>
				<article class="carte">
					<h3>Croissant du jour</h3>
					<p>Une pâte feuilletée dorée et croustillante.</p>
				</article>
			</div>
		</section>
	</main>

	<footer id="visite">
		<p>42, rue du Marché · Ouvert du lundi au samedi</p>
	</footer>
</body>
```
== Aperçu
<div class="preview" style="background: #f7f1e8; color: #542f24; padding: 1.5rem;">
	<header style="align-items: center; display: flex; justify-content: space-between; gap: 1rem;">
		<strong>Le Grain Matin</strong>
		<nav aria-label="Aperçu de la navigation">
			<a href="#demo-menu" style="color: #c86632;">Menu</a>
		</nav>
	</header>
	<section style="padding-block: 2rem;">
		<p style="color: #c86632;">Café de quartier</p>
		<h1>Des matins bien commencés.</h1>
		<p>Du café torréfié sur place et des pâtisseries faites chaque jour.</p>
		<a href="#demo-menu" style="color: #c86632;">Découvrir le menu</a>
	</section>
	<section id="demo-menu">
		<h2>Les incontournables</h2>
		<div style="display: grid; gap: 1rem; grid-template-columns: repeat(2, 1fr);">
			<article style="background: #ffffff; border: 1px solid #dfc7ad; padding: 1rem;">
				<h3>Espresso</h3>
				<p>Une extraction courte au goût franc.</p>
			</article>
			<article style="background: #ffffff; border: 1px solid #dfc7ad; padding: 1rem;">
				<h3>Croissant du jour</h3>
				<p>Une pâte feuilletée dorée et croustillante.</p>
			</article>
		</div>
	</section>
</div>
:::

<SandboxButton html="<header class=&quot;entete&quot;>\n  <a class=&quot;logo&quot; href=&quot;index.html&quot;>Le Grain Matin</a>\n  <nav aria-label=&quot;Navigation principale&quot;>\n    <a href=&quot;#menu&quot;>Menu</a>\n    <a href=&quot;#visite&quot;>Nous trouver</a>\n  </nav>\n</header>\n<main>\n  <section class=&quot;hero&quot; aria-labelledby=&quot;titre-page&quot;>\n    <div>\n      <p class=&quot;surtitre&quot;>Café de quartier</p>\n      <h1 id=&quot;titre-page&quot;>Des matins bien commencés.</h1>\n      <p>Du café torréfié sur place et des pâtisseries faites chaque jour.</p>\n      <a class=&quot;bouton&quot; href=&quot;#menu&quot;>Découvrir le menu</a>\n    </div>\n    <img src=&quot;img/cafe.jpg&quot; alt=&quot;Tasse de café et croissant sur une table&quot; />\n  </section>\n  <section id=&quot;menu&quot; aria-labelledby=&quot;titre-menu&quot;>\n    <h2 id=&quot;titre-menu&quot;>Les incontournables</h2>\n    <div class=&quot;cartes&quot;>\n      <article class=&quot;carte&quot;>\n        <h3>Espresso</h3>\n        <p>Une extraction courte au goût franc.</p>\n      </article>\n      <article class=&quot;carte&quot;>\n        <h3>Croissant du jour</h3>\n        <p>Une pâte feuilletée dorée et croustillante.</p>\n      </article>\n    </div>\n  </section>\n</main>\n<footer id=&quot;visite&quot;>\n  <p>42, rue du Marché · Ouvert du lundi au samedi</p>\n</footer>" css=":root {\n  --brun: #542f24;\n  --creme: #f7f1e8;\n  --orange: #c86632;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: var(--creme);\n  color: var(--brun);\n  font-family: Georgia, serif;\n  line-height: 1.6;\n  margin: 0;\n}\n\n.entete,\n.hero,\nmain > section,\nfooter {\n  margin-inline: auto;\n  max-width: 72rem;\n  padding: 1.5rem;\n}\n\n.entete,\n.hero {\n  align-items: center;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-between;\n}\n\n.hero > * {\n  flex: 1;\n}\n\n.hero img {\n  border-radius: 0.5rem;\n  max-width: 100%;\n}\n\n.cartes {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.carte {\n  background: #ffffff;\n  border: 1px solid #dfc7ad;\n  padding: 1.25rem;\n}\n\na {\n  color: var(--orange);\n}\n\na:hover,\na:focus-visible {\n  color: var(--brun);\n}" />

## Étape 2 : présentation CSS

Commencez par les styles généraux, puis ajoutez la disposition des zones et les composants réutilisables.

::: tabs
== Code CSS
```css
:root {
	--brun: #542f24;
	--creme: #f7f1e8;
	--orange: #c86632;
}

* {
	box-sizing: border-box;
}

body {
	background: var(--creme);
	color: var(--brun);
	font-family: Georgia, serif;
	line-height: 1.6;
	margin: 0;
}

.entete,
.hero,
main > section,
footer {
	margin-inline: auto;
	max-width: 72rem;
	padding: 1.5rem;
}

.entete,
.hero {
	align-items: center;
	display: flex;
	gap: 2rem;
	justify-content: space-between;
}

.hero > * {
	flex: 1;
}

.hero img {
	border-radius: 0.5rem;
	max-width: 100%;
}

.cartes {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(2, 1fr);
}

.carte {
	background: #ffffff;
	border: 1px solid #dfc7ad;
	padding: 1.25rem;
}

a {
	color: var(--orange);
}

a:hover,
a:focus-visible {
	color: var(--brun);
}
```
== Aperçu
<div class="preview" style="background: #f7f1e8; color: #542f24; padding: 1.5rem;">
	<div style="display: grid; gap: 1rem; grid-template-columns: repeat(2, 1fr);">
		<div style="background: #ffffff; border: 1px solid #dfc7ad; padding: 1rem;">Carte Espresso</div>
		<div style="background: #ffffff; border: 1px solid #dfc7ad; padding: 1rem;">Carte Croissant</div>
	</div>
</div>
:::

<SandboxButton html="<header><strong>Le Grain Matin</strong></header>\n<main><h1>Des matins bien commencés.</h1><div class=&quot;cartes&quot;><article>Espresso</article><article>Croissant</article></div></main>" css=":root {\n  --brun: #542f24;\n  --creme: #f7f1e8;\n  --orange: #c86632;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background: var(--creme);\n  color: var(--brun);\n  font-family: Georgia, serif;\n  line-height: 1.6;\n  margin: 0;\n}\n\n.entete,\n.hero,\nmain > section,\nfooter {\n  margin-inline: auto;\n  max-width: 72rem;\n  padding: 1.5rem;\n}\n\n.entete,\n.hero {\n  align-items: center;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-between;\n}\n\n.hero > * {\n  flex: 1;\n}\n\n.hero img {\n  border-radius: 0.5rem;\n  max-width: 100%;\n}\n\n.cartes {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.carte {\n  background: #ffffff;\n  border: 1px solid #dfc7ad;\n  padding: 1.25rem;\n}\n\na {\n  color: var(--orange);\n}\n\na:hover,\na:focus-visible {\n  color: var(--brun);\n}" />

## Étape 3 : vérifier le résultat

1. Ouvrez `index.html` dans le navigateur et comparez le rendu avec la structure prévue.
2. Vérifiez les liens internes `#menu` et `#visite`.
3. Redimensionnez la fenêtre pour repérer les problèmes de disposition.
4. Validez le HTML avec le [validateur W3C](https://validator.w3.org/) et corrigez les erreurs.
5. Validez le CSS avec le [validateur CSS](https://jigsaw.w3.org/css-validator/).

::: tip Démonstration en classe
Observez l'ordre de travail : structurer le contenu, lier la feuille de style, appliquer les styles généraux, réaliser la disposition, puis vérifier le résultat dans le navigateur.
:::

## Pour pratiquer

Reprenez cette démonstration en changeant le commerce, les textes, l'image et les couleurs. Conservez une structure sémantique, des noms de classes descriptifs et une feuille de style externe.