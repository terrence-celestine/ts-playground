# Generic types

Generics let a function or type work over a type variable supplied by the caller, so the
return type tracks the input. See `identity.ts` (`identity<Type>(arg: Type): Type`) and
`filterArray.ts` (which combines generics with `Extract` and a mapped `TypeMap`).

## Extract

Extract filters and returns matches from a union; if no matches are found it returns `never`.

```typescript
type Foods = "apple" | "banana" | "meat";

type MeatsOnly = Extract<Foods, "meat">;          // "meat"            (one match)
type FruitsOnly = Extract<Foods, "apple" | "banana">; // "apple" | "banana" (sub-union)
```

## TypeMap

TypeMap is a type whose keys each map to a type — e.g. `type TypeMap = { "string": string }`,
where the key `"string"` points to the type `string`. `filterArray` uses this to turn the
runtime `typeof` string into the corresponding compile-time type.

```typescript
type TypeMap = {
  string: string;
  number: number;
  object: object;
  boolean: boolean;
};

type A = TypeMap["string"]; // string   ← the TYPE, not the literal "string"
type B = TypeMap["number"]; // number
```

## Type erasure

TypeScript removes the types once a script is compiled down to JavaScript. That's why runtime
checks like `typeof item === filterType` are needed inside `filterArray` — the types alone
can't filter at runtime.
