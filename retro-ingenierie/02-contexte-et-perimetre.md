# Contexte et périmètre

Selon les spécifications fournies dans `specs/00-brief.md`, `specs/05-spec-fonctionnelles.md` et les autres fichiers de specs, la plateforme ControlDoc est une application web responsive et mobile-first destinée à évaluer automatiquement la conformité de documents par rapport à des checklists prédéfinies. Le périmètre principal se concentre sur le domaine des Certificats d'Économies d'Énergie (CEE) pour les devis de rénovation énergétique, avec des cas d'usage étendus à d'autres secteurs comme la formation (Qualiopi), l'architecture (DCE), l'audit RGPD ou les dossiers administratifs.

## Objectifs principaux

- **Objectiver les contrôles qualité** : Calculer un score de conformité de 0 à 100 basé sur des critères objectifs, réduisant les erreurs humaines.
- **Accélérer les processus** : Automatiser l'analyse de documents (PDF, DOCX, XLSX) pour gagner du temps dans les audits et validations.
- **Fournir des rapports traçables** : Générer des rapports détaillés (PDF/HTML) avec visualisation graphique (jauge, barres, radar) des écarts.
- **Améliorer la conformité réglementaire** : Supporter des checklists spécifiques (CEE, Qualiopi, etc.) avec pondération des critères.

## Périmètre fonctionnel

L'application couvre les étapes suivantes pour un utilisateur (ex. responsable conformité CEE) :

1. **Connexion et tableau de bord** : Vue d'ensemble des analyses en cours, statistiques globales, recherche par critères.
2. **Import de documents** : Téléversement de devis ou pièces justificatives, avec détection automatique du type de travaux/fiche CEE.
3. **Sélection de checklist** : Choix manuel ou automatique d'une checklist de conformité (ex. fiches CEE avec critères comme présence de RGE, performances thermiques).
4. **Analyse automatique** : Extraction de texte/données, vérification par règles (présence, regex, bornes), calcul de score pondéré, option LLM pour analyse sémantique.
5. **Résultats et visualisation** : Affichage du score global, liste des critères validés/non, filtres par type d'erreur.
6. **Rapport et archivage** : Génération de rapport PDF, archivage dans l'historique avec traçabilité.
7. **Suivi global** : Statistiques multi-artisans, classements par taux de conformité moyen, alertes sur seuils.

Le périmètre inclut également des fonctionnalités administratives (gestion utilisateurs, checklists) et de support (aide, paramètres), mais exclut explicitement tout backend : l'application fonctionne 100% côté client avec stockage local.

## Cas d'usage cibles

- **Fournisseurs d'énergie (CEE)** : Validation de devis de rénovation énergétique pour accorder des primes.
- **Organismes de formation** : Contrôle de conformité Qualiopi des dossiers pédagogiques.
- **Cabinets d'architecture** : Vérification de complétude des DCE pour marchés publics.
- **Consultants RGPD** : Évaluation de politiques de confidentialité.
- **Services RH/admin** : Contrôle de dossiers de candidature.

## Contraintes et limites du périmètre

- **Technologique** : Front-end uniquement (React/TypeScript/Vite), pas de serveur, données locales (IndexedDB/localStorage).
- **Sécurité** : Clés API utilisateur (ex. OpenAI) stockées localement, pas de chiffrement obligatoire.
- **Performance** : Analyses côté client, limitées par les ressources du navigateur.
- **Évolutivité** : Pas de multi-utilisateurs simultanés ou partage sans extension future.

Les spécifications sont détaillées dans `specs/05-spec-fonctionnelles.md` pour le persona principal (Antoine Lefèvre), avec des extensions dans `specs/04-user-stories.md` pour d'autres personas.</content>
<parameter name="filePath">d:\_\_\_GIACV1\controldoc\retro-ingenierie\01-resume-executif.md
