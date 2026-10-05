# Coup de Main Provence

Site vitrine et parcours de réservation d'une aide à domicile (ménage, repassage, courses, cuisine) à Cabannes et 20 km autour. Site statique sans build, déployé sur Vercel (équipe stayfluence) depuis la branche `main`.

## Fichiers

* `index.html` : page d'accueil. Barre d'adresse avec autocomplétion et contrôle de zone, étapes, prestations, grille tarifaire, carte SVG de la zone, engagements, FAQ.
* `devis.html` : parcours de réservation en 8 étapes (adresse, prestations, fréquence, durée, options et animaux, jour, heures d'arrivée, coordonnées) puis estimation crédit d'impôt déduit. Envoi par Web3Forms. Le bouton retour du navigateur revient à l'étape précédente et la saisie est conservée en sessionStorage.
* `img/` : photos en WebP, `og.jpg` pour les aperçus de partage. `favicon.svg` et `apple-touch-icon.png` reprennent le rameau d'olivier du logo.

## Tarifs

Dans `devis.html` (fonctions `baseRate`, `optionsAdd`, `majoration`) : 30 €/h en régulier, 35 €/h en ponctuel, repassage +1 €/h, produits fournis +3 €/h, +5 €/h le dimanche et les jours fériés (calculés, Pâques comprise), +5 €/h si toutes les heures d'arrivée choisies sont à 7h, 7h30 ou après 20h. Minimum 2 h. La grille affichée dans `index.html` doit rester alignée.

## Mesure

Pixel Meta 945702371856818 : `PageView`, `Contact` (clic sur le téléphone), `EtapeDevis` (événement personnalisé à chaque étape, pour mesurer les abandons), `Lead` (avec la valeur nette par passage). Les paramètres UTM et le fbclid sont conservés et recopiés dans l'email de chaque demande, ligne « Provenance ». Paramètres d'URL conseillés dans Meta : `utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`.

## Adresse

Autocomplétion par la Géoplateforme IGN (`data.geopf.fr/geocodage`), repli sur `api-adresse.data.gouv.fr`. Les suggestions à moins de 30 km de Cabannes passent en tête. La distance au centre de Cabannes figure dans chaque demande.
