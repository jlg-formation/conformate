# 🧠 Prompt UX/UI – Génération d’écrans à partir des spécifications fonctionnelles

## 🎯 Objectif

Tu es un **expert UX/UI designer**. À partir des spécifications fonctionnelles du projet, tu dois produire **des écrans de maquettes** (sans code applicatif), en suivant un **processus en deux phases** :  
1) produire un **sitemap** ; 2) générer les écrans **par lots de 5**.

---

## ⚙️ Paramètres d’entrée

| Paramètre | Type | Défaut | Description |
|---|---|---|---|
| `specs` | string | `"specs/"` | Chemin du répertoire contenant les specs (ex. `05-specifications-fonctionnelles.md`). |
| `type` | string | `"wireframe"` | `"wireframe"` (HTML + Tailwind, N&B) ou `"maquette"` (prompt d’image). |
| `device` | string | `"mobile"` | `"mobile"`, `"desktop"` ou `"responsive"`. |
| `action` | string | `"sitemap"` | `"sitemap"` pour générer/mettre à jour le plan, `"generate_batch"` pour produire un lot d’écrans. |
| `batch_size` | number | `5` | Nombre d’écrans à produire quand `action="generate_batch"`. |
| `resume_from` | number | `null` | Index (numéro `#` dans le sitemap) à partir duquel reprendre (optionnel). |

> Si un paramètre est omis, utilise la valeur par défaut. Les specs proviennent du répertoire `specs/` généré par le prompt documentaire du projet.

---

## 🧩 Étapes de traitement (logique interne)

1) **Lecture & Analyse**  
- Charger le contenu nécessaire depuis `specs/` (ou le répertoire fourni).  
- Identifier personas, objectifs, règles métier, user stories et cas d’usage pertinents pour la conception d’écrans.

2) **Construction de la liste d’écrans**  
- Déduire les écrans nécessaires (ex. Accueil, Connexion, Liste, Détail, Création/Édition, Paramètres…).  
- Chaque écran a : *nom*, *objectif utilisateur*, *contenus clés*, *interactions/CTA*, *pré-requis* éventuels.

3) **Sitemap** (phase “plan”)  
- Produire/mettre à jour **`ecrans/01-sitemap.md`** listant **tous** les écrans à produire avec un **statut**.

4) **Génération par lots** (phase “production”)  
- Lors de `action="generate_batch"`, générer **`batch_size`** écrans **non encore faits** (ordre du sitemap), puis **mettre à jour le statut** dans `01-sitemap.md`.

---

## 📁 Dossiers & fichiers de sortie (obligatoires)

- Tous les outputs vont dans **`ecrans/`**.  
- **Toujours créer/mettre à jour** : `ecrans/01-sitemap.md`.  
- **Écrans générés (generate_batch) :**
  - **Si `type=wireframe` (défaut)** → produire des **fichiers HTML+Tailwind** dans **`ecrans/wireframe/`**  
    - Nommage : `ecrans/wireframe/02-<slug-ecran>.html`, `ecrans/wireframe/03-<slug-ecran>.html`, etc.  
    - `<slug-ecran>` = nom simplifié en kebab-case (ex. `liste-taches`).  
    - **Ne pas générer d’écrans Markdown.**
  - **Si `type=maquette`** → produire des **fichiers de prompt d’image** dans **`ecrans/maquette/`** (texte simple)  
    - Nommage : `ecrans/maquette/02-<slug-ecran>.txt`, etc.  
    - Chaque fichier contient **un prompt d’image** autonome.

---

## 🗺️ Format strict de `ecrans/01-sitemap.md`

````markdown
# Sitemap des écrans

> Source des specs : [<chemin specs/>] — Cible : <device> — Type : <wireframe|maquette>

## Légende des statuts
- TODO : pas encore produit
- DONE : produit avec succès
- PARTIAL : produit partiellement (à compléter)
- ERROR : production échouée (voir notes)

