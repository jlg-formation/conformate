# Architecture technique

L'architecture technique de ControlDoc est une application web front-end monopage (SPA) développée avec React et TypeScript, utilisant Vite comme bundler. Elle suit une approche mobile-first avec Tailwind CSS pour le styling, et repose entièrement sur le navigateur client sans backend.

## Couches logicielles

- **Présentation (UI)** : Composants React réutilisables dans `front/src/components/ui/`, layouts dans `front/src/layouts/`, pages dans `front/src/pages/`.
- **Logique métier** : Fonctions d'extraction, normalisation, règles et scoring dans `front/src/lib/`. Workers pour les tâches lourdes (PDF, OCR) dans `front/src/workers/`.
- **Gestion d'état et stockage** : Stockage local via IndexedDB (localForage) dans `front/src/lib/storage.ts`, pas de state management global visible.
- **Routing** : React Router pour la navigation, avec layouts séparés pour public et app.

## Technologies et frameworks

- **Langage** : TypeScript pour la type-safety.
- **Framework UI** : React 19 avec hooks, pas de class components.
- **Styling** : Tailwind CSS 4 pour un design responsive et utilitaire.
- **Build** : Vite pour le développement rapide et le bundling.
- **Extraction de données** : pdfjs-dist (PDF), mammoth (DOCX), xlsx (Excel), tesseract.js (OCR).
- **Génération de rapports** : jsPDF pour les PDFs.
- **LLM** : OpenAI API côté client (optionnel).
- **Stockage** : localForage pour IndexedDB avec fallback localStorage.

## Patterns architecturaux

- **Composants modulaires** : Séparation en features (`analysis`, `checklists`, `projects`, `reports`) pour une organisation logique.
- **Workers pour la performance** : Utilisation de Web Workers pour les extractions sans bloquer l'UI.
- **Mobile-first** : Design adaptatif avec breakpoints Tailwind.
- **Pas de backend** : Tout est local, limitant la scalabilité mais simplifiant le déploiement.

## Services externes

- **OpenAI** : Pour l'analyse sémantique optionnelle, clé stockée localement.
- Aucun autre service tiers requis.

## Déploiement et environnement

- **Déploiement** : Statique sur GitHub Pages ou Netlify.
- **Environnement** : Navigateur moderne supportant ES2020+.
- **PWA** : Manifest et service worker prévus mais non implémentés.

L'architecture est simple et adaptée à une app front-only, mais manque de robustesse pour la production (pas de tests, gestion d'erreurs limitée).</content>
<parameter name="filePath">d:\_\_\_GIACV1\controldoc\retro-ingenierie\04-architecture-technique.md
