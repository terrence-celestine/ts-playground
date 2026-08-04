import { filterArray } from "../filterArray";

// filterArray — takes an array + a type name and returns only the matching values.
console.log(filterArray(["foo", 9, "bar"], "string"));
console.log(filterArray(["foo", 9, "bar"], "number"));
