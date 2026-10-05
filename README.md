# Coup de Main Provence

Site vitrine et parcours de réservation d'une aide à domicile (ménage, repas de la semaine, papiers, formules pour les parents) à Aix-en-Provence, Marseille et dans les communes voisines. Site statique sans build, déployé sur Vercel (équipe stayfluence) depuis la branche `main`.

L'organisme est simplement déclaré : le site ne propose ni compagnie, ni aide à la toilette ou au lever, ni sorties accompagnées, ni heures financées par l'APA ou la PCH. Étude de référence : `../services-seniors-aix-marseille-2026-10-05.md`.

## Fichiers

* `index.html` : accueil. Barre d'adresse avec autocomplétion et contrôle de zone, prestations régulières et ponctuelles, section « Pour vos parents » (formule Sérénité, Retour à la maison), grille tarifaire, carte de la zone, engagements, FAQ.
* `devis.html` : parcours de réservation à quatre formules (`reguliere`, `serenite`, `ponctuel`, `retour`, cette dernière appelée `t=maison` dans les liens). Les étapes changent selon la formule. Estimation crédit d'impôt déduit, envoi par Web3Forms, consentement au rappel obligatoire. Le bouton retour du navigateur revient à l'étape précédente et la saisie est conservée en sessionStorage.
* `confidentialite.html` : confidentialité et cookies.
* `img/carte-zone.svg` : contours IGN (ADMIN EXPRESS, Géoplateforme) simplifiés des communes autour d'Aix et de Marseille, communes desservies en vert. Les libellés et les repères sont dans `index.html`.
* `img/og.jpg` : image de partage. `favicon.svg` et `apple-touch-icon.png` reprennent le rameau d'olivier du logo.

## Tarifs

Dans `devis.html` (`TASKS`, `regRate`, `taskRate`, `parts`, `monthlyNet`) : aide régulière 30 €/h, Sérénité 32 €/h (une heure de papiers par mois comprise), ménage ponctuel et vitres 35 €/h, grand ménage 36 €/h, papiers en ordre 38 €/h, retour à la maison environ 12 h à 32 €/h. Repassage +1 €/h. Produits fournis +3 €/h, hors crédit d'impôt. Majoration de 5 €/h pour les passages du dimanche (et les jours fériés en ponctuel) et si toutes les heures d'arrivée sont à 7h, 7h30 ou après 20h. La grille de `index.html` doit rester alignée.

## Mesure

Le pixel Meta 945702371856818 ne se charge qu'après « Accepter » dans le bandeau cookies (choix gardé six mois en localStorage, clé `cdm_consent`). Événements : `PageView`, `Contact` (clic sur le téléphone), `EtapeDevis` (événement personnalisé à chaque étape, sans la formule), `Lead` (avec la valeur nette, sauf pour le retour à la maison). Aucune adresse ni information de santé n'est envoyée à Meta : l'adresse passe de l'accueil au devis par sessionStorage (`cdm_prefill`). Les paramètres UTM sont recopiés dans le mail de chaque demande, ligne « Provenance ». Paramètres d'URL conseillés dans Meta : `utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`.

## Adresse

Autocomplétion par la Géoplateforme IGN (`data.geopf.fr/geocodage`), repli sur `api-adresse.data.gouv.fr`. Les suggestions à moins de 25 km d'Aix ou de Marseille passent en tête. Zone : liste `SERVED` dans les deux pages, sinon « en limite » jusqu'à 16 km du centre d'Aix ou de Marseille.
