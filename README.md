# ts-playground

A learning journal for TypeScript. Each folder under `src/` is one concept, with its runnable
examples, a small `demo.ts`, and `notes.md` co-located.

```
src/
├── shared/          # types shared across lessons (e.g. Post)
├── generics/        # identity, filterArray, useFetch — generics, Extract, TypeMap
└── utility-types/   # renderPost, renderSummaries — Partial, Pick
```

## Running a lesson

```bash
npm install
npm run generics
npm run utility-types
npm run typecheck
```

Add a new topic by creating a folder under `src/`, dropping in the example + `demo.ts` +
`notes.md`, and adding a script to `package.json`.
