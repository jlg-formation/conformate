# Architecture fonctionnelle

L'architecture fonctionnelle de ControlDoc est organisée autour des parcours utilisateurs définis dans les spécifications, avec un focus sur le persona principal (Antoine Lefèvre, responsable conformité CEE). Les fonctionnalités sont regroupées par thèmes, basées sur les user stories et les specs fonctionnelles.

## Gestion documentaire et projets

- **Création et gestion de projets** : Permet de regrouper des documents pour une analyse groupée. Fichiers principaux : `front/src/pages/app/ImportDocumentsPage.tsx`, `front/src/features/projects/`.
- **Téléversement de documents** : Import de fichiers PDF, DOCX, XLSX avec drag & drop. Fichiers principaux : `front/src/components/ui/FileUploadZone.tsx`, `front/src/pages/app/ImportDocumentsPage.tsx`.
- **Sélection de checklist** : Choix manuel ou automatique d'une checklist de conformité (ex. fiches CEE). Fichiers principaux : `front/src/pages/app/SelectChecklistPage.tsx`, `front/src/features/checklists/`.

## Analyse automatique

- **Extraction de contenu** : Analyse des documents pour extraire texte, données et métadonnées. Fichiers principaux : `front/src/lib/extractors.ts` (vide), `front/src/workers/pdf.worker.ts`, `front/src/workers/ocr.worker.ts`.
- **Vérification par règles** : Comparaison du contenu aux critères de la checklist (présence, regex, bornes numériques). Fichiers principaux : `front/src/lib/rules.ts` (vide), `front/src/lib/normalize.ts` (vide).
- **Calcul du score** : Score global pondéré de 0 à 100, avec sous-scores par catégorie. Fichiers principaux : `front/src/lib/scoring.ts` (vide), `front/src/pages/app/AnalysisResultsPage.tsx`.
- **Intégration LLM optionnelle** : Utilisation d'OpenAI pour l'analyse sémantique avancée. Fichiers principaux : `front/src/lib/llm.ts` (vide).

## Visualisation et rapports

- **Affichage des résultats** : Score global, critères validés/non, filtres et graphiques (jauge, radar). Fichiers principaux : `front/src/pages/app/AnalysisResultsPage.tsx`, `front/src/components/ui/Stepper.tsx`.
- **Génération de rapports** : Création de rapports PDF avec synthèse et détails. Fichiers principaux : `front/src/pages/app/GenerateReportPage.tsx`, `front/src/features/reports/`.
- **Historique et statistiques** : Archivage des analyses, classements (ex. artisans par conformité moyenne). Fichiers principaux : `front/src/pages/app/AnalysesHistoryPage.tsx`, `front/src/pages/app/GlobalStatsPage.tsx`.

## Gestion utilisateurs et administration

- **Authentification** : Connexion/inscription basique (pages publiques). Fichiers principaux : `front/src/pages/public/LoginPage.tsx`, `front/src/pages/public/SignupPage.tsx`.
- **Gestion utilisateurs** : CRUD pour administrateurs. Fichiers principaux : `front/src/pages/app/UserManagementPage.tsx`.
- **Gestion checklists** : Édition des checklists et pondérations. Fichiers principaux : `front/src/pages/app/ChecklistManagementPage.tsx`.
- **Paramètres et profil** : Réglages utilisateur (seuils, notifications). Fichiers principaux : `front/src/pages/app/SettingsPage.tsx`, `front/src/pages/app/ProfilePage.tsx`.

## Support et aide

- **Centre d'aide** : FAQ et guides pour utilisateurs connectés. Fichiers principaux : `front/src/pages/app/HelpCenterPage.tsx`.
- **Pages publiques** : À propos, confidentialité, conditions. Fichiers principaux : `front/src/pages/public/AboutPage.tsx`, etc.</content>
  <parameter name="filePath">d:\_\_\_GIACV1\controldoc\retro-ingenierie\03-architecture-fonctionnelle.md
