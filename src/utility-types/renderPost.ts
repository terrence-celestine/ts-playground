import type { Post } from "../shared/post"

export const renderPost = (post: Partial<Post>): string => {
    return `${post.title} - ${post.body} - ${post.image_url || "PLACE_HOLDER_IMAGE"}`
}

