import { renderPost } from "../renderPost";

// Partial<Post> — every field optional, so a partial object is accepted.
const post = renderPost({ title: "foo", body: "bar" });
console.log(post);
