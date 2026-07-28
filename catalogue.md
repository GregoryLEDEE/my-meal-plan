# Catalogue de recettes

<!--
==================================================================
  MODE D'EMPLOI — ce fichier est la source du planificateur.
  Tu peux l'éditer librement dans n'importe quel éditeur de texte,
  puis le recharger dans l'onglet "Catalogue" du planificateur.

  UNE RECETTE = un bloc qui commence par "## Nom de la recette"

  Champs (tous facultatifs sauf macros) :
    type        dejeuner | diner | plat | shaker | collation | prepa
                  - "plat" = utilisable en déjeuner ET en dîner
                  - "prepa" = barres, gâteaux, overnight oats, chia
    source      volaille | boeuf | porc | blanc | gras | mer | oeufs
                | vegetal | box   (sert juste au classement)
    temps       en minutes
    niveau      1 (facile) | 2 (intermédiaire) | 3 (technique)
    macros      kcal | protéines | lipides | glucides      <- en grammes
    astuce      une ligne libre

  INGRÉDIENTS : une ligne par ingrédient, quatre champs séparés par |
        - quantité | unité | nom | rayon

    * quantité vide  -> l'ingrédient apparaîtra dans la liste de courses
                        sans quantité (herbes, épices, assaisonnements)
    * unité vide     -> pièce (ex : "1 |  | pomme | fruits")
    * unités connues : g, kg, ml, cl, l, boîte, tranche, sachet, pincée
    * rayons connus  : viande, poisson, maree, cremerie, legumes,
                       fruits, boulangerie, epicerie

  POUR AJOUTER UNE RECETTE : copie n'importe quel bloc, change les
  valeurs. Le nom doit être unique — c'est lui qui sert d'identifiant.

  ATTENTION : viandes et poissons en POIDS CUIT, féculents en POIDS CRU.
  Deux ingrédients ne se cumulent dans la liste de courses que si leur
  nom ET leur unité sont identiques — garde des noms cohérents.
==================================================================
-->




<!-- ================= DÉJEUNERS DU PROGRAMME ================= -->


## Bibimbap au bœuf
type: dejeuner
macros: 950 | 60 | 30 | 106
astuce: Chaque légume assaisonné séparément : c'est ce qui distingue un bibimbap d'un riz sauté.
ingredients:
- 180 | g | bœuf émincé | viande
- 110 | g | riz cru | epicerie
-  |  | Carotte, épinards, pousses de soja | epicerie
- 1 |  | œuf | cremerie
-  |  | gochujang | epicerie
- 10 | g | sésame | epicerie

## Bolognaise de bœuf 5 %
type: dejeuner
macros: 930 | 61 | 26 | 102
astuce: Une grande casserole de sauce le dimanche : cinq jours au frigo, trois mois au congélateur.
ingredients:
- 200 | g | haché 5 % cuit | viande
- 100 | g | pâtes complètes crues | epicerie
- 200 | g | sauce tomate | epicerie
- 10 | g | huile | epicerie
- 20 | g | parmesan | cremerie

## Bowl grec au poulet
type: dejeuner
macros: 950 | 60 | 34 | 92
astuce: La marinade au yaourt attendrit et donne une croûte dorée. Se mange froid le lendemain.
ingredients:
- 180 | g | poulet mariné yaourt-citron | viande
- 100 | g | boulgour cru | epicerie
-  |  | Concombre, tomate, oignon rouge | legumes
- 30 | g | feta | cremerie
- 10 |  | olives | epicerie
- 10 | g | huile | epicerie

## Burger maison
type: dejeuner
macros: 1070 | 60 | 34 | 116
astuce: Quartiers de pommes de terre, 210° 35 min, 10 g d'huile et du paprika. Aucune raison de s'en priver cette semaine.
ingredients:
- 200 | g | haché 5 % en steak | viande
-  |  | Pain burger complet | boulangerie
- 30 | g | cheddar | cremerie
-  |  | salade, tomate, oignon | legumes
- 400 | g | pommes de terre au four | legumes

## Bœuf sauté sauce soja
type: dejeuner
macros: 940 | 60 | 26 | 108
astuce: Wok très chaud : viande 90 secondes, on la sort, on fait les légumes, on remet à la fin.
ingredients:
- 200 | g | bavette émincée | viande
- 100 | g | nouilles de riz crues | epicerie
-  |  | Poivrons, chou, carotte, oignon | legumes
-  |  | Soja, gingembre | epicerie
- 10 | g | huile de sésame | epicerie

## Chili con carne
type: dejeuner
macros: 1060 | 65 | 32 | 118
astuce: Deux heures à feu doux si tu as le temps. Se congèle en portions sans rien perdre.
ingredients:
- 220 | g | haché 5 % | viande
- 250 | g | haricots rouges cuits | epicerie
- 100 | g | riz cru | epicerie
- 30 | g | cheddar | cremerie
-  |  | cumin, paprika fumé | epicerie

## Croque-monsieur protéinés
type: dejeuner
macros: 1050 | 60 | 36 | 112
astuce: Moins de 15 min. Le plat du samedi soir devant un match, sans culpabilité et sans sortir du cadre.
ingredients:
- 4 | tranche | pain complet | boulangerie
- 120 | g | jambon blanc | viande
- 50 | g | emmental | cremerie
-  |  | Béchamel légère | epicerie
-  |  | Soupe de légumes | legumes
- 150 | g | skyr | cremerie

## Curry de poulet léger
type: dejeuner
macros: 950 | 58 | 30 | 108
astuce: Lait de coco allégé : la version classique double les lipides sans rien changer au goût une fois épicé.
ingredients:
- 200 | g | poulet | viande
- 100 | g | riz basmati cru | epicerie
- 150 | ml | lait de coco allégé | epicerie
-  |  | Curry, tomate, épinards | epicerie

## Dahl corail & crevettes
type: dejeuner
macros: 940 | 58 | 24 | 116
astuce: Les lentilles corail cuisent en 12 min sans trempage. Le plat le moins cher de la semaine.
ingredients:
- 200 | g | crevettes | maree
- 200 | g | lentilles corail cuites | epicerie
- 70 | g | riz cru | epicerie
- 100 | ml | lait de coco allégé | epicerie
-  |  | curcuma | epicerie

## Dinde à la moutarde
type: dejeuner
macros: 950 | 68 | 30 | 96
astuce: Déglace la poêle au bouillon + moutarde à l'ancienne. Sauce sans crème, et personne ne le remarque.
ingredients:
- 180 | g | escalope de dinde | viande
- 100 | g | boulgour cru | epicerie
- 200 | g | champignons de Paris | legumes
- 15 | g | huile | epicerie
- 150 | g | skyr | cremerie

## Filet mignon & lentilles
type: dejeuner
macros: 940 | 62 | 28 | 100
astuce: Le filet mignon est la pièce de porc la plus maigre. Cuisson rosée, 15 min à la poêle couverte.
ingredients:
- 180 | g | filet mignon de porc | viande
- 250 | g | lentilles vertes cuites | epicerie
-  |  | Carottes, oignon, laurier | epicerie
- 10 | g | huile | epicerie
- 1 |  | fruit | fruits

## Hachis parmentier
type: dejeuner
macros: 1050 | 62 | 30 | 120
astuce: Muscade dans la purée, thym dans la viande. Gratiné 15 min à 210°.
ingredients:
- 230 | g | haché 5 % | viande
- 450 | g | purée au lait écrémé | cremerie
- 30 | g | emmental râpé | cremerie
-  |  | Grande salade verte | legumes

## Lasagnes allégées
type: dejeuner
macros: 1060 | 64 | 32 | 118
astuce: Béchamel à la maïzena et au lait écrémé : la texture est identique, les lipides divisés par trois.
ingredients:
- 230 | g | haché 5 % | viande
- 6 |  | plaques de lasagne | epicerie
-  |  | Béchamel au lait écrémé (sans beurre) | cremerie
- 40 | g | mozzarella | cremerie
-  |  | sauce tomate | epicerie

## Maquereau & taboulé de quinoa
type: dejeuner
macros: 960 | 58 | 40 | 84
astuce: Le maquereau frais grillé n'a rien à voir avec celui en boîte. Cinq minutes de chaque côté.
ingredients:
- 200 | g | filets de maquereau grillés | poisson
- 100 | g | quinoa cru | epicerie
-  |  | Menthe, persil, tomate, concombre | legumes
- 25 | g | feta | cremerie
-  |  | citron | fruits

## Omelette & patate douce
type: dejeuner
macros: 955 | 60 | 40 | 82
astuce: Moins de 15 min. Patate douce en cubes, four 200° 25 min pendant que tu fais l'omelette.
ingredients:
- 4 |  | œufs | cremerie
- 100 | g | jambon blanc | viande
- 350 | g | patate douce rôtie | legumes
- 20 | g | emmental | cremerie
-  |  | Salade | legumes
- 10 | g | huile | epicerie

## Poulet à la sicilienne
type: dejeuner
macros: 945 | 60 | 30 | 100
astuce: Les câpres et les olives salent le plat : goûte avant d'ajouter du sel.
ingredients:
- 190 | g | poulet | viande
- 100 | g | orzo (ou risoni) cru | epicerie
-  |  | Tomates, olives noires, câpres | epicerie
- 12 | g | huile | epicerie
-  |  | origan | legumes

## Poulet citron-thym
type: dejeuner
macros: 940 | 62 | 28 | 105
astuce: Mariné 20 min citron-thym-ail, four 200° 18 min. Se prépare pour trois jours d'un coup.
ingredients:
- 180 | g | blanc de poulet | viande
- 100 | g | riz basmati cru | epicerie
- 200 | g | haricots verts | legumes
- 15 | g | huile d'olive | epicerie
- 1 |  | pomme | fruits

