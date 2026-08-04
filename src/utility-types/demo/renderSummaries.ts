import { renderSummaries } from "../renderSummaries";

// Pick<Post, "title" | "summary"> — only the two fields we need.
const summary = renderSummaries({ title: "foo", summary: "a short summary" });
console.log(summary);
