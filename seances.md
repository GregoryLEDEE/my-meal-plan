# Catalogue de séances

<!--
==================================================================
  MODE D'EMPLOI — source des séances d'entraînement.
  Éditable dans n'importe quel éditeur, rechargeable dans l'onglet
  "Catalogue" de l'application.

  UNE SÉANCE = un bloc commençant par "## Nom de la séance"

  Champs :
    type      muscu | nage | marche | repos
    jour      jour de semaine conseillé (1 = lundi … 7 = dimanche)
    duree     en minutes
    depense   dépense estimée en kcal — indicative, à ±25 %
    note      une ligne libre

  EXERCICES (type muscu) — un par ligne, quatre champs :
        - nom | séries | répétitions | consigne

    Les séries et répétitions sont indicatives : c'est le journal
    qui enregistre ce que tu as réellement fait.

  BLOC (type nage) — texte libre, une ligne par élément :
    bloc:
    400 m échauffement
    8 × 50 m rapide, 30 s de repos

  Le nom sert d'identifiant : il doit être unique.
==================================================================
-->

## A1 — Bas du corps
type: muscu
jour: 1
duree: 70
depense: 420
note: Dominante hanche. Amplitude plafonnée à 90° sur tout ce qui plie le genou.
exercices:
- Presse à cuisses, pieds hauts et larges | 4 | 8-10 | Arrêt net à 90°. Pieds hauts sur la plateforme : le travail part vers fessiers et ischios, l'angle du genou s'ouvre.
- Romanian deadlift | 3 | 8 | Genoux quasi tendus, barre qui longe les cuisses. L'exercice roi dans ton cas.
- Hip thrust / Glute Drive | 3 | 12 | Si le club a la machine ; sinon barre sur banc avec un coussin.
- Leg curl assis | 3 | 12 | Tempo contrôlé, pas d'à-coups.
- Extension lombaire (banc 45°) | 3 | 12 | Ajoute un disque contre la poitrine dès que ça devient facile.
- Mollets à la presse | 4 | 15 | Amplitude complète, pause en bas.
- Wall sit (isométrie, 60° max) | 3 | 45 s | Effet antalgique documenté sur le genou. C'est l'exercice qu'on saute et qu'il ne faut pas sauter.

## A2 — Haut du corps, poussée
type: muscu
jour: 2
duree: 60
depense: 340
note: RPE 7-8 sur les mouvements principaux, 8-9 sur les accessoires.
exercices:
- Développé couché | 4 | 6 | Ne force pas la barre jusqu'à la poitrine si l'épaule tire : tes bras sont longs, l'amplitude complète coûte cher.
- Développé militaire assis | 3 | 8-10 | Passe au Smith si les haltères plafonnent trop bas.
- Tirage vertical prise large | 3 | 10 | Poitrine haute, on tire avec les coudes.
- Rowing haltère unilatéral | 3 | 10 | Dos à plat, pas de rotation du buste.
- Élévations latérales à la poulie | 3 | 15 | Charge légère, aucun élan.
- Extensions triceps à la corde | 3 | 12-15 | Coudes fixes le long du corps.

## B1 — Bas du corps, chaîne postérieure
type: muscu
jour: 4
duree: 70
depense: 430
note: Séance de force. Repos 3 min sur le rack pull.
exercices:
- Rack pull (barre à hauteur sous-genou) | 4 | 5 | Le remplaçant du trap bar. Amplitude réduite : dos protégé, genoux quasi épargnés. À 2m03, supérieur au soulevé au sol.
- Presse à cuisses unilatérale | 3 | 10 par jambe | Même plafond : 90°, jamais plus.
- Leg curl allongé | 3 | 12 | Bassin plaqué, pas de cambrure.
- Abducteurs machine | 3 | 15 | Le fessier moyen stabilise le genou. Sous-estimé, très utile ici.
- Leg extension, amplitude haute uniquement | 3 | 15 | Départ à 45° de flexion, jusqu'à l'extension. Charge modérée.
- Mollets assis | 4 | 15 | Cible le soléaire, complémentaire des mollets debout.
- Relevés de jambes suspendu | 3 | 12 | Sans balancier.

## B2 — Haut du corps, tirage
type: muscu
jour: 5
duree: 60
depense: 340
note: Volume sur le dos et les épaules postérieures.
exercices:
- Tractions assistées ou tirage prise neutre | 4 | 8 | Descente contrôlée sur 3 secondes.
- Développé incliné haltères | 3 | 10 | Banc à 30°, pas plus : au-delà l'épaule travaille seule.
- Rowing assis à la poulie | 3 | 10 | Omoplates serrées en fin de course.
- Développé épaules machine | 3 | 12 | Après le tirage, la fatigue est normale.
- Curl biceps incliné | 3 | 12 | Bras en arrière du buste, étirement complet.
- Face pull | 3 | 15 | Le meilleur exercice de santé d'épaule qui existe.

## Nage 1 — Aérobie continue
type: nage
jour: 3
duree: 45
depense: 700
note: Test simple — tu dois tenir la même vitesse au 1 800ᵉ mètre qu'au 100ᵉ.
bloc:
400 m échauffement, crawl souple
1 800 m crawl continu, allure régulière tenable
200 m dos crawlé, retour au calme

## Nage 2 — Intervalles
type: nage
jour: 5
duree: 45
depense: 750
note: Brasse à éviter — le ciseau agresse le genou.
bloc:
400 m échauffement
6 × 100 m crawl, départ toutes les 2'00 (25-30 s de repos)
100 m souple
6 × 50 m crawl rapide, 30 s de repos
200 m dos crawlé, retour au calme

## Nage 3 — Volume mixte
type: nage
jour: 6
duree: 40
depense: 600
note: La séance la plus facile des trois. Progression : +100 à 200 m par semaine.
bloc:
400 m échauffement
5 × 200 m alternance crawl / dos crawlé, 30 s de repos
300 m pull buoy (jambes au repos total)
200 m retour au calme

## Zone 2 — Vélo ou elliptique
type: marche
jour: 6
duree: 40
depense: 350
note: Selle réglée haute sur le vélo : ça réduit l'angle de flexion du genou. Zone 2 = 110-128 bpm.
bloc:
5 min d'échauffement progressif
30 min en allure conversationnelle
5 min de retour au calme

## Marche longue
type: marche
jour: 7
duree: 60
depense: 330
note: Allure libre. Bonnes chaussures : à 160 kg l'amorti change la fatigue de fin de journée.
bloc:
60 min de marche continue, terrain plat

## Repos
type: repos
jour: 7
duree: 0
depense: 0
note: Repos complet. C'est pendant les jours de repos que le muscle se construit, pas à la salle.