## Poulet rôti & coleslaw
type: dejeuner
macros: 1070 | 66 | 30 | 122
astuce: Coleslaw au skyr + moutarde + vinaigre de cidre au lieu de la mayonnaise : 400 kcal en moins.
ingredients:
- 240 | g | poulet rôti | viande
- 450 | g | pommes de terre en frites de four | legumes
-  |  | chou, carotte, 100 g skyr | cremerie
- 10 | g | huile | epicerie

## Poulet tandoori & raita
type: dejeuner
macros: 955 | 68 | 26 | 106
astuce: Marinade au skyr + épices tandoori, minimum 2 h. Le raita compte dans tes protéines, pas seulement comme sauce.
ingredients:
- 190 | g | poulet mariné tandoori | viande
- 100 | g | riz basmati cru | epicerie
- 150 | g | skyr, concombre, menthe | cremerie
- 10 | g | huile | epicerie

## Salade niçoise renforcée
type: dejeuner
macros: 960 | 65 | 36 | 86
astuce: Sans cuisson si tu prépares œufs et pommes de terre la veille. Se transporte très bien.
ingredients:
- 2 |  | bo îtes de thon | poisson
- 3 |  | œufs durs | cremerie
- 350 | g | pommes de terre tièdes | legumes
-  |  | Haricots verts, tomates, olives | epicerie
- 15 | g | huile d'olive | epicerie

## Salade thaï de bœuf
type: dejeuner
macros: 945 | 62 | 28 | 104
astuce: Bœuf tranché finement contre le sens des fibres, sinon c'est immangeable.
ingredients:
- 200 | g | bavette grillée saignante | viande
- 110 | g | riz cru | epicerie
-  |  | Menthe, coriandre, échalote, concombre | legumes
-  |  | Citron vert, nuoc-mâm | epicerie
- 10 | g | huile | epicerie

## Sardines & lentilles
type: dejeuner
macros: 995 | 72 | 36 | 88
astuce: Meilleure source d'oméga-3 au kilo dépensé. Le calcium des arêtes est un vrai bonus.
ingredients:
- 2 |  | bo îtes de sardines égouttées | poisson
- 250 | g | lentilles cuites | epicerie
-  |  | Roquette, échalote, citron | legumes
- 150 | g | skyr en dessert | cremerie

## Saumon & pommes de terre
type: dejeuner
macros: 965 | 71 | 32 | 88
astuce: Four 190° 15 min sur lit de citron. Pas d'huile ajoutée : le saumon en apporte assez.
ingredients:
- 180 | g | pavé de saumon | poisson
- 400 | g | pommes de terre | legumes
- 200 | g | brocoli | legumes
- 150 | g | skyr en dessert | cremerie

## Steak & frites de four
type: dejeuner
macros: 960 | 63 | 30 | 104
astuce: Frites au four 210° 35 min, retournées à mi-cuisson. Dix grammes d'huile suffisent si tu mélanges bien.
ingredients:
- 200 | g | bavette ou rumsteck | viande
- 400 | g | pommes de terre en frites | legumes
- 200 | g | haricots beurre | cremerie
- 10 | g | huile | epicerie
- 150 | g | fromage blanc | cremerie

## Tartiflette dosée
type: dejeuner
macros: 1060 | 58 | 40 | 106
astuce: Le reblochon est ce qui fait exploser une tartiflette : 60 g pesés suffisent au goût, 200 g te coûteraient 500 kcal.
ingredients:
- 400 | g | pommes de terre | legumes
- 150 | g | lardons de dinde | viande
- 60 | g | reblochon (pesé, vraiment) | cremerie
-  |  | Oignons | legumes
- 150 | g | fromage blanc en dessert | cremerie

## Thon & pois chiches
type: dejeuner
macros: 940 | 62 | 30 | 98
astuce: Zéro cuisson, 5 minutes. Le plat de secours des jours où tu n'as le temps de rien.
ingredients:
- 2 |  | bo îtes de thon au naturel | poisson
- 250 | g | pois chiches cuits | epicerie
-  |  | Tomates cerises, persil, citron | legumes
- 15 | g | huile | epicerie
- 60 | g | pain complet | boulangerie

## Tofu-cacahuète & soba
type: dejeuner
macros: 930 | 52 | 34 | 104
astuce: Le seul déjeuner un peu court en protéines : prends un shaker à 50 g ce jour-là.
ingredients:
- 250 | g | tofu ferme doré | epicerie
- 100 | g | nouilles soba crues | epicerie
- 100 | g | edamame | legumes
- 20 | g | purée de cacahuète | epicerie
-  |  | citron vert | fruits

## Tortilla & serrano
type: dejeuner
macros: 950 | 58 | 40 | 82
astuce: Tortilla à peine prise au centre : c'est la texture qui fait la différence. Bonne froide le lendemain.
ingredients:
- 4 |  | œufs | cremerie
- 60 | g | jambon serrano | viande
- 300 | g | pommes de terre | legumes
- 150 | g | pois chiches | epicerie
-  |  | roquette | legumes
- 12 | g | huile d'olive | epicerie


<!-- ================= DÎNERS DU PROGRAMME ================= -->


## Bar au four à l'origan
type: diner
macros: 1080 | 60 | 34 | 118
astuce: Tout dans le même plat, 200° 30 min. Les pommes de terre cuisent dans le jus du poisson.
ingredients:
- 280 | g | bar ou dorade | poisson
- 400 | g | pommes de terre en rondelles | legumes
- 200 | g | haricots verts | legumes
- 15 | g | huile | epicerie
-  |  | origan, ail | legumes

## Bar vapeur gingembre-ciboule
type: diner
macros: 1090 | 63 | 28 | 130
astuce: Huile de sésame chauffée fumante versée sur le gingembre cru au moment de servir : ça réveille tout.
ingredients:
- 280 | g | bar entier ou filets | poisson
- 130 | g | riz cru | epicerie
-  |  | Pak choï sauté | legumes
-  |  | Gingembre, ciboule, soja | epicerie
- 12 | g | huile de sésame | epicerie

## Blanquette de dinde
type: diner
macros: 1100 | 65 | 28 | 130
astuce: La liaison au fromage blanc remplace la crème — hors du feu, sinon ça tranche.
ingredients:
- 250 | g | sauté de dinde | viande
- 130 | g | riz cru | epicerie
-  |  | Champignons, carottes, poireau | legumes
- 100 | g | fromage blanc + bouillon | epicerie

## Boulettes à la cannelle
type: diner
macros: 1100 | 64 | 32 | 126
astuce: Une pincée de cannelle dans la sauce tomate : c'est le détail qui fait tout le plat.
ingredients:
- 250 | g | boulettes de bœuf 5 % | viande
- 120 | g | semoule crue | epicerie
-  |  | Sauce tomate, cannelle, cumin | epicerie
- 12 | g | huile | epicerie
-  |  | menthe fraîche | epicerie

## Bœuf bourguignon
type: diner
macros: 1200 | 66 | 36 | 126
astuce: Trois heures à 150° au four, à couvert. Tu en fais le double, tu congèles la moitié.
ingredients:
- 260 | g | paleron | viande
- 130 | g | tagliatelles crues | epicerie
-  |  | Carottes, champignons, oignons grelots | legumes
-  |  | Vin rouge, laurier | epicerie

## Bœuf braisé aux légumes
type: diner
macros: 1100 | 60 | 32 | 124
astuce: Le plat du dimanche : deux heures à feu très doux, tu en as pour deux repas.
ingredients:
- 250 | g | paleron maigre | viande
- 350 | g | pommes de terre | legumes
-  |  | Carottes, navets, poireaux | legumes
- 60 | g | pain complet | boulangerie

## Bœuf bulgogi
type: diner
macros: 1100 | 63 | 32 | 126
astuce: Une demi-poire râpée dans la marinade attendrit vraiment la viande. À faire la veille au soir.
ingredients:
- 230 | g | bœuf mariné | viande
- 120 | g | riz cru | epicerie
-  |  | Kimchi | epicerie
- 1 |  | œuf au plat | cremerie
-  |  | Épinards sautés au sésame | epicerie

## Cabillaud & riz
type: diner
macros: 1090 | 68 | 28 | 132
astuce: En papillote, citron-aneth, 200° 12 min. Au-delà il devient sec — c'est la seule chose à surveiller.
ingredients:
- 250 | g | dos de cabillaud | poisson
- 120 | g | riz cru | epicerie
- 250 | g | courgettes | legumes
- 15 | g | huile | epicerie
- 150 | g | skyr | cremerie

## Carbonara allégée
type: diner
macros: 1200 | 65 | 38 | 128
astuce: Hors du feu pour lier les œufs. Zéro crème : c'est la vraie recette, et c'est plus léger.
ingredients:
- 130 | g | pâtes crues | epicerie
- 120 | g | lardons de dinde | viande
- 150 | g | poulet émincé | viande
- 2 |  | œufs | cremerie
- 30 | g | parmesan | cremerie

## Chakchouka & dinde
type: diner
macros: 1050 | 62 | 36 | 112
astuce: Une poêle, vingt minutes. Casse les œufs dans la sauce en fin de cuisson et couvre 4 min.
ingredients:
- 4 |  | œufs pochés dans la sauce | epicerie
- 150 | g | blanc de dinde émincé | viande
-  |  | Poivrons, tomates, cumin, paprika | epicerie
- 100 | g | semoule crue | epicerie
- 40 | g | pain | boulangerie

## Chili de haricots blancs
type: diner
macros: 1090 | 66 | 26 | 132
astuce: Les haricots blancs apportent 15 g de protéines et beaucoup de fibres — très rassasiant.
ingredients:
- 230 | g | poulet en morceaux | viande
- 200 | g | haricots blancs cuits | epicerie
- 100 | g | riz cru | epicerie
-  |  | Tomates, cumin, piment doux | epicerie

