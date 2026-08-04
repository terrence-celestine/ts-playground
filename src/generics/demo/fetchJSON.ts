import { fetchJSON } from "../fetchJSON";

// fetchJSON with union types, to keep track of the flow of the data as the state changes.

type Result = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
type Idle = { status: "idle" };
type Loading = { status: "loading" };
type Success = { status: "success"; data: Result };
type FetchError = { status: "error"; error: Error };

type State = Idle | Loading | Success | FetchError;

const renderPost = (state: State): string | Result => {
    switch (state.status) {
        case "error":
            return state.error.message;
        case "idle":
            return "render post idle";
        case "loading":
            return "render post loading";
        case "success":
            return state.data;
        default: {
            const _exhaustive: never = state;
            return _exhaustive;
        }
    }
};

const main = async () => {
    let state: State = { status: "idle" };
    console.log(renderPost(state));

    state = { status: "loading" };
    console.log(renderPost(state));

    const result = await fetchJSON<Result>("https://jsonplaceholder.typicode.com/posts/1");

    state = result;
    console.log(renderPost(state));
};

console.log("--------FETCH JSON with exhaustive checks------");
main();
