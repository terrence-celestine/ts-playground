interface PaginationResult<T> {
    items: T[];
    page: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
}

const paginate = <T>(items: T[], pageNumber: number, pageSize: number): PaginationResult<T> => {
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;
    const data = items.slice(start, end)
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / pageSize)
    const hasNext = pageNumber < totalPages;
    const hasPrev = pageNumber > 1;
    return {
        items: data,
        page: pageNumber,
        totalItems,
        totalPages,
        hasNext,
        hasPrev
    }
}

export default paginate