## Crevettes, poulet & udon
type: diner
macros: 1080 | 65 | 26 | 130
astuce: Crevettes en tout dernier, 2 minutes.
ingredients:
- 150 | g | crevettes | maree
- 130 | g | poulet | viande
- 200 | g | nouilles udon | epicerie
-  |  | Pak choï, champignons, brocoli | legumes
-  |  | Soja, gingembre | epicerie
- 10 | g | sésame | epicerie

## Curry japonais au bœuf
type: diner
macros: 1120 | 60 | 32 | 132
astuce: Les tablettes de roux du commerce sont grasses : utilise-en la moitié et allonge au bouillon.
ingredients:
- 230 | g | bœuf maigre en cubes | viande
- 130 | g | riz cru | epicerie
-  |  | Carotte, oignon, pomme de terre | legumes
-  |  | Roux de curry japonais (dosé léger) | epicerie

## Daurade & orge perlé
type: diner
macros: 1110 | 63 | 34 | 124
astuce: L'orge perlé se cuisine comme un risotto mais tient mieux à la réchauffe et coûte trois fois moins cher.
ingredients:
- 280 | g | daurade | poisson
- 120 | g | orge perlé cru | epicerie
-  |  | Asperges vertes ou courgettes | legumes
- 15 | g | huile | epicerie
- 20 | g | parmesan | cremerie

## Filet mignon & riz cantonais
type: diner
macros: 1100 | 62 | 28 | 132
astuce: Riz de la veille obligatoire : le riz frais colle et devient pâteux.
ingredients:
- 250 | g | filet mignon de porc | viande
- 120 | g | riz cru | epicerie
- 2 |  | œufs brouillés | cremerie
-  |  | petits pois | legumes
-  |  | Soja, ciboule | epicerie

## Fish & chips au four
type: diner
macros: 1200 | 66 | 34 | 134
astuce: Panure chapelure + paprika, four 220° 18 min. Sauce tartare au skyr, câpres et cornichons.
ingredients:
- 280 | g | cabillaud pané | poisson
- 450 | g | pommes de terre en frites | legumes
-  |  | Petits pois à la menthe | legumes
-  |  | Sauce tartare au skyr | epicerie

## Gambas à l'ail & riz safrané
type: diner
macros: 1090 | 62 | 28 | 134
astuce: Gambas 2 min par face maximum. Au-delà elles deviennent caoutchouteuses, sans retour possible.
ingredients:
- 280 | g | gambas décortiquées | maree
- 130 | g | riz cru | epicerie
-  |  | safran ou curcuma | epicerie
-  |  | Poivrons grillés | legumes
- 15 | g | huile | epicerie
-  |  | ail, persil | legumes

## Haché, purée, ratatouille
type: diner
macros: 1100 | 62 | 30 | 128
astuce: Purée au lait écrémé + une pointe de moutarde à l'ancienne : remplace le beurre sans effort.
ingredients:
- 250 | g | steak haché 5 % | viande
- 400 | g | purée au lait écrémé | cremerie
- 250 | g | ratatouille | epicerie
- 60 | g | pain complet | boulangerie

## Moussaka allégée
type: diner
macros: 1190 | 64 | 38 | 122
astuce: Aubergines au four et non à la poêle : elles absorbent trois fois moins d'huile.
ingredients:
- 250 | g | haché 5 % | viande
-  |  | Aubergines grillées au four | legumes
- 350 | g | pommes de terre | legumes
-  |  | Béchamel au lait écrémé | cremerie
- 30 | g | parmesan | cremerie

## Pizza maison protéinée
type: diner
macros: 1210 | 68 | 36 | 132
astuce: Four au maximum avec la plaque préchauffée à vide : c'est ce qui fait la différence sur la pâte.
ingredients:
- 150 | g | farine | epicerie
- 200 | g | poulet | viande
- 80 | g | mozzarella | cremerie
-  |  | Sauce tomate | epicerie
-  |  | origan | legumes
-  |  | Roquette fraîche à la sortie | legumes

## Poulet basquaise
type: diner
macros: 1080 | 60 | 30 | 125
astuce: Mijoté 25 min à couvert. Meilleur réchauffé le lendemain qu'au premier service.
ingredients:
- 220 | g | poulet | viande
- 110 | g | semoule complète crue | epicerie
-  |  | Poivrons, tomates, oignons | legumes
- 15 | g | huile | epicerie
-  |  | paprika | epicerie

## Poulet général Tao au four
type: diner
macros: 1100 | 66 | 26 | 134
astuce: Poulet passé à la maïzena puis au four 220° 20 min : croustillant sans friture, 300 kcal économisées.
ingredients:
- 260 | g | poulet en morceaux | viande
- 130 | g | riz cru | epicerie
-  |  | soja, vinaigre de riz, miel, ail | epicerie
-  |  | Brocoli vapeur | legumes
-  |  | sésame | epicerie

## Poulet rôti & gratin
type: diner
macros: 1200 | 68 | 38 | 122
astuce: Gratin au lait demi-écrémé plutôt qu'à la crème : 200 kcal économisées sans que ça se voie.
ingredients:
- 280 | g | poulet rôti (blanc + cuisse) | viande
-  |  | Gratin de pommes de terre au lait | cremerie
- 200 | g | haricots verts | legumes
- 30 | g | gruyère | cremerie

## Ramen maison au porc
type: diner
macros: 1110 | 64 | 30 | 128
astuce: Œufs mollets : 6 min 30 exactement, puis eau glacée. C'est la seule minuterie qui compte du plat.
ingredients:
- 220 | g | filet mignon en tranches | viande
- 200 | g | nouilles ramen | epicerie
-  |  | Bouillon miso | epicerie
- 2 |  | œufs mollets | cremerie
-  |  | Pak choï, ciboule, nori | legumes

## Saumon teriyaki
type: diner
macros: 1200 | 65 | 40 | 130
astuce: Sauce maison : soja, mirin, miel, gingembre réduits 3 min. Bien meilleure que les versions en bouteille.
ingredients:
- 250 | g | saumon glacé teriyaki | epicerie
- 130 | g | riz cru | epicerie
- 150 | g | edamame | legumes
-  |  | Sésame, ciboule | epicerie

## Souvlaki de poulet
type: diner
macros: 1100 | 65 | 30 | 128
astuce: Tzatziki au skyr plutôt qu'au yaourt grec : même goût, 15 g de protéines en plus.
ingredients:
- 230 | g | poulet en brochettes | viande
- 110 | g | riz pilaf cru | epicerie
- 150 | g | skyr, concombre, ail | cremerie
- 60 | g | pain pita complet | boulangerie

## Truite & gratin de courgettes
type: diner
macros: 1110 | 62 | 38 | 118
astuce: La truite est deux fois moins chère que le saumon pour un profil nutritionnel très proche.
ingredients:
- 250 | g | filet de truite | poisson
- 400 | g | pommes de terre vapeur | legumes
- 250 | g | courgettes | legumes
- 30 | g | gruyère | cremerie
- 10 | g | huile | epicerie

## Veau milanaise au four
type: diner
macros: 1120 | 65 | 34 | 128
astuce: Panée puis au four à 210° plutôt qu'à la poêle : tu gagnes 200 kcal d'huile absorbée.
ingredients:
- 230 | g | escalope de veau | viande
- 30 | g | chapelure | epicerie
- 1 |  | œuf | cremerie
- 110 | g | linguine crues | epicerie
-  |  | Tomates confites | legumes
- 12 | g | huile | epicerie


<!-- ================= PLAQUETTE — PLATS INTERCHANGEABLES ================= -->


## Bagel saumon fumé
type: plat
source: box
temps: 10
niveau: 1
macros: 925 | 52 | 34 | 102
astuce: Bagel légèrement toasté avant garnissage, même s'il sera mangé froid : il tient bien mieux.
ingredients:
- 2 |  | bagels complets | boulangerie
- 120 | g | saumon fumé | poisson
- 100 | g | fromage frais light | cremerie
-  |  | Câpres, aneth, oignon rouge, concombre | epicerie

## Bento poulet teriyaki
type: plat
source: box
temps: 20
niveau: 1
macros: 945 | 62 | 24 | 116
astuce: Riz refroidi complètement avant fermeture de la boîte, sinon la condensation détrempe tout.
ingredients:
- 180 | g | poulet teriyaki | epicerie
- 110 | g | riz cru | epicerie
- 100 | g | edamame | legumes
-  |  | Carottes marinées, sésame | epicerie

## Boulettes suédoises
type: plat
source: boeuf
temps: 35
niveau: 2
macros: 965 | 60 | 32 | 104
astuce: Une pointe de quatre-épices et de muscade dans la viande : c'est ce qui les distingue de boulettes ordinaires.
ingredients:
- 220 | g | haché 5 % | viande
- 400 | g | purée au lait écrémé | cremerie
-  |  | bouillon de bœuf + 100 g de fromage blanc | epicerie
-  |  | Confiture d'airelles, aneth | epicerie

## Brandade de morue allégée
type: plat
source: blanc
temps: 40
niveau: 2
macros: 955 | 62 | 26 | 112
astuce: Morue dessalée 24 h au frigo, eau changée trois fois. C'est la seule étape qui compte vraiment.
ingredients:
- 250 | g | morue dessalée | poisson
- 450 | g | pommes de terre | legumes
-  |  | Lait écrémé, ail, 12 g d'huile d'olive | epicerie
-  |  | Salade verte | legumes

