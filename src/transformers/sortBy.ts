type ComparableKeys<T> = {
    [K in keyof T]: T[K] extends number | string ? K : never
}

const sortBy = <T, K extends keyof T & ComparableKeys<T>>(items: T[], sort_key: K): T[] => {
    const copy = [...items]
    // check the value of the sort_key before we pick the sort type
    copy.sort((a, b) => {
        const av = a[sort_key];
        const bv = a[sort_key];
        return typeof av === "number" && typeof bv === "number" ? av - bv : String(av).localeCompare(String(bv));
    });
    return copy;
}

export default sortBy