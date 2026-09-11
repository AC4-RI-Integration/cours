---
outline: deep
---

# Lab 2 - Créer et styliser une première page Web

## Informations

| | |
|---|---|
| **Module** | Module 2 - Créer une première page Web |
| **Objectif d'apprentissage** | OA-1 - Choisir et utiliser un outil d'édition Web |
| **Éléments de compétence** | Élément 1 - Choisir un outil d'édition Web |
| **Remise** | Formatif - aucune remise |

## Contexte

La **Librairie des voisins** vous demande une première page d'accueil pour présenter son commerce avant le lancement de son futur site Web. Vous allez produire une page simple, lisible et fonctionnelle qui pourra être ouverte dans un navigateur.

Ce laboratoire sert de préparation technique à la première évaluation du cours.

## Contenu fourni par le client

- **Nom du commerce** : Librairie des voisins
- **Titre principal** : Des histoires à découvrir, tout près de chez vous
- **Texte** : Découvrez nos nouveautés, nos coups de cœur et nos activités littéraires de quartier.
- **Lien** : Découvrir nos livres
- **Image** : une image dont la licence autorise l'utilisation et qui évoque une librairie, des livres ou la lecture

## Livrable de travail

Créez un dossier nommé `lab02` contenant au minimum :

```text
lab02/
	index.html
	style.css
	img/
```

Le dossier `img/` doit contenir l'image utilisée dans la page. Utilisez des noms de fichiers en minuscules, sans espaces ni accents.

---

## Étapes

### Étape 1 - Créer le projet

1. Ouvrez le dossier `lab02` dans VS Code.
2. Créez `index.html`, `style.css` et le dossier `img/`.
3. Ajoutez une image libre de droits dans `img/`, ou utilisez une image de remplacement temporaire.
4. Vérifiez que l'extension de chaque fichier est correcte.

Pour trouver une image, consultez une banque d'images ou une collection offrant une licence d'utilisation clairement indiquée :

- [Openverse](https://openverse.org/) - moteur de recherche de médias sous licences ouvertes;
- [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) - collection de médias dont la licence est indiquée sur chaque page;
- [Unsplash](https://unsplash.com/) - photos utilisables selon la licence Unsplash;
- [Pexels](https://www.pexels.com/fr-fr/) - photos et vidéos utilisables selon la licence Pexels;
- [Pixabay](https://pixabay.com/fr/) - images et médias utilisables selon les conditions de la licence Pixabay.

Lisez la licence de l'image choisie et conservez l'adresse de sa page source. Si la licence exige une attribution, ajoutez-la dans votre page ou dans un fichier `sources.txt`.

::: tip Conseil
Ouvrez toujours le dossier du projet dans VS Code. Vous pourrez ainsi vérifier visuellement les chemins relatifs entre `index.html`, `style.css` et le dossier `img/`.
:::

### Étape 2 - Écrire la structure HTML

Dans `index.html`, écrivez un squelette HTML valide et ajoutez les éléments suivants :

- le nom du commerce dans un titre `<h1>`;
- le titre principal dans un paragraphe;
- le texte fourni par le client dans un paragraphe;
- une image avec un attribut `alt` descriptif;
- un lien dont le texte visible est `Découvrir nos livres`.

Ajoutez également un titre d'onglet descriptif dans l'élément `<title>`.

Reliez ensuite la feuille de styles externe dans la section `<head>` :

```html
<link rel="stylesheet" href="style.css" />
```

Le chemin de l'image doit être relatif à `index.html`, par exemple :

```html
<img src="img/livres.jpg" alt="Livres présentés sur une table de librairie" />
```

::: warning Accessibilité
L'attribut `alt` doit décrire le contenu ou la fonction de l'image. N'écrivez pas seulement `image` ou le nom du fichier.
:::

### Étape 3 - Ajouter les premières règles CSS

Dans `style.css`, créez une présentation simple et cohérente. Utilisez au minimum :

- une couleur d'arrière-plan;
- une couleur de texte;
- une famille de caractères;
- une taille de texte;
- un espacement autour du contenu.

Vous pouvez commencer par ce plan, puis choisir vos propres valeurs :

```css
body {
	background-color: #f0eee6;
	color: #252a32;
	font-family: Arial, sans-serif;
	font-size: 1rem;
	margin: 2rem;
}
```

Pour chaque propriété CSS ajoutée, consultez une documentation fiable et notez la source dans un commentaire de `style.css`. Par exemple :

```css
/* Source : MDN, propriété color - https://developer.mozilla.org/fr/docs/Web/CSS/color */
body {
	color: #252a32;
}
```

Ressources recommandées :

- [MDN - Référence CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Reference)
- [MDN - Premiers pas en CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps)
- [W3C - CSS](https://www.w3.org/Style/CSS/)

### Étape 4 - Prévisualiser et corriger

1. Ouvrez `index.html` avec **Live Preview**, **Live Server** ou directement dans le navigateur.
2. Vérifiez que le texte, l'image et le lien sont visibles.
3. Modifiez une valeur CSS et observez le changement dans le navigateur.
4. Corrigez les erreurs de chemin, de syntaxe ou de liaison entre les fichiers.

### Étape 5 - Valider le code

Utilisez l'extension **W3C Web Validator** ou le [validateur HTML W3C](https://validator.w3.org/) pour vérifier `index.html`.

Avant de terminer, vérifiez notamment que :

- le document commence par `<!DOCTYPE html>`;
- l'élément `<html>` possède l'attribut `lang="fr"`;
- la feuille `style.css` est correctement liée;
- l'image possède un attribut `alt`;
- les éléments HTML sont correctement imbriqués et fermés.

Vérifiez aussi que le code est indenté de façon uniforme et qu'il ne contient pas de retours de ligne inutiles. Corrigez les erreurs trouvées, puis rechargez la page dans le navigateur.

---

## Critères de réussite

<ul class="checklist">
  <li><label><input type="checkbox" /> <span class="check-text">Le dossier contient <code>index.html</code>, <code>style.css</code> et le dossier <code>img/</code></span></label></li>
	<li><label><input type="checkbox" /> <span class="check-text">La page affiche le nom et le contenu fournis par la librairie</span></label></li>
  <li><label><input type="checkbox" /> <span class="check-text">L'image possède un chemin relatif valide et un attribut <code>alt</code> descriptif</span></label></li>
  <li><label><input type="checkbox" /> <span class="check-text">La feuille <code>style.css</code> est liée et modifie l'apparence de la page</span></label></li>
  <li><label><input type="checkbox" /> <span class="check-text">La page utilise une couleur, une typographie et un espacement cohérents</span></label></li>
  <li><label><input type="checkbox" /> <span class="check-text">Le code HTML est vérifié et les erreurs repérées sont corrigées</span></label></li>
</ul>

## Pour aller plus loin

Comparez votre page avec les exigences du [TP1 - ES1 : Explorer les outils d'édition Web](/travaux/tp1). Identifiez ce qui est déjà prêt et ce qui devra être ajouté avant la remise, notamment les captures d'écran et la vérification complète du projet.

## Utilisation de l'IAg

L'IAg peut être utilisée pour repérer une documentation ou une banque d'images pertinente, puis pour expliquer une notion abordée dans le laboratoire. Elle ne doit pas générer le code remis. Vous devez être en mesure d'expliquer et de modifier vous-même chaque ligne de votre projet.
