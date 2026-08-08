export const isObject = (x: unknown): x is Record<string, unknown> => {
    if (typeof x === "object" && x === null) return false;
    return true
}