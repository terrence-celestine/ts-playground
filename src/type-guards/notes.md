# Type guards

A type guard is a function returning a type predicate (`x is Type`). When it returns `true`,
TypeScript *narrows* the value to that type in the calling scope — so `unknown` (or a union)
becomes something you can safely use.

```typescript
const isString = (x: unknown): x is string => typeof x === "string";

const shout = (x: unknown): string =>
    isString(x) ? x.toUpperCase() : `parameter ${x} is not a string`;
//               ^ x is `string` here, so `.toUpperCase()` type-checks
```

## Primitive guards

`isString.ts` and `isBoolean.ts` wrap a `typeof` check. They narrow `unknown` down to a single
primitive.

## Discriminated-union guards

`isAdmin.ts` narrows a `User | Admin` union by its `role` discriminant (`x is Admin`). See the
shared `User`/`Admin` types in `../shared/user.ts`.

## Object-shape guards

`isCreateUserPayload.ts` validates an arbitrary `unknown` value (like a parsed request body)
field by field before trusting it as a `CreateUserPayload`. This is the pattern for validating
data crossing a trust boundary — narrow first, then use.