## Brochettes de dinde satay
type: plat
source: volaille
temps: 25
niveau: 1
macros: 960 | 62 | 32 | 102
astuce: Brochettes en bois trempées 20 min dans l'eau, sinon elles brûlent avant la viande.
ingredients:
- 200 | g | dinde en cubes | viande
- 100 | g | riz cru + 50 ml de lait de coco allégé | epicerie
- 20 | g | purée de cacahuète, soja, citron vert | epicerie
-  |  | Concombre mariné | legumes

## Buddha bowl quinoa-tempeh
type: plat
source: vegetal
temps: 25
niveau: 1
macros: 945 | 52 | 34 | 110
astuce: Le tempeh est nettement plus protéiné que le tofu (19 g/100 g contre 12) et tient mieux à la cuisson.
ingredients:
- 150 | g | tempeh grillé | epicerie
- 100 | g | quinoa cru | epicerie
-  |  | Edamame, patate douce rôtie, chou rouge | legumes
-  |  | Sauce tahini-citron 20 g | epicerie

## Bœuf stroganoff allégé
type: plat
source: boeuf
temps: 30
niveau: 2
macros: 960 | 62 | 28 | 110
astuce: Le fromage blanc à la place de la crème fraîche : 250 kcal économisées, texture identique.
ingredients:
- 200 | g | bavette émincée | viande
- 110 | g | riz cru | epicerie
-  |  | Champignons de Paris, oignon, paprika | epicerie
- 120 | g | fromage blanc + moutarde | epicerie

## Calamars à la plancha
type: plat
source: mer
temps: 20
niveau: 2
macros: 930 | 60 | 26 | 108
astuce: Deux minutes à feu très vif, ou quarante minutes à feu doux. Entre les deux, c'est du caoutchouc.
ingredients:
- 300 | g | calamars | maree
- 110 | g | riz cru | epicerie
-  |  | Ail, persil, piment d'Espelette | epicerie
- 15 | g | huile d'olive, citron | epicerie

## Carpaccio de bœuf & roquette
type: plat
source: boeuf
temps: 10
niveau: 1
macros: 925 | 58 | 34 | 92
astuce: Viande passée 20 min au congélateur avant d'être tranchée : c'est le seul moyen d'obtenir des tranches fines.
ingredients:
- 200 | g | filet de bœuf tranché très fin | viande
-  |  | Roquette, 25 g de parmesan en copeaux | cremerie
- 15 | g | huile d'olive, citron | epicerie
- 120 | g | pain complet | boulangerie

## Ceviche de daurade
type: plat
source: blanc
temps: 20
niveau: 2
macros: 915 | 58 | 26 | 100
astuce: Le poisson marine 15 min, pas plus : au-delà il cuit trop et devient farineux.
ingredients:
- 250 | g | daurade très fraîche | poisson
- 400 | g | patate douce rôtie | legumes
-  |  | Citron vert, oignon rouge, coriandre, piment | epicerie
-  |  | Maïs grillé | legumes

## Chili sin carne
type: plat
source: vegetal
temps: 30
niveau: 1
macros: 940 | 52 | 26 | 124
astuce: Les PST réhydratées dans du bouillon et non de l'eau : c'est ce qui leur donne du goût. Le carré de chocolat noir arrondit l'acidité.
ingredients:
- 100 | g | protéines de soja texturées réhydratées | epicerie
- 200 | g | haricots rouges | epicerie
- 100 | g | riz cru | epicerie
-  |  | Tomate, cumin, paprika fumé, chocolat noir 5 g | epicerie

## Club sandwich protéiné
type: plat
source: box
temps: 15
niveau: 1
macros: 955 | 60 | 32 | 102
astuce: Assemblé le matin, pas la veille : le pain s'humidifie en une nuit.
ingredients:
- 3 | tranche | pain complet | boulangerie
- 120 | g | dinde, 2 œufs durs | viande
- 60 | g | bacon de dinde grillé | viande
-  |  | Salade, tomate, sauce au skyr | epicerie

## Colin à la bordelaise
type: plat
source: blanc
temps: 25
niveau: 1
macros: 940 | 60 | 28 | 106
astuce: La croûte se met sur le poisson cru et cuit avec lui : 200° 15 min, on ne la précuit jamais.
ingredients:
- 250 | g | dos de colin | poisson
-  |  | chapelure 30 g, ail, persil, 10 g d'huile | epicerie
- 400 | g | pommes de terre vapeur | legumes
- 250 | g | ratatouille | epicerie

## Curry de lieu noir aux épinards
type: plat
source: blanc
temps: 25
niveau: 1
macros: 945 | 58 | 26 | 112
astuce: Le poisson s'ajoute en dernier et pochera 6 min dans la sauce — il ne faut jamais le faire revenir avant.
ingredients:
- 250 | g | lieu noir | poisson
- 100 | g | riz basmati cru | epicerie
- 200 | g | épinards | legumes
- 120 | ml | lait de coco allégé, curry, gingembre | epicerie

## Curry de pois chiches & épinards
type: plat
source: vegetal
temps: 25
niveau: 1
macros: 930 | 44 | 32 | 116
astuce: Le moins protéiné de la plaquette : accompagne-le d'un shaker ou de 200 g de skyr pour atteindre le compte.
ingredients:
- 300 | g | pois chiches cuits | epicerie
- 100 | g | riz cru | epicerie
- 200 | g | épinards, tomate | legumes
- 120 | ml | lait de coco allégé, curry | epicerie
- 150 | g | skyr en accompagnement | cremerie

## Curry vert thaï au poulet
type: plat
source: volaille
temps: 25
niveau: 1
macros: 950 | 60 | 30 | 108
astuce: La pâte de curry se fait revenir dans l'huile avant le lait de coco : c'est ce qui libère les arômes.
ingredients:
- 200 | g | poulet | viande
- 100 | g | riz jasmin cru | epicerie
- 150 | ml | lait de coco allégé | epicerie
-  |  | Pâte de curry vert, aubergine thaï, basilic | epicerie
- 10 | g | huile | epicerie

## Dinde à l'estragon
type: plat
source: volaille
temps: 20
niveau: 1
macros: 945 | 64 | 26 | 108
astuce: Le fromage blanc s'ajoute hors du feu, sinon il tranche. L'estragon en toute fin.
ingredients:
- 200 | g | escalope de dinde | viande
- 100 | g | tagliatelles crues | epicerie
-  |  | Champignons, échalote, estragon frais | legumes
- 100 | g | fromage blanc + bouillon | epicerie

## Falafels au four & houmous
type: plat
source: vegetal
temps: 35
niveau: 2
macros: 950 | 46 | 34 | 116
astuce: Pois chiches secs trempés une nuit, jamais cuits : c'est la règle absolue du falafel, sinon la pâte se délite.
ingredients:
- 300 | g | pois chiches secs trempés (jamais en boîte) | epicerie
-  |  | Houmous 100 g | epicerie
- 2 |  | pains pita complets | boulangerie
-  |  | Crudités, sauce au skyr | epicerie

## Filet mignon en croûte de moutarde
type: plat
source: porc
temps: 30
niveau: 1
macros: 945 | 62 | 28 | 106
astuce: Le filet mignon est la pièce de porc la plus maigre. Cœur rosé : 20 min à 190°, pas plus.
ingredients:
- 200 | g | filet mignon | viande
- 400 | g | panais et carottes rôtis | legumes
-  |  | moutarde à l'ancienne, chapelure 25 g, thym | epicerie
- 100 | g | riz cru | epicerie

## Frittata pommes de terre-brocoli
type: plat
source: oeufs
temps: 30
niveau: 1
macros: 940 | 56 | 36 | 94
astuce: Démarrée à la poêle, finie 8 min au four. Excellente froide le lendemain, en lunch box.
ingredients:
- 5 |  | œufs | cremerie
- 350 | g | pommes de terre | legumes
- 200 | g | brocoli, 100 g de jambon | viande
- 30 | g | parmesan, 10 g d'huile | epicerie

## Galettes haricots rouges & patate douce
type: plat
source: vegetal
temps: 30
niveau: 2
macros: 935 | 44 | 30 | 120
astuce: Appareil au frigo 30 min avant de former les galettes : sinon elles s'effondrent à la cuisson.
ingredients:
- 250 | g | haricots rouges écrasés | epicerie
- 300 | g | patate douce | legumes
-  |  | Flocons d'avoine 40 g, cumin, coriandre | epicerie
-  |  | Salade, sauce au skyr | epicerie

## Gravlax maison
type: plat
source: gras
temps: 10
niveau: 2
macros: 950 | 58 | 38 | 88
astuce: 48 h sous poids au frigo, retourné à mi-parcours. Dix minutes de travail pour un résultat qui coûte trois fois plus cher en magasin.
ingredients:
- 200 | g | saumon mariné 48 h | poisson
-  |  | gros sel, sucre, aneth, poivre | epicerie
- 120 | g | pain de seigle | epicerie
-  |  | Sauce moutarde-aneth au skyr | epicerie
-  |  | Pommes de terre tièdes 300 g | legumes

## Hareng fumé & pommes tièdes
type: plat
source: gras
temps: 15
niveau: 1
macros: 930 | 54 | 38 | 90
astuce: Le hareng est l'un des poissons gras les moins chers du marché, à profil nutritionnel équivalent au saumon.
ingredients:
- 200 | g | filets de hareng fumé doux | poisson
- 450 | g | pommes de terre tièdes | legumes
-  |  | Oignon, laurier, huile 10 g | epicerie
-  |  | Salade de mâche | legumes

## Jambon braisé & purée de pois cassés
type: plat
source: porc
temps: 30
niveau: 1
macros: 940 | 64 | 24 | 110
astuce: Purée de pois cassés montée au bouillon plutôt qu'au beurre. Très rassasiante pour son coût calorique.
ingredients:
- 220 | g | jambon à braiser (ou palette maigre) | viande
- 250 | g | pois cassés cuits | epicerie
-  |  | Carottes, poireaux | legumes
- 60 | g | pain complet | boulangerie

