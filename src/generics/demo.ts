import { filterArray } from "./filterArray";
import { identity } from "./identity";
import { useFetch } from "./useFetch";

// identity — takes a value and returns the same value/type.
const a = identity("hello");
const b = identity(9);
console.log(a);
console.log(b);

// filterArray — takes an array + a type name and returns only the matching values.
console.log(filterArray(["foo", 9, "bar"], "string"));
console.log(filterArray(["foo", 9, "bar"], "number"));

// useFetch — a typed fetch wrapper that returns { data } | { error }.
useFetch("https://jsonplaceholder.typicode.com/users/1/albums").then((result) => {
    console.log(result.data);
});

// Extract<Union, Members> — narrows a union to the members you ask for.
type Foods = "apple" | "banana" | "meat";

type MeatsOnly = Extract<Foods, "meat">;
type FruitsOnly = Extract<Foods, "apple" | "banana">;

const meat: MeatsOnly = "meat";
const fruit: FruitsOnly = "apple";

console.log(meat);
console.log(fruit);


// type Albums - creates an awaited type that we can use for our useFetch response type.
const getUser = () => {
    return { id: 1, name: "Terrence", age: 37 };
}

type User = ReturnType<typeof getUser>;

const Tori: User = { id: 2, name: "Tori", age: 30 }


console.log(Tori);