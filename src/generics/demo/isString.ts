import { isString } from "../type-guard/isString";

const shout = (x: unknown): string => {
    if (isString(x)) return x.toUpperCase();
    return `parameter ${x} is not a string`
}

console.log(shout("foo"))
console.log(shout(1))