const groupBy = <T, K extends keyof T>(items: T[], key: K): Record<string, T[]> => {
    const result: Record<string, T[]> = {};
    for (const item of items) {
        const found = String(item[key]);
        if (!result[found]) {
            result[found] = [item]
        } else {
            result[found] = [...result[found], item]
        }
    }
    return result;
}

export default groupBy