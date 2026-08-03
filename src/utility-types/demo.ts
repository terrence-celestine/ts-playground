import { renderPost } from "./renderPost";
import { renderSummaries } from "./renderSummaries";

// Partial<Post> — every field optional, so a partial object is accepted.
const post = renderPost({ title: "foo", body: "bar" });
console.log(post);

// Pick<Post, "title" | "summary"> — only the two fields we need.
const summary = renderSummaries({ title: "foo", summary: "a short summary" });
console.log(summary);