## Keftas & boulgour à la menthe
type: plat
source: boeuf
temps: 25
niveau: 1
macros: 945 | 60 | 28 | 108
astuce: L'oignon râpé (et non haché) dans la viande : c'est ce qui garde les keftas moelleuses.
ingredients:
- 220 | g | haché 5 % | viande
- 100 | g | boulgour cru | epicerie
-  |  | Menthe, coriandre, cumin, oignon râpé | epicerie
- 100 | g | skyr, citron, ail | cremerie

## Limande meunière allégée
type: plat
source: blanc
temps: 15
niveau: 2
macros: 925 | 58 | 30 | 98
astuce: Farine juste avant de cuire, jamais avant : sinon elle s'humidifie et le poisson ne dore plus.
ingredients:
- 280 | g | filets de limande | poisson
-  |  | Farine, 10 g de beurre, citron | epicerie
- 400 | g | pommes de terre vapeur | legumes
- 200 | g | épinards à l'ail | legumes

## Merlu à la plancha & sauce vierge
type: plat
source: blanc
temps: 20
niveau: 1
macros: 930 | 60 | 28 | 102
astuce: La sauce vierge se prépare 30 min avant et ne se chauffe jamais. Elle se contente de tiédir au contact du poisson.
ingredients:
- 250 | g | merlu | poisson
- 400 | g | pommes grenaille | legumes
-  |  | tomate, olive, basilic, citron, 15 g d'huile | epicerie
-  |  | Fenouil | legumes

## Moules marinières & frites de four
type: plat
source: mer
temps: 25
niveau: 1
macros: 940 | 58 | 26 | 110
astuce: Moules cuites à couvert, feu vif, 5 min : dès qu'elles sont ouvertes, c'est fini. Celles qui restent fermées se jettent.
ingredients:
- 1.2 | kg | moules | maree
- 450 | g | pommes de terre en frites au four | legumes
-  |  | Vin blanc, échalote, persil | epicerie
- 10 | g | huile | epicerie

## Onglet à l'échalote
type: plat
source: boeuf
temps: 15
niveau: 1
macros: 935 | 62 | 32 | 94
astuce: L'onglet se mange saignant ou pas du tout : à point il devient dur. 2 min par face, feu très vif.
ingredients:
- 200 | g | onglet | viande
- 400 | g | pommes de terre sautées | legumes
- 6 |  | échalotes confites au vinaigre | epicerie
- 200 | g | haricots verts | legumes
- 12 | g | huile | epicerie

## Pain perdu salé
type: plat
source: oeufs
temps: 15
niveau: 1
macros: 935 | 54 | 36 | 96
astuce: Pain rassis obligatoire : le pain frais se désagrège dans l'appareil.
ingredients:
- 4 | tranche | pain complet | boulangerie
- 4 |  | œufs, 100 ml de lait | cremerie
- 100 | g | jambon, 40 g d'emmental | viande
-  |  | Salade verte | legumes

## Parmentier de cabillaud
type: plat
source: blanc
temps: 40
niveau: 2
macros: 960 | 62 | 26 | 114
astuce: Le poisson est juste effeuillé cru dans les poireaux : il cuit au four. Précuit, il devient sec.
ingredients:
- 280 | g | cabillaud | poisson
- 450 | g | purée au lait écrémé | cremerie
-  |  | Poireaux fondus, aneth | legumes
- 25 | g | gruyère | cremerie

## Pâtes aux lentilles corail & ricotta
type: plat
source: vegetal
temps: 20
niveau: 1
macros: 940 | 48 | 30 | 118
astuce: Les lentilles corail fondent complètement et forment la sauce. Aucun autre liant nécessaire.
ingredients:
- 100 | g | pâtes complètes crues | epicerie
- 200 | g | lentilles corail cuites | epicerie
- 150 | g | ricotta, 200 g d'épinards | cremerie
-  |  | Ail, citron, 12 g d'huile | epicerie

## Pho au bœuf
type: plat
source: boeuf
temps: 30
niveau: 2
macros: 930 | 60 | 22 | 116
astuce: La viande crue est déposée dans le bol et cuite par le bouillon bouillant versé dessus. C'est tout le principe.
ingredients:
- 180 | g | bavette tranchée très fin | viande
- 100 | g | nouilles de riz crues | epicerie
-  |  | os ou fond de bœuf, anis étoilé, cannelle, gingembre | epicerie
-  |  | Coriandre, basilic thaï, pousses de soja, citron vert | epicerie

## Pita falafel-houmous
type: plat
source: box
temps: 15
niveau: 1
macros: 940 | 46 | 34 | 116
astuce: Un peu court en protéines : ajoute 150 g de skyr en dessert ou un shaker.
ingredients:
- 2 |  | pains pita complets | boulangerie
- 6 |  | falafels (voir recette végétale) | epicerie
- 80 | g | houmous | epicerie
-  |  | Crudités, sauce au skyr, menthe | epicerie

## Poke bowl au saumon
type: plat
source: gras
temps: 20
niveau: 1
macros: 955 | 58 | 36 | 98
astuce: Riz tiède et non brûlant sous le poisson cru : c'est le détail qui fait la différence.
ingredients:
- 200 | g | saumon cru en dés | poisson
- 110 | g | riz cru | epicerie
-  |  | Edamame, concombre, avocat ¼, radis | legumes
-  |  | Soja, sésame, gingembre mariné | epicerie

## Porc au caramel vietnamien
type: plat
source: porc
temps: 30
niveau: 2
macros: 955 | 60 | 26 | 112
astuce: Le caramel doit être ambre foncé avant d'ajouter le nuoc-mâm — clair, il n'a aucun goût ; noir, il est amer.
ingredients:
- 200 | g | filet mignon en dés | viande
- 110 | g | riz cru | epicerie
- 20 | g | sucre, nuoc-mâm, échalote, poivre | epicerie
-  |  | Ciboule, concombre | legumes

## Poulet harissa-miel
type: plat
source: volaille
temps: 25
niveau: 1
macros: 950 | 61 | 26 | 110
astuce: Marinade 30 min minimum. Le miel caramélise vite : four à 200°, pas plus.
ingredients:
- 200 | g | poulet | viande
- 100 | g | semoule complète crue | epicerie
-  |  | Courgette, poivron, carotte | legumes
-  |  | harissa, miel, citron, cumin | epicerie
- 10 | g | huile | epicerie

## Poulet katsu au four
type: plat
source: volaille
temps: 30
niveau: 2
macros: 960 | 62 | 28 | 112
astuce: Panko et non chapelure classique : c'est ce qui donne le croustillant sans friture. 220° 18 min.
ingredients:
- 200 | g | poulet pané (panko 30 g) | epicerie
- 110 | g | riz cru | epicerie
-  |  | Chou blanc émincé finement | legumes
-  |  | ketchup, soja, worcestershire | epicerie

## Poulet Kiev au four
type: plat
source: volaille
temps: 40
niveau: 3
macros: 970 | 60 | 34 | 100
astuce: Le beurre doit être congelé avant d'être inséré, sinon il fuit à la cuisson. C'est toute la difficulté.
ingredients:
- 200 | g | blanc de poulet | viande
- 15 | g | beurre, ail, persil | cremerie
-  |  | Chapelure 30 g + 1 œuf | epicerie
- 400 | g | pommes de terre en purée | legumes

## Poulet paprikash
type: plat
source: volaille
temps: 35
niveau: 1
macros: 955 | 60 | 30 | 106
astuce: Le paprika brûle en 20 secondes : hors du feu pour l'incorporer, puis on remet à mijoter.
ingredients:
- 200 | g | poulet | viande
- 100 | g | nouilles aux œufs crues | epicerie
-  |  | Paprika doux hongrois, poivrons, oignons | epicerie
- 100 | g | fromage blanc | cremerie

## Pulled pork maison
type: plat
source: porc
temps: 180
niveau: 1
macros: 960 | 62 | 30 | 104
astuce: Trois heures de four à 140°, mais quinze minutes de travail réel. Fais-en 1,5 kg, congèle en portions.
ingredients:
- 220 | g | échine dégraissée effilochée | viande
- 2 |  | pains burger complets | boulangerie
-  |  | Coleslaw au skyr | cremerie
-  |  | Sauce barbecue maison, paprika fumé | epicerie

## Rillettes de maquereau
type: plat
source: gras
temps: 10
niveau: 1
macros: 920 | 56 | 36 | 90
astuce: Dix minutes, zéro cuisson, et ça se garde trois jours. Le dépannage le plus efficace de la plaquette.
ingredients:
- 2 |  | bo îtes de maquereau au naturel | poisson
- 150 | g | fromage blanc 0 % | cremerie
-  |  | Échalote, moutarde, citron, ciboulette | epicerie
- 120 | g | pain complet | boulangerie
-  |  | Crudités | legumes

## Risotto de crevettes au citron
type: plat
source: mer
temps: 35
niveau: 2
macros: 960 | 58 | 28 | 112
astuce: Bouillon ajouté louche par louche, toujours chaud. Froid, il stoppe la cuisson et le riz devient inégal.
ingredients:
- 220 | g | crevettes | maree
- 110 | g | riz arborio cru | epicerie
-  |  | Bouillon, zeste de citron, 20 g de parmesan | epicerie
-  |  | Petits pois, 12 g d'huile | epicerie

