---
outline: deep
---

# HTML : structurer le contenu

| | |
|---|---|
| **Objectif d'apprentissage** | OA-1 - Choisir et utiliser un outil d'édition Web |
| **Élément de compétence** | HK31P - Élément 1 : Choisir un outil d'édition Web |

HTML (*HyperText Markup Language*) sert à structurer le contenu d'une page Web. Il permet de donner un sens aux titres, aux paragraphes, aux liens, aux images et aux listes. L'apparence sera ajoutée avec CSS dans la prochaine page.

## Le squelette d'une page

Commencez chaque page avec une structure complète et indiquez la langue du document avec `lang`.

::: tabs
== Code
```html
<!doctype html>
<html lang="fr">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Le café du quartier</title>
	</head>
	<body>
		<h1>Le café du quartier</h1>
		<p>Découvrez nos cafés et nos pâtisseries du jour.</p>
	</body>
</html>
```
== Aperçu
<div class="preview">
	<h1>Le café du quartier</h1>
	<p>Découvrez nos cafés et nos pâtisseries du jour.</p>
</div>
:::

<SandboxButton html="<h1>Le café du quartier</h1>\n<p>Découvrez nos cafés et nos pâtisseries du jour.</p>" css="body {\n  font-family: sans-serif;\n  padding: 1rem;\n}" />

La section `head` contient les informations destinées au navigateur. La section `body` contient le contenu visible par la personne qui consulte la page.

## Les balises de contenu

Les titres organisent la hiérarchie de l'information. Une page possède généralement un seul `h1`, suivi de titres `h2` et, au besoin, de niveaux inférieurs.

::: tabs
== Code
```html
<h1>Le café du quartier</h1>
<h2>Notre menu</h2>
<p>Des produits préparés chaque matin.</p>

<h2>Nos spécialités</h2>
<ul>
	<li>Café filtre</li>
	<li>Cappuccino</li>
	<li>Thé glacé</li>
</ul>
```
== Aperçu
<div class="preview">
	<h1>Le café du quartier</h1>
	<h2>Notre menu</h2>
	<p>Des produits préparés chaque matin.</p>
	<h2>Nos spécialités</h2>
	<ul>
		<li>Café filtre</li>
		<li>Cappuccino</li>
		<li>Thé glacé</li>
	</ul>
</div>
:::

<SandboxButton html="<h1>Le café du quartier</h1>\n<h2>Notre menu</h2>\n<p>Des produits préparés chaque matin.</p>\n<h2>Nos spécialités</h2>\n<ul>\n  <li>Café filtre</li>\n  <li>Cappuccino</li>\n  <li>Thé glacé</li>\n</ul>" css="" />

Utilisez une liste `ul` lorsque l'ordre n'est pas important et une liste `ol` lorsque les étapes doivent être suivies dans un ordre précis.

## Liens et images

Un lien utilise l'attribut `href`. Une image doit toujours posséder un texte alternatif avec l'attribut `alt`.

::: tabs
== Code
```html
<a href="menu.html">Consulter le menu</a>

<img src="img/cafe.jpg" alt="Tasse de café sur une table en bois" />
```
== Aperçu
<div class="preview">
	<a href="#">Consulter le menu</a>
	<p><em>L'image apparaîtra ici lorsque le fichier `img/cafe.jpg` sera ajouté au projet.</em></p>
</div>
:::

<SandboxButton html="<a href=&quot;menu.html&quot;>Consulter le menu</a>\n<img src=&quot;img/cafe.jpg&quot; alt=&quot;Tasse de café sur une table en bois&quot; />" css="" />

Le texte de `alt` décrit l'information utile de l'image. Une image purement décorative peut utiliser `alt=""`.

## À retenir

- HTML structure et décrit le contenu; il ne sert pas à choisir les couleurs.
- La hiérarchie des titres doit suivre l'organisation réelle du contenu.
- Les chemins vers les pages et les images doivent être relatifs au fichier courant.
- Les attributs `lang`, `alt` et `title` contribuent à une intégration plus accessible.

## Pour pratiquer

Créez le fichier `index.html` d'une petite page de café ou de commerce local. Ajoutez un titre principal, deux sections, une liste, un lien et une image avec un texte alternatif pertinent.

## Ressources

- [MDN - Commencer avec le HTML](https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [MDN - Éléments HTML](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements)
- [W3C - Validation HTML](https://validator.w3.org/)