# Projet : Laris Web — Site vitrine

## Contexte
Site vitrine pour agence de création de sites internet sur mesure, cible : artisans, commerçants et indépendants. Livrable : site statique
HTML/CSS/JS pur, sans framework, hébergé sur O2Switch.

## Stack et contraintes techniques (NON NÉGOCIABLE)
- HTML5 sémantique (nav, main, section, article, footer)
- CSS moderne : variables CSS dans :root, Grid + Flexbox, clamp() pour la typo fluide
- JS vanilla uniquement, minimal (menu mobile, animations au scroll via IntersectionObserver)
- AUCUN framework (pas de React, pas de Bootstrap, pas de Tailwind)
- Mobile-first : coder d'abord pour 375px, puis media queries vers le haut
- Images : format .webp, attributs width/height, loading="lazy" sauf hero
- Un seul fichier CSS (css/style.css), un seul fichier JS (js/main.js)

## Direction artistique
→ Voir le fichier brief-creatif.md à la racine. La respecter STRICTEMENT.
→ La maquette de référence est dans /design-reference/. Le rendu final doit
  lui être fidèle au pixel près sur desktop ET adapter intelligemment en mobile.

## Interdits esthétiques (anti-générique)
- Jamais : Inter, Roboto, Open Sans, Lato, Arial, polices système, Space Grotesk
- Jamais : dégradé violet/bleu sur fond blanc
- Jamais : grille de 3 cartes identiques avec icône + titre + paragraphe
- Jamais : emoji en guise d'icônes
- Toujours : les polices définies dans le brief créatif, chargées via Google Fonts

## Qualité (à vérifier avant de dire "terminé")
- Score Lighthouse ≥ 90 en Performance, Accessibilité, SEO
- Contraste texte WCAG AA (4.5:1 minimum)
- Toutes les images ont un alt descriptif
- Balises title + meta description uniques par page
- Testé visuellement à 375px, 768px, 1440px

## Workflow
- Toujours passer par le plan mode avant toute modification structurelle
- Après chaque feature : me montrer le résultat et attendre ma validation
- Commits Git fréquents avec messages descriptifs en français