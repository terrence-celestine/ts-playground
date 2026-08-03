interface ApiError {
    message: string;
    status?: number;
}

// Define response structure
interface ApiResponse<T> {
    data?: T;
    error?: ApiError;
}

export const useFetch = async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            return {
                error: {
                    message: `HTTP error: ${res.statusText}`,
                    status: res.status,
                },
            };
        }
        const data: T = await res.json();
        return { data }
    } catch (err) {
        return {
            error: {
                message: err instanceof Error ? err.message : 'Unknown Error'
            }
        }
    }
}