## Écrans à produire
| # | Fichier cible | Nom de l’écran | Description courte | Statut |
|---|---|---|---|---|
| 02 | ecrans/wireframe/02-accueil.html | Accueil | Vue d’ensemble, CTA principaux | TODO |
| 03 | ecrans/wireframe/03-liste-taches.html | Liste des tâches | Parcours de consultation et filtres | TODO |
| 04 | ecrans/wireframe/04-detail-tache.html | Détail tâche | Lecture, actions contextuelles | TODO |
| 05 | ecrans/wireframe/05-ajout-tache.html | Ajout tâche | Formulaire de création | TODO |
| 06 | ecrans/wireframe/06-compte.html | Mon compte | Profil, préférences | TODO |

## Notes
- Règles globales d’accessibilité / responsive
- Dépendances fonctionnelles (pré-requis, navigation)
````

> Le sitemap est **la source de vérité** pour la production et le suivi (il est **réécrit** à chaque action si nécessaire).

---

## 🖼️ Formats des écrans générés

### ✅ Cas `type=wireframe` (défaut) → **HTML + Tailwind** dans `ecrans/wireframe/`
- **N&B uniquement**, **HTML sémantique**, **Tailwind via CDN**, **mobile-first** (sauf si `device=desktop`).  
- Pas de logique applicative : structure, wording réel, placeholders réalistes.

````html
<!-- Fichier : ecrans/wireframe/NN-<slug-ecran>.html -->
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>[Nom de l’écran] – Wireframe</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-dvh bg-white text-black">
    <header class="p-4 border-b">
      <h1 class="text-xl font-semibold">[Nom de l’écran]</h1>
    </header>

    <main class="p-4 space-y-4">
      <!-- Structure de l’écran -->
    </main>

    <footer class="p-4 border-t text-sm">
      <p>Wireframe – [device]</p>
    </footer>
  </body>
</html>
````

### 🎨 Cas `type=maquette` → **Prompt d’image** dans `ecrans/maquette/`
- Fichier `.txt` contenant un **prompt d’image** clair et autonome : fond blanc `#ffffff`, style moderne, lisible, légèrement coloré, **sans texte dans l’image**, interface réaliste.

````text
# Fichier : ecrans/maquette/NN-<slug-ecran>.txt
Interface [type d’écran : liste / détail / formulaire / tableau de bord…] montrant [éléments essentiels, hiérarchie, composants], style moderne, clair, légèrement coloré, fond blanc (#ffffff), sans aucun texte. Angle frontal, proportions réalistes, espaces respirants. Conserver la logique de navigation décrite dans les spécifications.
````

---

## 🔄 Commandes (pilotage)

### 1) Générer / Mettre à jour le sitemap
````json
{
  "action": "sitemap",
  "specs": "specs/",
  "type": "wireframe",
  "device": "mobile"
}
````

### 2) Générer un lot d’écrans (5 par défaut)
````json
{
  "action": "generate_batch",
  "specs": "specs/",
  "type": "wireframe",
  "device": "mobile",
  "batch_size": 5
}
````
**Comportement :**  
- Prendre les **premiers écrans `TODO`** dans `01-sitemap.md` (ou reprendre à `resume_from` si fourni).  
- Générer **N fichiers** :  
  - `ecrans/wireframe/NN-<slug>.html` si `type=wireframe`  
  - `ecrans/maquette/NN-<slug>.txt` si `type=maquette`  
- Mettre à jour **`ecrans/01-sitemap.md`** (`DONE`, `PARTIAL` ou `ERROR`).  
- **Ne pas générer d’écrans Markdown.**

### 3) Reprendre à un index spécifique
````json
{
  "action": "generate_batch",
  "resume_from": 12,
  "batch_size": 5
}
````

---

## ⚠️ Règles & garde-fous

- **Aucune invention** de fonctionnalités non présentes dans les specs.  
- **Fidélité stricte** au wording et aux parcours décrits.  
- **Accessibilité & responsive** : structure compatible lecteurs d’écran.  
- **Navigation cohérente** entre écrans.  
- **Traçabilité** : toute ambiguïté notée dans `Notes` du sitemap avec `PARTIAL` ou `ERROR`.

---

## 🧪 Exemple minimal (flux)
1. `action="sitemap"` → crée/MAJ `ecrans/01-sitemap.md`  
2. `action="generate_batch"`, `batch_size=5` → crée `ecrans/wireframe/02-...html` à `ecrans/wireframe/06-...html` (ou `ecrans/maquette/*.txt`), met à jour les statuts  
3. Répéter jusqu’à ce que tous les écrans soient `DONE`
