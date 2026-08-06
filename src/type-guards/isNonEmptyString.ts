export const isNonEmptyString = (x: unknown): x is string => {
    if (typeof x !== "string" || x.length === 0) return false;
    return true;
}