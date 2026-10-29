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

Dans `devis.html` (`RATES`, `rate`, `monthlyNet`) : aide régulière 30 €/h, une seule fois 35 €/h, quel que soit le service (ménage, repas, courses), le jour ou l'heure. 2 h minimum, sans option ni majoration. Les courses seules sont refusées (il faut ménage ou repas pour le crédit d'impôt). La grille de `index.html` doit rester alignée.

Heures d'arrivée : `state.heures` les range par jour de la semaine. Deux passages par semaine donnent deux écrans d'horaires (`horaires`, puis `horaires2`), un par jour, avec un bouton pour recopier les heures du premier jour.

## Mesure

Le pixel Meta 945702371856818 ne se charge qu'après « Accepter » dans le bandeau cookies (choix gardé six mois en localStorage, clé `cdm_consent`). Événements : `PageView`, `Contact` (clic sur le téléphone), `EtapeDevis` (événement personnalisé à chaque étape, sans la formule), `Lead` (avec la valeur nette, sauf pour le retour à la maison). Aucune adresse ni information de santé n'est envoyée à Meta : l'adresse passe de l'accueil au devis par sessionStorage (`cdm_prefill`). Les paramètres UTM sont recopiés dans le mail de chaque demande, ligne « Provenance ». Paramètres d'URL conseillés dans Meta : `utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`.

## Adresse

Autocomplétion par la Géoplateforme IGN (`data.geopf.fr/geocodage`), repli sur `api-adresse.data.gouv.fr`. Les suggestions à moins de 25 km d'Aix ou de Marseille passent en tête. Zone : liste `SERVED` dans les deux pages, sinon « en limite » jusqu'à 16 km du centre d'Aix ou de Marseille.
