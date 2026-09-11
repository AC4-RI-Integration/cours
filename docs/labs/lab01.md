---
outline: deep
---

# Lab 1 - Configurer son environnement de développement Web

## Informations

| | |
|---|---|
| **Module** | [Module 1 - Premiers pas en intégration Web](/modules/01/00-presentation) |
| **Objectif d'apprentissage** | OA-1 - Choisir et utiliser un outil d'édition Web |
| **Éléments de compétence** | Élément 1 - Choisir un outil d'édition Web |
| **Remise** | Formatif - aucune remise |

## Contexte

Le but de ce laboratoire est de mettre en place votre environnement de développement qui sera utilisé pour toute la durée de la session.

---

## Étapes

### Étape 1 - Effectuer les installations requises

- Navigateur [Chrome](https://www.google.com/intl/fr_ca/chrome/) ou [FireFox](https://www.firefox.com/fr/)
- [Visual Studio Code](https://code.visualstudio.com/) installé
- [Git](https://git-scm.com/) installé
- Un compte [GitHub](https://github.com/) créé

---

### Étape 2 - Afficher les extensions de fichiers

Activez l'affichage des extensions de fichiers dans l'explorateur de fichiers. Cette option permet notamment de vérifier qu'un fichier HTML se nomme bien `index.html` et non `index.html.txt`.

:::tabs

== Windows

Dans l'explorateur de fichiers, ouvrez le menu **Affichage** → **Afficher**, puis cochez **Extensions de noms de fichiers**.

![Activer l'affichage des extensions de fichiers dans Windows](/modules/01/img/extensions-windows.png)

== macOS

Dans le Finder, ouvrez **Finder** → **Réglages** → **Avancé**, puis cochez **Afficher toutes les extensions de fichiers**.

![Activer l'affichage des extensions de fichiers dans macOS](/modules/01/img/extensions-mac.webp)

:::

---

### Étape 3 - Configurer VS Code

Installer les extensions suivantes via `Ctrl+Shift+X` :

| Extension | Utilité |
|---|---|
| **French Language Pack for Visual Studio Code** | Pack de langue française pour VS Code |
| **Prettier - Code formatter** | Formatage automatique du code |
| **W3C Web Validator** | Outil de validation de code |
| **Git Graph** | Outil permettant de suivre l'évolution d'un projet |
| **Live Server** | Aperçu du rendu HTML directement dans VS Code |
| **Live Preview** | Aperçu du rendu HTML directement dans VS Code |
| **CSS Peek** | Aide à voir le code CSS appliqué à une balise HTML |

Pour installer une extension : recherchez son nom, puis cliquez sur **Installer**.

Activez ensuite la sauvegarde automatique : dans le menu **Fichier**, sélectionnez **Enregistrement automatique**. Vos modifications seront ainsi enregistrées sans utiliser `Ctrl+S`.

>N'hésitez pas à me partager des nouvelles extensions utiles en cours de route.

---

### Étape 3 - Créer un dossier de projet

1. Créez un dossier nommé `lab01`
2. Dans VS Code : **Fichier → Ouvrir le dossier…** et sélectionnez ce dossier
3. Créez un nouveau fichier `index.html`

>.html représente l'extension du fichier. L'extension est essentielle afin que le fichier soit lu par un navigateur.
---

### Étape 4 - Écrire le squelette HTML

Dans `index.html`, écrivez le squelette suivant :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ma première page</title>
  </head>
  <body>
    <h1>Bonjour, monde !</h1>
    <p>Ceci est ma première page Web.</p>
  </body>
</html>
```
>Essayez d'écrire le code à la main afin de repérer les différents caractères spéciaux sur votre clavier.

::: tip Conseil
Chaque ligne a un rôle précis. Consultez [MDN - Anatomie d'un document HTML](https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/Getting_started#anatomie_dun_document_html) pour comprendre chaque élément.
:::

---

### Étape 5 - Prévisualiser dans le navigateur

Utilisez l'une des méthodes suivantes pour afficher votre page HTML.

:::tabs

== Ouvrir la page HTML

Dans l'explorateur de fichiers, double-cliquez sur `index.html`. La page s'ouvre dans votre navigateur par défaut.

![Ouvrir index.html dans un navigateur](/modules/01/img/indexhtml.png)

**Pourquoi l'utiliser ?** Cette méthode est la plus simple et ne demande aucune extension. Elle convient pour vérifier rapidement une page HTML statique.

Après une modification du fichier, enregistrez-le puis actualisez la page dans le navigateur.

== Live Server

Dans VS Code, faites un clic droit sur `index.html` dans l'explorateur, puis sélectionnez **Open with Live Server**. La page s'ouvre dans votre navigateur.

![Ouvrir index.html avec Live Server](/modules/01/img/liveserver.png)

**Pourquoi l'utiliser ?** Live Server actualise la page automatiquement après chaque enregistrement. C'est pratique lorsque vous modifiez souvent le code et nécessaire pour certaines fonctionnalités qui requièrent un serveur local.

Après l'enregistrement d'une modification, Live Server actualise normalement la page automatiquement.

== Live Preview

Dans VS Code, faites un clic droit sur `index.html` dans l'explorateur, puis sélectionnez **Show Preview**. La page s'affiche dans un panneau de prévisualisation intégré.

![Prévisualiser index.html avec Live Preview](/modules/01/img/apercu.png)

**Pourquoi l'utiliser ?** Live Preview permet de consulter le résultat sans quitter VS Code. C'est utile pour comparer rapidement le code et son rendu dans la même fenêtre.

:::

---

### Étape 6 - Ajouter des ressources aux favoris

Ajoutez les sites suivants aux favoris de votre navigateur. Ils serviront à chercher de l'information fiable et à vérifier votre code pendant la session.

| Site | Utilité |
|---|---|
| [MDN Web Docs](https://developer.mozilla.org/fr/) | Documentation de référence pour le HTML, le CSS et le Web. |
| [W3C](https://www.w3.org/) | Organisme qui élabore les normes du Web. |
| [Validateur HTML W3C](https://validator.w3.org/) | Vérification de la structure HTML. |
| [Validateur CSS](https://www.cssportal.com/css-validator/) | Vérification des règles CSS. |
| [W3Schools - HTML](https://www.w3schools.com/html/) | Tutoriels et référence pratique pour le HTML. |
| [W3Schools - CSS](https://www.w3schools.com/css/) | Tutoriels et référence pratique pour le CSS. |

Utilisez le raccourci `Ctrl+D` pour ajouter la page ouverte aux favoris. Placez-les dans un dossier nommé `Développement Web` pour les retrouver rapidement.

---

### Étape 7 - Explorer la documentation

En utilisant [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements), répondez aux questions suivantes dans un fichier `notes.txt` dans le dossier `lab01` :

1. Quel est le rôle de l'élément `<head>` dans une page HTML ?
2. À quoi sert l'attribut `lang="fr"` sur la balise `<html>` ?
3. Quelle balise HTML (`<...>`) utilise-t-on pour afficher une image ?
4. Décrivez à quoi servent les balises suivantes : `<ul>` et `<li>`.

---

## Critères de réussite

<ul class="checklist">
  <li><label><input type="checkbox" /> <span class="check-text">VS Code est configuré avec les extensions requises</span></label></li>
  <li><label><input type="checkbox" /> <span class="check-text">Le fichier <code>index.html</code> contient un squelette HTML valide</span></label></li>
  <li><label><input type="checkbox" /> <span class="check-text">La page s'affiche correctement dans Live Preview</span></label></li>
  <li><label><input type="checkbox" /> <span class="check-text">Les ressources pratiques sont ajoutées aux favoris du navigateur</span></label></li>
  <li><label><input type="checkbox" /> <span class="check-text">Le fichier <code>notes.txt</code> contient des réponses aux 4 questions</span></label></li>
</ul>
