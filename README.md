# Campus+ — prototype front-end

Maquette interactive de Campus+ (Next.js 15, React 19, TypeScript, Tailwind CSS 3).
Toutes les données sont fictives (`lib/data.ts`) : pas de base de données, de compte, de paiement ni de message réel.

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # vérification de production
```

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil : recherche à onglets, 4 pôles, parcours, actualités |
| `/orientation` | Formations : recherche, filtres, détails dépliables |
| `/demarches`, `/demarches/[slug]` | Fiches : étapes, liste de contrôle des pièces, PDF simulé |
| `/services`, `/services/[id]` | Marketplace : filtres, détail, contact simulé |
| `/stages`, `/stages/[id]` | Offres : filtres, détail, candidature simulée |
| `/communaute` | Forum : filtres, création de sujet (en mémoire) |
| `/profil` | Profil étudiant : onglets Présentation, Compétences, Réalisations, Avis |

## Charte

- Primaire `#0A66F5`, texte `#0B1F3A`, fond `#F7F9FC` (voir `tailwind.config.ts`)
- Titres : Plus Jakarta Sans, texte : Inter (paquets `@fontsource`, hébergés avec le site)
- Visuels : motifs génératifs (`components/CoverArt.tsx`) à remplacer par de vraies photos

## Notes

- TypeScript est volontairement fixé en version 5 : la version 7 casse l'alias `@/` avec Next 15.
- Pour passer en MVP, remplacer `lib/data.ts` par des requêtes Supabase (mêmes types).
- Déploiement : importer le dépôt sur Vercel, sans configuration particulière.
