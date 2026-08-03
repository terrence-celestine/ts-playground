type Filter = "string" | "number" | "object" | "boolean" | "undefined" | "function" | "bigint" | "symbol";
type TypeMap = {
    "string": string;
    "number": number;
    "object": object;
    "boolean": boolean;
    "undefined": undefined;
    "bigint": bigint;
    "symbol": symbol;
    "function": () => void;
}

export const filterArray = <Type, F extends Filter>(arg: Type[], filterType: F): Extract<Type, TypeMap[F]>[] => {
    type ResultType = Extract<Type, TypeMap[F]>
    const result: ResultType[] = [];

    for (const item of arg) {
        if (typeof item === filterType) result.push(item as ResultType);
    }
    return result;
}