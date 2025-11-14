# Risques et limitations

## Risques fonctionnels

- **Fiabilité de l'analyse** : Sans implémentation des extracteurs et règles (`front/src/lib/extractors.ts`, `front/src/lib/rules.ts`), l'application ne peut pas analyser les documents, rendant le score et les rapports inutiles. Risque élevé d'échec pour les utilisateurs finaux.
- **Précision des scores** : L'absence de normalisation (`front/src/lib/normalize.ts`) et de logique de scoring (`front/src/lib/scoring.ts`) peut entraîner des calculs erronés, compromettant la confiance dans la plateforme.
- **Gestion des erreurs** : Aucune gestion d'erreurs visible dans le code (ex. fichiers corrompus, formats non supportés), pouvant mener à des crashes ou des résultats incorrects.

## Risques techniques

- **Performance** : Extraction de texte de gros PDF ou OCR d'images peut être lente côté client, surtout sans optimisation des workers (`front/src/workers/`). Risque de blocage de l'UI.
- **Sécurité des données** : Stockage local (`localStorage`/`IndexedDB`) expose les documents sensibles à la compromission du navigateur. Pas de chiffrement implémenté malgré mention dans specs.
- **Compatibilité navigateurs** : Dépendance à des APIs modernes (File API, Web Workers) sans fallbacks, limitant la compatibilité (ex. IE non supporté).
- **LLM optionnel** : Utilisation d'OpenAI côté client nécessite une clé utilisateur, avec risques de fuite accidentelle ou de coûts imprévus pour l'utilisateur.

## Risques performance

- **Scalabilité** : Architecture 100% front-end limite à un utilisateur par session ; pas de partage ou collaboration possible sans backend.
- **Volume de données** : Stockage local limité par le quota du navigateur (~50-100MB), insuffisant pour de gros volumes de documents.
- **Temps de réponse** : Analyses complexes (avec LLM) peuvent être lentes sur des appareils modestes, dégradant l'UX.

## Limitations

- **Pas de backend** : Impossibilité de synchronisation, sauvegarde cloud, ou gestion multi-utilisateurs réelle, contrairement aux besoins des personas (ex. équipe CEE).
- **Fonctionnalités manquantes** : OCR, normalisation, rapports PDF, statistiques avancées non implémentées, réduisant la valeur ajoutée.
- **Tests absents** : Aucun test visible (`package.json` n'inclut pas de scripts de test), augmentant le risque de bugs en production.
- **Documentation technique** : README limité, pas de docs API ou architecture détaillée.
- **Maintenance** : Dépendances récentes (React 19, Tailwind 4) peuvent introduire des breaking changes fréquents.</content>
  <parameter name="filePath">d:\_\_\_GIACV1\controldoc\retro-ingenierie\07-risques-et-limitations.md
