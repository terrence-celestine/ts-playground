import { useFetch } from "../useFetch";

// useFetch — a typed fetch wrapper that returns { data } | { error }.
useFetch("https://jsonplaceholder.typicode.com/users/1/albums").then((result) => {
    console.log(result.data);
});
