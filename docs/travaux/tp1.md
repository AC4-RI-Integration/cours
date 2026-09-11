---
outline: deep
---

# ES1 : Explorer les outils d'édition Web

## Informations

| | |
|---|---|
| **Type** | Évaluation sommative |
| **Pondération** | 10 % |
| **Remise** | Cours 3, sur Léa |
| **Objectif d'apprentissage** | OA-1 - Choisir et utiliser un outil d'édition Web |
| **Élément de compétence** | HK31P - Élément 1 : Choisir un outil d'édition Web |

## Mandat du client

Vous travaillez comme intégratrice ou intégrateur Web pour le **Café des voisins**, un petit café de quartier. Le client souhaite une première page d'accueil pour présenter son commerce avant le lancement de son futur site Web.

Le client vous fournit le contenu suivant :

- Nom : Café des voisins
- Titre principal : Du bon café, tout près de chez vous
- Texte : Découvrez nos cafés, nos pâtisseries maison et notre ambiance de quartier.
- Lien : Voir notre menu
- Image : choisissez une image libre de droits qui évoque un café ou utilisez une image de remplacement.

Votre rôle est de produire une proposition fonctionnelle. Le client veut pouvoir l'ouvrir dans un navigateur et comprendre immédiatement son offre.

## Livrables attendus

Remettez sur Léa un fichier `.zip` nommé `tp1-nom-prenom.zip` contenant la structure suivante :

```text
tp1-nom-prenom/
	index.html
	style.css
	img/
	captures/
```

Votre page doit contenir :

1. Un squelette HTML valide, dont `<!DOCTYPE html>`, l'attribut `lang="fr"`, les balises `<head>` et `<body>`, ainsi qu'un titre d'onglet approprié.
2. Le nom du café dans un titre `<h1>` et le slogan dans un paragraphe.
3. Une image avec un attribut `alt` descriptif.
4. Un lien dont le texte est `Voir notre menu`.
5. Une feuille de styles externe liée à la page.
6. Une présentation CSS comprenant au minimum une couleur de fond, une couleur de texte, une police de caractères, une taille de texte et un espacement.

Choisissez les propriétés CSS parmi la liste fournie par l'enseignant. Pour chaque propriété ajoutée, citez en commentaire dans `style.css` une source fiable et pertinente, par exemple MDN ou W3C. La citation doit permettre de retrouver la documentation consultée.

```css
/* Source : MDN, propriété color - https://developer.mozilla.org/fr/docs/Web/CSS/color */
body {
	color: #222222;
}
```

Utilisez des noms de fichiers en minuscules, sans espaces ni accents. Indentez votre code de façon uniforme.

### Captures de l'environnement

Placez les trois captures d'écran suivantes dans le dossier `captures/` :

1. VS Code ouvert avec l'arborescence de votre projet visible.
2. Le panneau **Extensions** de VS Code montrant les extensions installées.
3. Votre navigateur montrant les sources fiables ajoutées aux favoris, dont MDN et W3C.

## Démarche proposée

1. Créez le dossier du projet et ouvrez-le dans VS Code.
2. Écrivez la structure et le contenu de `index.html`.
3. Ajoutez l'image dans le dossier `img/` et reliez-la correctement à la page.
4. Créez `style.css`, liez-le dans le `<head>` et appliquez la présentation demandée.
5. Prévisualisez la page dans un navigateur avec Live Server, Live Preview ou en ouvrant le fichier HTML.
6. Corrigez les liens, les chemins d'image et les erreurs de rendu observées.

## Validation avant la remise

Vérifiez que :

- la page s'affiche sans erreur dans le navigateur;
- la feuille `style.css` est appliquée;
- l'image est visible et son texte alternatif décrit son contenu;
- le code HTML est lisible et correctement indenté;
- le lien et le titre de la page correspondent à la demande du client;
- les trois captures demandées sont incluses dans le dossier `captures/`.

Vérifiez aussi la structure HTML avec le [validateur HTML W3C](https://validator.w3.org/) ou directement avec l'extension de VS Code et corrigez les erreurs signalées.

## Objectifs et grilles évalués

| Objectif | Grille | Poids dans ce travail |
|---|---|---:|
| OA-1 - Choisir et utiliser un outil d'édition Web | [Grille OA-1](/grilles/grille-oa-1) | 100 % |
| **Total** |  | **100 %** |

## Utilisation de l'IAg

L'IAg peut être utilisée pour vous aider à rechercher de l'information, par exemple pour repérer une page de documentation pertinente. Cette utilisation n'a pas à être déclarée.

L'IAg ne peut pas être utilisée pour écrire ou générer du code dans le cadre de cette évaluation.

En cas de doute qu'une partie du code aurait été générée par l'IAg, par exemple en présence de techniques avancées ou de structures surcompliquées, l'enseignant peut vous convoquer à une courte rencontre sur Teams. Cette rencontre sert à valider l'objectif réellement évalué, notamment en vous demandant de reproduire certaines tâches réalisées dans le travail. La note attribuée tient compte de cette rencontre.

## Politique de remise

Une pénalité de 10 % par jour de retard s'applique. Après 7 jours de retard, la note est de 0. Une deuxième remise est possible dans la semaine suivant la rétroaction sur Léa; la deuxième note remplace toujours la première, même si elle est inférieure.
