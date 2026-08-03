type Filter = "string" | "number" | "object" | "boolean";
type TypeMap = {
    "string": string;
    "number": number;
    "object": object;
    "boolean": boolean;
}

export const filterArray = <Type, F extends Filter>(arg: Type[], filterType: F): Extract<Type, TypeMap[F]>[] => {
    const result: Extract<Type, TypeMap[F]>[] = [];

    for (const item of arg) {
        if (typeof item === filterType) result.push(item as Extract<Type, TypeMap[F]>);
    }
    return result;
}