import type { Post } from "../shared/post"

type Minimal = Pick<Post, "title" | "summary">;

export const renderSummaries = (post: Minimal): string => {
    return `${post.title} - ${post.summary}`
}
