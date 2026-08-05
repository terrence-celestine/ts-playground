/**
 * Mapped types — build a new type by transforming every key of an existing one.
 * Shape:  { [K in keyof T]: <something using T[K]> }
 *   - `[K in keyof T]` iterates each property key of T
 *   - the right-hand side rewrites that property's type
 *
 * ReadOnly<T> and CustomNullable<T> are hand-rolled versions of the built-in
 * `Readonly<T>` and a nullable variant — written by hand to see the mechanism.
 *
 * Verified (tsc --strict):
 *   - readonly bites: reassigning a key is a compile error
 *   - nullable is precise: allows `null` per field, still rejects wrong types
 *     (e.g. id must be `number | null`, not a string)
 */

// Add a `readonly` modifier to every property.
type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};

// Widen every property to `original type | null` — keeps the type, adds null.
type CustomNullable<T> = {
    [K in keyof T]: T[K] | null;
};

interface Pokemon {
    id: number;
    type: string;
    name: string;
    legendary: boolean;
}

type NullPokemon = CustomNullable<Pokemon>;
// { id: number | null; type: string | null; name: string | null; legendary: boolean | null }

type ReadOnlyPokemon = ReadOnly<Pokemon>;
// { readonly id: number; readonly type: string; ... }

// CustomNullable — every field may be null (but must still match the base type otherwise).
const pikachu: NullPokemon = {
    name: "pikachu",
    type: null,
    id: null,
    legendary: null,
};

// ReadOnly — every field is frozen at compile time; `bulbasaur.id = 99` would not compile.
const bulbasaur: ReadOnlyPokemon = {
    name: "bulbasaur",
    type: "grass",
    id: 3,
    legendary: false,
};

console.log(pikachu);
console.log(bulbasaur);

export type { ReadOnly, CustomNullable, Pokemon, NullPokemon, ReadOnlyPokemon };