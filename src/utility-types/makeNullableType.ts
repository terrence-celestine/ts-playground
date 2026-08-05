type ReadOnly<T> = {
    readonly [K in keyof T]: T[K]
}

type CustomNullable<T> = {
    [K in keyof T]: T[K] | null
}

interface Pokemon {
    id: number;
    type: string;
    name: string;
    legendary: boolean;
}

type NullPokemon = CustomNullable<Pokemon>;
type ReadOnlyPokemon = ReadOnly<Pokemon>;

const pikachu: NullPokemon = {
    name: "pikachu",
    type: null,
    id: null,
    legendary: null
}

let bulbasaur: ReadOnlyPokemon = {
    name: "bulbasaur",
    type: "grass",
    id: 3,
    legendary: false
}