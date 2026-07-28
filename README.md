# Feuille de route — planificateur de repas

Application d'une seule page, sans build ni dépendance. Six onglets :

- **Planning** — calendrier réel : une séance et quatre repas par jour, macros par jour et récapitulatif par semaine
- **Courses** — liste quantifiée par rayon, filtrable par semaine, avec indicateurs d'optimisation
- **Entraînement** — journal des charges, avec rappel de la séance précédente pour chaque exercice
- **Suivi** — poids, tour de taille, genoux, pas ; courbe avec moyenne mobile sur 7 jours
- **Programme** — repères, règles et ajustements
- **Catalogue** — les deux fichiers source, éditables directement

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | L'application entière. Contient aussi une copie de secours du catalogue. |
| `catalogue.md` | **La source des recettes.** |
| `seances.md` | **La source des séances d'entraînement.** |
| `manifest.webmanifest` | Installation sur l'écran d'accueil. |
| `sw.js` | Fonctionnement hors ligne (réseau d'abord, cache en secours). |
| `icon-*.png` | Icônes. |

## Déployer sur GitHub Pages

1. Créer un dépôt et y pousser ces fichiers à la racine.
2. `Settings` → `Pages` → *Source* : `Deploy from a branch` → branche `main`, dossier `/ (root)`.
3. En ligne une minute plus tard sur `https://<pseudo>.github.io/<depot>/`.

GitHub Pages gratuit impose un dépôt **public**. Pour un dépôt privé, Vercel
héberge gratuitement : importer le dépôt, aucun réglage à changer, c'est déployé.

## Déployer sur Vercel

1. `vercel.com` → *Add New* → *Project* → importer le dépôt.
2. Framework preset : **Other**. Aucune commande de build, aucun dossier de sortie.
3. *Deploy*.

## Installer sur téléphone

- **Android / Chrome** : menu `⋮` → *Ajouter à l'écran d'accueil*.
- **iOS / Safari** : bouton Partager → *Sur l'écran d'accueil*.

L'application s'ouvre alors en plein écran, sans barre d'adresse, et fonctionne
hors ligne — utile en magasin quand le réseau est mauvais.

## Ajouter une séance

Éditer `seances.md`. Un bloc par séance :

```
## A1 — Bas du corps
type: muscu          # muscu | nage | marche | repos
jour: 1              # 1 = lundi … 7 = dimanche
duree: 70
note: Amplitude plafonnée à 90°.
exercices:
- Presse à cuisses | 4 | 8-10 | Arrêt net à 90°.
- Romanian deadlift | 3 | 8 | Genoux quasi tendus.
```

Pour la natation et le cardio, remplacer `exercices:` par `bloc:` suivi d'une
ligne de texte libre par élément de la séance.

## Ajouter une recette

Éditer `catalogue.md` (directement sur github.com depuis un téléphone, si besoin),
puis recharger la page. Un bloc par recette :

```
## Poulet citron-thym
type: dejeuner
source: volaille
temps: 25
niveau: 1
macros: 940 | 62 | 28 | 105
astuce: Mariné 20 min, four 200° 18 min.
ingredients:
- 180 | g | blanc de poulet | viande
- 100 | g | riz basmati cru | epicerie
- 1 |  | pomme | fruits
-  |  | thym, ail, poivre | legumes
```

- `type` : `dejeuner` · `diner` · `plat` (les deux) · `shaker` · `collation` · `prepa`
- `source` : `volaille` `boeuf` `porc` `blanc` `gras` `mer` `oeufs` `vegetal` `box`
- `macros` : `kcal | protéines | lipides | glucides`
- ingrédients : `quantité | unité | nom | rayon` — quantité vide pour les
  assaisonnements, unité vide pour les articles à la pièce
- rayons : `viande` `poisson` `maree` `cremerie` `legumes` `fruits` `boulangerie` `epicerie`

Le nom sert d'identifiant : il doit être unique.

## Bon à savoir

- **Le cumul des courses est littéral.** Deux ingrédients ne s'additionnent que si
  leur nom *et* leur unité sont identiques. « riz cru » et « riz basmati cru »
  feront deux lignes — harmoniser les noms dans le catalogue est le meilleur
  levier pour resserrer les courses.
- **Poids cuit pour les protéines**, poids cru pour les féculents. À l'achat,
  compter environ **+30 %** sur les viandes et poissons.
- **Sauvegarde automatique** dans le navigateur : planning mois par mois, journal
  des charges et mesures. Les exports `.json` et `.csv` servent d'archive et
  permettent de passer d'un appareil à l'autre — le stockage local ne se
  synchronise pas entre navigateurs.
- **Le journal des charges garde la trace de la séance précédente** pour chaque
  exercice. C'est l'indicateur central du programme : si le poids baisse et que
  les charges tiennent, la perte est bien de la masse grasse.
- Le catalogue modifié depuis l'application est stocké localement et prend le pas
  sur `catalogue.md`. Le bouton « Catalogue d'origine » efface cette version locale.
- Aucune donnée ne quitte l'appareil : tout est calculé dans la page.