## Rosbif froid & salade de pommes de terre
type: plat
source: boeuf
temps: 20
niveau: 2
macros: 940 | 64 | 26 | 106
astuce: Rosbif sorti du frigo 20 min avant : froid glacé, la viande n'a aucun goût.
ingredients:
- 200 | g | rosbif froid tranché fin | viande
- 450 | g | pommes de terre tièdes | legumes
-  |  | Salade au skyr, moutarde, échalote, cornichons | epicerie
-  |  | Roquette | legumes

## Saint-Jacques & purée de topinambour
type: plat
source: mer
temps: 20
niveau: 3
macros: 935 | 56 | 30 | 104
astuce: Saint-Jacques bien séchées avant cuisson, poêle brûlante, 90 secondes par face. Humides, elles bouillent au lieu de dorer.
ingredients:
- 250 | g | noix de Saint-Jacques | epicerie
- 350 | g | topinambours + 150 g de pommes de terre | legumes
-  |  | Lait écrémé, 10 g de beurre | cremerie
-  |  | Noisettes torréfiées | epicerie

## Salade César protéinée
type: plat
source: volaille
temps: 20
niveau: 1
macros: 940 | 66 | 32 | 88
astuce: La sauce au skyr remplace la mayonnaise et l'huile : 300 kcal de moins, et le goût d'anchois reste intact.
ingredients:
- 220 | g | poulet grillé | viande
-  |  | Cœurs de romaine | legumes
- 60 | g | pain complet | boulangerie
- 120 | g | skyr, anchois, ail, citron, 20 g de parmesan | poisson

## Salade Cobb
type: plat
source: oeufs
temps: 20
niveau: 1
macros: 955 | 64 | 40 | 80
astuce: Les ingrédients se disposent en bandes parallèles et se mélangent à table. Ce n'est pas de la décoration : chaque bouchée reste distincte.
ingredients:
- 3 |  | œufs durs, 150 g de poulet grillé | viande
- 80 | g | bacon de dinde | viande
- 0.25 |  | avocat , tomate, romaine | legumes
- 30 | g | bleu, vinaigrette légère | epicerie
- 80 | g | pain complet | boulangerie

## Salade de crevettes & céleri
type: plat
source: mer
temps: 25
niveau: 1
macros: 915 | 58 | 26 | 102
astuce: La pomme verte et le céleri apportent le croquant qui manque à la plupart des salades de crevettes.
ingredients:
- 250 | g | crevettes | maree
- 450 | g | pommes de terre tièdes | legumes
-  |  | Céleri branche, pomme verte, aneth | legumes
- 100 | g | skyr, moutarde, citron | epicerie

## Salade de pâtes thon-mozzarella
type: plat
source: box
temps: 15
niveau: 1
macros: 950 | 58 | 32 | 104
astuce: Pâtes rincées à l'eau froide et huilées immédiatement : elles ne collent pas en bloc dans la boîte.
ingredients:
- 100 | g | pâtes complètes crues | epicerie
- 2 |  | bo îtes de thon au naturel | poisson
- 80 | g | mozzarella, tomates cerises | cremerie
-  |  | Basilic, 12 g d'huile d'olive | epicerie

## Salade lentilles & dinde fumée
type: plat
source: box
temps: 15
niveau: 1
macros: 930 | 56 | 28 | 110
astuce: Meilleure le lendemain qu'au premier jour : les lentilles s'imprègnent de la vinaigrette.
ingredients:
- 250 | g | lentilles vertes cuites | epicerie
- 150 | g | dinde fumée | viande
- 50 | g | feta, échalote, persil | cremerie
-  |  | Vinaigrette moutarde, 12 g d'huile | epicerie

## Salade poulet, quinoa, grenade
type: plat
source: volaille
temps: 20
niveau: 1
macros: 935 | 58 | 30 | 104
astuce: Se transporte parfaitement et se mange froid. La grenade apporte l'acidité qui manque à la plupart des salades de quinoa.
ingredients:
- 200 | g | poulet grillé | viande
- 100 | g | quinoa cru | epicerie
-  |  | Grenade, menthe, persil, oignon rouge | legumes
- 15 | g | huile d'olive, citron | epicerie

## Sardines grillées & salade tiède
type: plat
source: gras
temps: 20
niveau: 1
macros: 935 | 58 | 38 | 88
astuce: Sardines non vidées et grillées entières : elles restent moelleuses. On les ouvre à table.
ingredients:
- 6 |  | sardines fraîches | poisson
- 450 | g | pommes de terre tièdes | legumes
-  |  | Oignon rouge, persil, citron | legumes
- 12 | g | huile d'olive | epicerie

## Saumon en croûte d'herbes & lentilles beluga
type: plat
source: gras
temps: 30
niveau: 2
macros: 975 | 62 | 38 | 90
astuce: Les lentilles beluga tiennent mieux que les vertes et ne se transforment pas en purée.
ingredients:
- 200 | g | saumon | poisson
-  |  | persil, aneth, chapelure 20 g, moutarde | epicerie
- 250 | g | lentilles beluga cuites | epicerie
-  |  | Échalote, vinaigre balsamique | epicerie

## Sauté de porc aux pruneaux
type: plat
source: porc
temps: 35
niveau: 1
macros: 950 | 60 | 28 | 108
astuce: Les pruneaux s'ajoutent 10 min avant la fin, sinon ils se délitent complètement.
ingredients:
- 200 | g | sauté de porc maigre | viande
- 100 | g | riz sauvage cru | epicerie
- 8 |  | pruneaux , oignon, thym | epicerie
-  |  | Déglaçage au bouillon | epicerie

## Shakshuka verte
type: plat
source: oeufs
temps: 20
niveau: 1
macros: 930 | 52 | 42 | 84
astuce: Version verte de la chakchouka : mêmes œufs pochés, base d'épinards au lieu de tomate.
ingredients:
- 4 |  | œufs | cremerie
- 300 | g | épinards, courgette, petits pois | legumes
- 40 | g | feta | cremerie
- 100 | g | semoule crue, 60 g de pain | epicerie
- 12 | g | huile | epicerie

## Soupe de poisson & fruits de mer
type: plat
source: mer
temps: 40
niveau: 2
macros: 950 | 62 | 26 | 110
astuce: Fruits de mer en toute fin, hors du feu : la chaleur résiduelle suffit largement.
ingredients:
- 200 | g | poisson blanc, 150 g de moules et crevettes | poisson
-  |  | Fumet, tomate, fenouil, safran | epicerie
- 400 | g | pommes de terre | legumes
- 60 | g | pain complet, rouille au skyr | cremerie

## Soupe marocaine aux lentilles corail
type: plat
source: vegetal
temps: 30
niveau: 1
macros: 920 | 46 | 24 | 124
astuce: Les lentilles corail cuisent en 12 min sans trempage. Le plat le moins cher de toute la plaquette.
ingredients:
- 250 | g | lentilles corail cuites | epicerie
- 150 | g | pois chiches | epicerie
-  |  | Tomate, céleri, coriandre, ras el-hanout | epicerie
- 120 | g | pain complet, 150 g de skyr | cremerie

## Soupe-repas poulet-nouilles en thermos
type: plat
source: box
temps: 25
niveau: 1
macros: 920 | 58 | 22 | 116
astuce: Nouilles conservées à part et ajoutées au moment de manger : dans le bouillon, elles gonflent et deviennent pâteuses.
ingredients:
- 180 | g | poulet effiloché | viande
- 80 | g | nouilles fines crues | epicerie
-  |  | Bouillon, gingembre, ciboule, pak choï | epicerie
- 60 | g | pain complet | boulangerie

## Steak tartare & pommes vapeur
type: plat
source: boeuf
temps: 15
niveau: 2
macros: 930 | 64 | 28 | 98
astuce: Viande hachée à la commande chez le boucher et consommée le jour même. Non négociable.
ingredients:
- 200 | g | filet ou rumsteck haché au couteau | viande
- 450 | g | pommes de terre vapeur | legumes
-  |  | Câpres, cornichons, échalote, persil | epicerie
- 1 |  | jaune d'œuf, moutarde, tabasco | epicerie

## Tacos de bœuf épicé
type: plat
source: boeuf
temps: 20
niveau: 1
macros: 955 | 60 | 32 | 102
astuce: Tortillas passées 30 secondes à la poêle sèche : elles deviennent souples et parfumées.
ingredients:
- 200 | g | haché 5 % | viande
- 3 |  | tortillas de maïs | epicerie
- 150 | g | haricots rouges | epicerie
-  |  | Oignon rouge, coriandre, citron vert | legumes
- 60 | g | skyr, 20 g de cheddar | cremerie

## Tacos de poisson
type: plat
source: blanc
temps: 25
niveau: 1
macros: 950 | 58 | 30 | 108
astuce: Le chou rouge se marine 20 min dans le citron vert : il devient rose vif et croquant.
ingredients:
- 250 | g | cabillaud pané au four | poisson
- 3 |  | tortillas de maïs | epicerie
-  |  | Chou rouge mariné au citron vert | legumes
- 80 | g | skyr, coriandre, chipotle | cremerie

## Tartare de saumon-avocat
type: plat
source: gras
temps: 20
niveau: 1
macros: 960 | 56 | 40 | 90
astuce: Saumon coupé au couteau, jamais mixé. Assaisonné au dernier moment, sinon le citron le « cuit ».
ingredients:
- 200 | g | saumon très frais en dés | poisson
- 110 | g | riz vinaigré cru | epicerie
- 0.5 |  | avocat , ciboule, sésame | epicerie
-  |  | Soja, citron vert, huile de sésame | epicerie

## Thon mi-cuit au sésame
type: plat
source: gras
temps: 15
niveau: 2
macros: 940 | 64 | 30 | 98
astuce: 45 secondes par face sur une poêle brûlante. Le cœur doit rester cru : c'est tout l'intérêt de la pièce.
ingredients:
- 220 | g | thon rouge ou albacore | poisson
-  |  | Croûte de sésame | epicerie
- 110 | g | riz cru | epicerie
-  |  | Wok de légumes croquants, soja | epicerie

