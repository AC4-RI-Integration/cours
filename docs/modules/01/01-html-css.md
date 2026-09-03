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

Une page Web typique suit généralement l'exemple suivant. Le langage HTML sert à indiquer le contenu ainsi que les différentes sections tandis que le langage CSS sert à décorer et à positionner le contenu.

![Anatomie d'une page HTML](/modules/01/img/anatomie.png)

## Les langages HTML et CSS

HTML et CSS travaillent ensemble, mais ils ne font pas la même chose. Le HTML organise le contenu; le CSS contrôle son apparence.

### HTML

**HTML** (*HyperText Markup Language*) structure le contenu : titres, paragraphes, liens, images et listes.

```html
<h1>Le café du quartier</h1>
<p>Découvrez nos cafés et nos pâtisseries du jour.</p>
<a href="https://example.com">Voir le menu</a>
```

Le HTML décrit le contenu, pas son apparence : les couleurs, les polices et les espacements relèvent du CSS.

- [MDN - Introduction au HTML](https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML)
- [MDN - Référence des éléments HTML](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements)

### CSS

**CSS** (*Cascading Style Sheets*) présente le contenu HTML : couleurs, typographie, espacements et disposition. Une règle CSS associe un **sélecteur** à des **propriétés**.

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

Chaque propriété reçoit une valeur et se termine par un point-virgule. Pour appliquer `style.css` à `index.html`, ajoutez ce lien dans `<head>` :

```html
<link rel="stylesheet" href="style.css" />
```

- [MDN - Premiers pas en CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/First_steps)
- [MDN - Référence CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Reference)

### Éditeur de code

L'éditeur de code sert à écrire le code sous forme textuelle. L'exemple le plus simple est le Bloc Notes déjà installé sur votre ordinateur. Dans ce cours, utilisez [Visual Studio Code](https://code.visualstudio.com/) pour écrire et organiser le code. Ouvrez toujours le **dossier du projet** afin de voir les fichiers comme `index.html`, `style.css` et le dossier `img/`.

::: warning Utilisation de l'IAg
Les outils d'IAg sont intégrés dans VS Code. L'utilisation de l'IAg est encadrée dans ce cours. N'utilisez que les balises et les consignes fournies par l'enseignant, déclarez toute utilisation autorisée et assurez-vous de comprendre le code remis.
:::

## Les navigateurs

Un navigateur, comme [Google Chrome](https://www.google.com/intl/fr_ca/chrome/) ou [Mozilla Firefox](https://www.firefox.com/fr/), interprète le HTML et le CSS. Vérifiez régulièrement votre page dans le navigateur pour repérer les erreurs de balisage, de liaison CSS ou de chemin d'image.

## Pour pratiquer

Réalisez le [Lab 1 - Configurer son environnement de développement Web](/labs/lab01).