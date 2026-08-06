import groupBy from "../groupBy";

const books = [{ id: 0, genre: "sci-fi", name: "Star wars" }, { id: 1, genre: "romance", name: "Twilight" }, { id: 2, genre: "romance", name: "Romeo and juliette" }]

console.log(groupBy(books, "genre"))