# ts-playground

A learning journal for TypeScript. Each folder under `src/` is one concept, with its runnable
examples, a `demo/` folder (one file per idea), and `notes.md` co-located.

```
src/
├── shared/          # types shared across lessons (e.g. Post, User/Admin)
├── generics/        # identity, filterArray, useFetch, fetchJSON
│   └── demo/        # one runnable file per idea (identity, extract, returnType, …)
├── type-guards/     # isString, isBoolean, isAdmin, isCreateUserPayload
│   └── demo/        # one runnable file per idea (string, boolean, admin, payload)
└── utility-types/   # renderPost, renderSummaries
    └── demo/        # one runnable file per idea (partial, pick, mapped)
```

Every topic follows the same shape: implementation files at the topic root, a `demo/` folder
with one self-executing runnable per idea (plus an `index.ts` that runs them all), and a
co-located `notes.md`.

## Running the demos

```bash
npm install
```

Run a whole topic at once:

```bash
npm run generics          # runs every generics demo
npm run type-guards       # runs every type-guards demo
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
npm run type-guards:string     # src/type-guards/demo/isString.ts
npm run type-guards:boolean
npm run type-guards:admin
npm run type-guards:payload
npm run utility-types:partial  # src/utility-types/demo/renderPost.ts
npm run utility-types:pick     # src/utility-types/demo/renderSummaries.ts
npm run utility-types:mapped   # src/utility-types/demo/mappedTypes.ts
```

Type-check everything:

```bash
npm run typecheck
```

Add a new idea by dropping a self-executing file into the topic's `demo/` folder, importing it
from that folder's `index.ts`, and adding a `topic:name` script to `package.json`.
