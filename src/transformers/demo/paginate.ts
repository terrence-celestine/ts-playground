import paginate from "../paginate";

interface Blog {
    id: number;
    title: string;
    body: string;
}

const allPosts: Blog[] = [{ id: 0, title: "Foo", body: "bar" }, { id: 1, title: "Baz", body: "Goo" }, { id: 0, title: "Foo", body: "bar" }, { id: 1, title: "Baz", body: "Goo" }, { id: 0, title: "Foo", body: "bar" }, { id: 1, title: "Baz", body: "Goo" }, { id: 0, title: "Foo", body: "bar" }, { id: 1, title: "Baz", body: "Goo" }]

console.log(paginate(allPosts, 1, 4))