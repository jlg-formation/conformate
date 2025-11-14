# Backlog proposé

Le backlog est organisé en user stories inspirées des spécifications, priorisées par criticité (Haute/Moyenne/Basse) et échéance (Court/Moyen/Long terme). Chaque item inclut un titre, une description et une priorité.

## Court terme (1-3 mois) - Priorité Haute

1. **Implémenter l'extraction de texte PDF**  
   En tant qu'utilisateur, je veux téléverser un PDF et voir son contenu extrait automatiquement.  
   Priorité : Haute.  
   Description : Intégrer pdfjs-dist dans `front/src/lib/extractors.ts` pour extraire le texte des PDFs.

2. **Développer les règles de conformité de base**  
   En tant que responsable conformité, je veux que l'application vérifie la présence de mentions obligatoires dans les devis.  
   Priorité : Haute.  
   Description : Implémenter des règles simples (regex, présence) dans `front/src/lib/rules.ts` pour les fiches CEE.

3. **Calculer un score de conformité basique**  
   En tant qu'utilisateur, je veux obtenir un score numérique après analyse.  
   Priorité : Haute.  
   Description : Développer la logique de scoring dans `front/src/scoring.ts` avec pondérations.

4. **Ajouter le stockage local des analyses**  
   En tant qu'utilisateur, je veux retrouver mes analyses précédentes.  
   Priorité : Haute.  
   Description : Implémenter localForage dans `front/src/lib/storage.ts` pour persister les projets et résultats.

## Moyen terme (3-6 mois) - Priorité Moyenne

5. **Intégrer l'OCR pour les images**  
   En tant qu'utilisateur, je veux analyser des scans de documents.  
   Priorité : Moyenne.  
   Description : Compléter `front/src/workers/ocr.worker.ts` avec Tesseract.js.

6. **Normaliser les données extraites**  
   En tant que système, je veux convertir les unités et formats pour une comparaison fiable.  
   Priorité : Moyenne.  
   Description : Implémenter `front/src/lib/normalize.ts` pour dates, nombres, unités.

7. **Générer des rapports PDF**  
   En tant que responsable conformité, je veux télécharger un rapport structuré.  
   Priorité : Moyenne.  
   Description : Intégrer jsPDF dans `front/src/features/reports/` pour créer des PDFs.

8. **Ajouter des tests unitaires**  
   En tant que développeur, je veux valider les fonctions core avec des tests.  
   Priorité : Moyenne.  
   Description : Configurer Vitest et ajouter des tests pour les libs.

## Long terme (6+ mois) - Priorité Basse

9. **Intégrer un LLM pour l'analyse avancée**  
   En tant qu'utilisateur expert, je veux une analyse sémantique des documents.  
   Priorité : Basse.  
   Description : Implémenter `front/src/lib/llm.ts` avec OpenAI API, avec gestion sécurisée des clés.

10. **Ajouter un backend pour la collaboration**  
    En tant qu'équipe, je veux partager des analyses et gérer des utilisateurs centralisés.  
    Priorité : Basse.  
    Description : Développer une API (Node.js/Express) pour synchronisation et authentification.

11. **Implémenter la PWA et mode offline**  
    En tant qu'utilisateur mobile, je veux accéder à l'app hors ligne.  
    Priorité : Basse.  
    Description : Ajouter manifest, service worker et cache.

12. **Améliorer l'accessibilité et l'UX**  
    En tant qu'utilisateur, je veux une interface inclusive et intuitive.  
    Priorité : Basse.  
    Description : Audit Lighthouse et corrections (ARIA, contrastes, navigation clavier).

13. **Ajouter des statistiques avancées**  
    En tant qu'administrateur, je veux des tableaux de bord avec graphiques interactifs.  
    Priorité : Basse.  
    Description : Étendre `front/src/pages/app/GlobalStatsPage.tsx` avec D3.js ou Chart.js.

14. **Support multi-langues**  
     En tant qu'utilisateur international, je veux l'interface dans ma langue.  
     Priorité : Basse.  
     Description : Implémenter i18n avec react-i18next.</content>
    <parameter name="filePath">d:\_\_\_GIACV1\controldoc\retro-ingenierie\09-backlog.md
