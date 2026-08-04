import { identity } from "../identity";

// identity — takes a value and returns the same value/type.
const a = identity("hello");
const b = identity(9);
console.log(a);
console.log(b);
