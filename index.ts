import { filterArray } from "./utils/filterArray";
import { identity } from "./utils/identify";

const a = identity("hello");
const b = identity(9);
console.log(a);
console.log(b);
console.log(filterArray(["foo", 9, "bar"], "string"))
console.log(filterArray(["foo", 9, "bar"], "number"))