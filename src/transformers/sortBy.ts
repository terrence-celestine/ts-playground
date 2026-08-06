const sortBy = <T, K extends keyof T>(items: T[], sort_key: K): T[] => {
    const copy = [...items]
    // check the value of the sort_key before we pick the sort type
    copy.sort((a, b) => {
        if (typeof a[sort_key] === "number" && typeof b[sort_key] === "number") {
            return a[sort_key] - b[sort_key]
        }
        return String(a[sort_key]).localeCompare(String(b[sort_key]))
    });
    return copy;
}

export default sortBy