## Tofu mariné miso & soba
type: plat
source: vegetal
temps: 25
niveau: 1
macros: 925 | 48 | 32 | 108
astuce: Tofu pressé 20 min sous un poids avant marinade : sinon il n'absorbe rien.
ingredients:
- 250 | g | tofu ferme | epicerie
- 100 | g | nouilles soba crues | epicerie
-  |  | miso, mirin, soja, gingembre | epicerie
-  |  | Edamame 100 g, ciboule, sésame | epicerie

## Waterzooi de poulet
type: plat
source: volaille
temps: 35
niveau: 2
macros: 950 | 62 | 28 | 108
astuce: Le bouillon doit rester frémissant, jamais bouillant, sinon la liaison coagule.
ingredients:
- 200 | g | poulet | viande
- 400 | g | pommes de terre | legumes
-  |  | Poireaux, carottes, céleri | legumes
- 100 | g | fromage blanc + 1 jaune d'œuf | cremerie

## Wrap de dinde tex-mex
type: plat
source: volaille
temps: 10
niveau: 1
macros: 940 | 58 | 28 | 110
astuce: Dix minutes chrono. Le plat des jours où tu rentres tard et où tu allais commander.
ingredients:
- 180 | g | dinde émincée | viande
- 2 |  | tortillas complètes | epicerie
- 150 | g | haricots noirs | epicerie
-  |  | Maïs, poivron, cumin, paprika | epicerie
- 60 | g | skyr en sauce | epicerie

## Wrap poulet-avocat
type: plat
source: box
temps: 10
niveau: 1
macros: 935 | 58 | 34 | 94
astuce: Se prépare la veille au soir. Emballer serré dans du papier cuisson évite qu'il s'ouvre dans le sac.
ingredients:
- 2 |  | tortillas complètes | epicerie
- 180 | g | poulet grillé | viande
- 0.25 |  | avocat , salade, tomate | legumes
- 80 | g | skyr, citron, ail | cremerie

## Œufs bénédicte allégés
type: plat
source: oeufs
temps: 25
niveau: 3
macros: 945 | 56 | 38 | 92
astuce: Vinaigre blanc dans l'eau frémissante et tourbillon avant de casser l'œuf. C'est la seule technique qui marche.
ingredients:
- 4 |  | œufs pochés | cremerie
- 2 |  | muffins anglais complets | boulangerie
- 120 | g | jambon blanc | viande
- 1 |  | jaune , 100 g de skyr, citron | cremerie
-  |  | Épinards | legumes

## Œufs cocotte au saumon fumé
type: plat
source: oeufs
temps: 20
niveau: 1
macros: 925 | 54 | 38 | 90
astuce: Bain-marie et blancs juste pris, jaunes coulants : 12 min à 180°, four surveillé.
ingredients:
- 4 |  | œufs | cremerie
- 100 | g | saumon fumé | poisson
- 200 | g | épinards, 100 g de fromage blanc | cremerie
- 120 | g | pain complet toasté | boulangerie
- 350 | g | pommes de terre | legumes

## Œufs mimosa au thon
type: plat
source: oeufs
temps: 20
niveau: 1
macros: 900 | 58 | 36 | 80
astuce: Le skyr remplace la mayonnaise dans la farce : la texture est même meilleure, plus légère.
ingredients:
- 6 |  | œufs durs | cremerie
- 1 |  | bo îte de thon au naturel | poisson
-  |  | jaunes, 100 g de skyr, moutarde, ciboulette | epicerie
-  |  | Salade, 120 g de pain complet | boulangerie


<!-- ================= SHAKERS ================= -->


## Avoine-cacao
type: shaker
macros: 610 | 52 | 12 | 78
astuce: Le shaker des jours A1 et B1. Mixe l'avoine seule 20 secondes avant d'ajouter le reste, sinon c'est granuleux.
ingredients:
- 40 | g | whey isolate | epicerie
- 80 | g | flocons d'avoine | epicerie
- 250 | ml | lait écrémé | cremerie
- 10 | g | cacao non sucré | epicerie
-  |  | cannelle | epicerie

## Barres avoine-whey maison
type: shaker
macros: 230 | 12 | 9 | 24
astuce: Tout mélanger, tasser fermement dans un moule rectangulaire, 2 h au frigo, découper en 8. Elles tiennent une semaine au frais et se transportent en sac de sport. Bien moins chères et bien meilleures que les barres du commerce, dont la plupart sont des barres chocolatées avec une étiquette différente.
ingredients:
- 200 | g | flocons d'avoine | epicerie
- 60 | g | whey isolate | epicerie
- 80 | g | purée de cacahuète | epicerie
- 60 | g | miel | epicerie
- 100 | ml | lait | cremerie
- 1 | pincée | sel | epicerie
- 30 | g | chocolat noir 70 % | epicerie

## Cacahuète-banane
type: shaker
macros: 590 | 48 | 24 | 52
astuce: Purée de cacahuète sans sucre ni huile de palme ajoutés — liste d'ingrédients : cacahuètes, sel.
ingredients:
- 40 | g | whey isolate | epicerie
- 250 | ml | lait demi-écrémé | cremerie
- 20 | g | purée de cacahuète | epicerie
- 1 |  | banane | fruits

## Café glacé protéiné
type: shaker
macros: 250 | 43 | 3 | 14
astuce: Café bien froid avant de mixer, sinon la whey coagule et devient filandreuse.
ingredients:
- 40 | g | whey vanille | epicerie
- 200 | ml | lait écrémé | cremerie
- 1 |  | expresso refroidi | epicerie
-  |  | Glaçons | epicerie

## Le simple
type: shaker
macros: 245 | 36 | 2 | 25
astuce: Quand le repas suivant est proche et que tu veux juste la dose de protéines.
ingredients:
- 40 | g | whey isolate | epicerie
- 300 | ml | eau | epicerie
- 1 |  | banane | fruits

## Skyr-fruits rouges
type: shaker
macros: 385 | 55 | 3 | 32
astuce: 55 g de protéines pour 385 kcal : le meilleur ratio de la liste. Les fruits surgelés font office de glaçons.
ingredients:
- 30 | g | whey isolate | epicerie
- 250 | g | skyr | cremerie
- 150 | g | fruits rouges surgelés | fruits

## Vert-amande
type: shaker
macros: 400 | 32 | 18 | 34
astuce: Les épinards ne se goûtent pas derrière la banane. Utile les semaines où les légumes passent à la trappe.
ingredients:
- 30 | g | whey neutre | epicerie
- 60 | g | épinards frais | legumes
- 1 |  | banane | fruits
- 15 | g | amandes | epicerie
- 200 | ml | boisson amande | epicerie


<!-- ================= COLLATIONS ================= -->


## Barre maison
type: collation
temps: 5
niveau: 1
macros: 460 | 24 | 14 | 60
ingredients:
- 2 |  | barres avoine-whey (recette ci-dessous) | epicerie

## Bol riz-thon
type: collation
temps: 5
niveau: 1
macros: 400 | 28 | 11 | 47
ingredients:
- 150 | g | riz cuit | epicerie
- 1 |  | bo îte de thon | poisson
- 0.25 |  | avocat | fruits
-  |  | soja | epicerie

## Cottage
type: collation
temps: 5
niveau: 1
macros: 340 | 30 | 9 | 35
ingredients:
- 200 | g | cottage cheese | cremerie
-  |  | concombre | legumes
- 60 | g | pain complet | boulangerie

## Cottage cheese & ananas
type: collation
temps: 5
niveau: 1
macros: 330 | 32 | 8 | 32
ingredients:
- 250 | g | cottage cheese | cremerie
- 150 | g | ananas frais | fruits
- 10 | g | noix de coco | epicerie

## Dinde-avocat
type: collation
temps: 5
niveau: 1
macros: 400 | 30 | 11 | 45
ingredients:
- 120 | g | blanc de dinde | viande
- 0.5 |  | avocat | fruits
- 3 |  | galettes de riz | epicerie

## Edamame & skyr salé
type: collation
temps: 5
niveau: 1
macros: 370 | 34 | 9 | 38
ingredients:
- 200 | g | edamame | legumes
- 200 | g | skyr | cremerie
-  |  | citron | fruits
-  |  | fleur de sel | epicerie

## Fromage blanc-banane
type: collation
temps: 5
niveau: 1
macros: 400 | 32 | 11 | 43
ingredients:
- 300 | g | fromage blanc 0 % | cremerie
- 1 |  | banane | fruits
- 15 | g | purée d'amande | epicerie

## Fromage blanc-granola
type: collation
temps: 5
niveau: 1
macros: 420 | 38 | 10 | 44
ingredients:
- 400 | g | fromage blanc 0 % | cremerie
- 40 | g | granola | epicerie

## Roulés de dinde au fromage frais
type: collation
temps: 5
niveau: 1
macros: 350 | 36 | 8 | 34
ingredients:
- 150 | g | blanc de dinde | viande
- 80 | g | fromage frais light | cremerie
-  |  | concombre | legumes
- 2 |  | galettes | epicerie

## Sandwich poulet
type: collation
temps: 5
niveau: 1
macros: 380 | 34 | 9 | 41
ingredients:
- 80 | g | pain complet | boulangerie
- 120 | g | poulet | viande
-  |  | crudités | legumes
-  |  | moutarde | epicerie

## Skyr-amandes
type: collation
temps: 5
niveau: 1
macros: 380 | 30 | 10 | 42
ingredients:
- 250 | g | skyr | cremerie
- 20 | g | amandes | epicerie
- 1 |  | c. à s. de miel | epicerie

