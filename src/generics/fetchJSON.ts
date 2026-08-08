type FetchState<T> =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: T }
    | { status: 'error'; error: Error };

export const fetchJSON = async <T>(url: string): Promise<FetchState<T>> => {
    let state: FetchState<T> = { status: 'loading' };
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network responded with an error');
        const data: T = await response.json();
        return { status: 'success', data }
    } catch (error) {
        return {
            status: 'error',
            error: error instanceof Error ? error : new Error(String(error)),
        };
    }
}