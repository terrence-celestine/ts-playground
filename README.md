# ts-playground

A learning journal for TypeScript. Each folder under `src/` is one concept, with its runnable
examples, a `demo/` folder (one file per idea), and `notes.md` co-located.

```
src/
├── shared/          # types shared across lessons (e.g. Post)
├── generics/        # identity, filterArray, useFetch, fetchJSON
│   └── demo/        # one runnable file per idea (identity, extract, returnType, …)
└── utility-types/   # renderPost, renderSummaries
    └── demo/        # one runnable file per idea (partial, pick)
```

## Running the demos

```bash
npm install
```

Run a whole topic at once:

```bash
npm run generics          # runs every generics demo
npm run utility-types     # runs every utility-types demo
```

Or run a single demo from the CLI:

```bash
npm run generics:identity      # src/generics/demo/identity.ts
npm run generics:filter-array
npm run generics:use-fetch
npm run generics:extract
npm run generics:return-type
npm run generics:fetch-json
npm run utility-types:partial  # src/utility-types/demo/renderPost.ts
npm run utility-types:pick     # src/utility-types/demo/renderSummaries.ts
```

Type-check everything:

```bash
npm run typecheck
```

Add a new idea by dropping a self-executing file into the topic's `demo/` folder, importing it
from that folder's `index.ts`, and adding a `topic:name` script to `package.json`.