## Smoothie bowl skyr-mangue
type: collation
temps: 5
niveau: 1
macros: 400 | 34 | 10 | 44
ingredients:
- 250 | g | skyr | cremerie
- 100 | g | mangue | fruits
- 20 | g | whey | epicerie
- 15 | g | graines de courge | epicerie

## Tartine ricotta-miel-noix
type: collation
temps: 5
niveau: 1
macros: 390 | 22 | 12 | 48
ingredients:
- 80 | g | pain complet | boulangerie
- 120 | g | ricotta | cremerie
- 10 | g | miel | epicerie
- 15 | g | noix | epicerie

## Thon express
type: collation
temps: 5
niveau: 1
macros: 350 | 44 | 7 | 28
ingredients:
- 2 |  | bo îtes de thon au naturel | poisson
- 60 | g | pain complet | boulangerie
-  |  | tomate | legumes

## Toast au fromage blanc & radis
type: collation
temps: 5
niveau: 1
macros: 340 | 28 | 9 | 37
ingredients:
- 60 | g | pain complet | boulangerie
- 200 | g | fromage blanc 0 % | cremerie
-  |  | radis | legumes
-  |  | ciboulette | viande

## Wrap dinde
type: collation
temps: 5
niveau: 1
macros: 390 | 32 | 10 | 43
ingredients:
- 1 |  | tortilla complète | epicerie
- 120 | g | dinde | viande
- 60 | g | fromage frais light | cremerie
-  |  | salade | legumes

## Yaourt grec, granola, fruits rouges
type: collation
temps: 5
niveau: 1
macros: 410 | 30 | 11 | 48
ingredients:
- 300 | g | yaourt grec 0 % | cremerie
- 30 | g | granola | epicerie
- 100 | g | fruits rouges | fruits

## Œuf dur & houmous
type: collation
temps: 5
niveau: 1
macros: 360 | 24 | 10 | 44
ingredients:
- 3 |  | œufs durs | cremerie
- 60 | g | houmous | epicerie
-  |  | bâtonnets de crudités | legumes
- 2 |  | galettes | epicerie

## Œufs brouillés
type: collation
temps: 5
niveau: 1
macros: 390 | 26 | 11 | 47
ingredients:
- 3 |  | œufs | cremerie
- 60 | g | pain complet | boulangerie
-  |  | tomate | legumes
-  |  | ciboulette | viande

## Œufs durs
type: collation
temps: 5
niveau: 1
macros: 340 | 22 | 10 | 40
ingredients:
- 3 |  | œufs | cremerie
- 2 |  | galettes de riz | epicerie
- 1 |  | pomme | fruits


<!-- ================= PRÉPARATIONS (barres, gâteaux, oats, chia) ================= -->


## Avoine-banane
type: prepa
macros: 140 | 9 | 4 | 18
astuce: 180° pendant 18 min, pas une minute de plus. Plus léger que les deux autres : c'est le format « deux carrés avec un café » plutôt que la collation qui remplace un repas.
ingredients:
- 150 | g | flocons d'avoine | epicerie
- 2 |  | bananes très mûres écrasées | fruits
- 60 | g | whey (concentrate de préférence) | epicerie
- 3 |  | blancs d'œufs | cremerie
-  |  | cannelle | epicerie
- 40 | g | pépites de chocolat | epicerie

## Avoine-cacahuète
type: prepa
macros: 230 | 12 | 9 | 24
astuce: Tout mélanger, tasser fermement dans un moule rectangulaire, 2 h au frigo, découper en 8. Le tassage est ce qui décide si ça fait une barre ou un tas de miettes.
ingredients:
- 200 | g | flocons d'avoine | epicerie
- 60 | g | whey isolate | epicerie
- 80 | g | purée de cacahuète | epicerie
- 60 | g | miel | epicerie
- 100 | ml | lait | cremerie
- 1 | pincée | sel | epicerie
- 30 | g | chocolat noir 70 % | epicerie

## Brownie aux haricots noirs
type: prepa
macros: 140 | 11 | 6 | 12
astuce: Oui, des haricots. Non, ça ne se goûte pas : ils remplacent la farine et le beurre et donnent la texture dense d'un vrai brownie. Mixer très longuement, jusqu'à ce qu'il ne reste aucun morceau. 175° pendant 22 min, cœur encore souple.
ingredients:
- 250 | g | haricots noirs cuits, rincés | epicerie
- 60 | g | whey chocolat | epicerie
- 3 |  | œufs | cremerie
- 40 | g | cacao non sucré | epicerie
- 60 | g | miel | epicerie
- 30 | g | purée d'amande | epicerie
- 1 |  | c. à c. de levure | epicerie
-  |  | pincée de sel | epicerie

## Cacao-cacahuète
type: prepa
macros: 660 | 61 | 17 | 66
astuce: La plus rassasiante des quatre. Celle des jours de séance jambes.
ingredients:
-  |  | Base + 10 g cacao non sucré | epicerie
- 15 | g | purée de cacahuète | epicerie
- 0.5 |  | banane en rondelles au moment de manger | fruits

## Cacao-noisette
type: prepa
macros: 465 | 44 | 22 | 24
astuce: Noisettes torréfiées 5 min à la poêle avant d'être concassées. Ça change complètement le résultat.
ingredients:
-  |  | Base + 10 g de cacao non sucré | epicerie
- 15 | g | noisettes concassées | epicerie
- 1 |  | c. à c. de miel | epicerie

## Café-chocolat
type: prepa
macros: 610 | 58 | 12 | 70
astuce: Le café remplace une partie du lait. La pincée de sel n'est pas facultative : c'est elle qui fait ressortir le chocolat.
ingredients:
-  |  | Base + 1 expresso refroidi | epicerie
- 15 | g | pépites de chocolat noir | epicerie
-  |  | Pincée de sel | epicerie

## Cheesecake au fromage blanc
type: prepa
macros: 150 | 18 | 4 | 11
astuce: 160° pendant 40 min, puis four éteint, porte entrouverte, 1 h. C'est ce refroidissement lent qui évite que le dessus se fende. Une nuit au frigo avant de servir. Le meilleur rapport protéines/plaisir de toute la liste.
ingredients:
- 500 | g | fromage blanc 0 % bien égoutté | cremerie
- 60 | g | whey vanille | epicerie
- 3 |  | œufs | cremerie
- 30 | g | maïzena | epicerie
- 40 | g | miel | epicerie
-  |  | zeste d'1 citron | fruits

## Citron-myrtille
type: prepa
macros: 480 | 58 | 13 | 32
astuce: 58 g de protéines : le meilleur ratio de la section. Monté en couches dans un bocal transparent, c'est aussi le plus agréable à manger.
ingredients:
-  |  | Base + zeste et jus d'un citron | fruits
- 150 | g | skyr en couche intermédiaire | cremerie
- 100 | g | myrtilles au-dessus | fruits

## Coco-mangue
type: prepa
macros: 465 | 41 | 18 | 34
astuce: Mangue surgelée en morceaux hors saison : moins chère et meilleure que la fraîche pas mûre.
ingredients:
-  |  | Base au lait de coco allégé | epicerie
- 100 | g | mangue en dés | fruits
- 10 | g | noix de coco râpée | epicerie

## Datte-amande
type: prepa
macros: 190 | 10 | 9 | 20
astuce: Mixer les dattes seules jusqu'à obtenir une pâte, puis ajouter le reste par à-coups. Si c'est trop sec, une cuillère d'eau — pas plus, ça part vite.
ingredients:
- 200 | g | dattes Medjool dénoyautées | epicerie
- 100 | g | amandes entières | epicerie
- 60 | g | whey vanille | epicerie
- 40 | g | flocons d'avoine | epicerie
- 1 | pincée | fleur de sel | epicerie

## Fruits rouges-vanille
type: prepa
macros: 595 | 58 | 8 | 74
astuce: Fruits surgelés mis la veille : ils dégèlent en colorant tout le bocal. Visuellement, c'est la plus réussie.
ingredients:
-  |  | Base (whey vanille) + 150 g fruits rouges surgelés | epicerie
-  |  | Zeste de citron | fruits

## Muffins myrtille-avoine
type: prepa
macros: 125 | 11 | 3 | 14
astuce: Myrtilles roulées dans une cuillère de farine avant incorporation : elles ne tombent plus au fond. 180° pendant 20 min. Se congèlent très bien à l'unité.
ingredients:
- 150 | g | flocons d'avoine mixés en farine | epicerie
- 60 | g | whey vanille | epicerie
- 250 | g | skyr | cremerie
- 3 |  | œufs | cremerie
- 1 | sachet | levure | epicerie
- 120 | g | myrtilles (surgelées OK) | fruits

## Pancakes protéinés
type: prepa
macros: 570 | 61 | 16 | 45
astuce: Feu doux et couvercle : à feu vif l'extérieur brûle avant que l'intérieur prenne. 61 g de protéines dans une assiette de pancakes — c'est un repas complet, pas une collation.
ingredients:
- 60 | g | flocons d'avoine mixés | epicerie
- 30 | g | whey | epicerie
- 200 | g | fromage blanc 0 % | cremerie
- 2 |  | œufs | cremerie
- 0.5 | sachet | levure | epicerie
-  |  | Cannelle | epicerie
- 20 | g | sirop d'érable | epicerie

## Pomme-cannelle
type: prepa
macros: 615 | 57 | 9 | 80
astuce: La pomme râpée rend du jus pendant la nuit : c'est ce qui donne la texture. Goût de tarte aux pommes froide, sans exagérer.
ingredients:
-  |  | Base + 1 pomme râpée avec la peau | fruits
- 1 |  | c. à c. de cannelle | epicerie
- 10 | g | noix concassées | epicerie
