// Mapped types — build a new type by transforming each key of an existing one.
// ReadOnly<T> and CustomNullable<T> below are hand-rolled versions of built-in helpers.

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};

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
type ReadOnlyPokemon = ReadOnly<Pokemon>;

// CustomNullable — every field may be null.
const pikachu: NullPokemon = {
    name: "pikachu",
    type: null,
    id: null,
    legendary: null,
};

// ReadOnly — every field is frozen at compile time (reassigning a key is a type error).
const bulbasaur: ReadOnlyPokemon = {
    name: "bulbasaur",
    type: "grass",
    id: 3,
    legendary: false,
};

console.log(pikachu);
console.log(bulbasaur);
