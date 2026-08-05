import { isBoolean } from "../isBoolean";

// isBoolean — narrows `unknown` to `boolean` before use.
const describe = (x: unknown): string => {
    if (isBoolean(x)) return `boolean: ${x ? "true" : "false"}`;
    return `parameter ${x} is not a boolean`;
};

console.log(describe(true));
console.log(describe("nope"));
