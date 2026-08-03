# Utility types

## Partial<T>

Takes a type and makes all of its properties optional, so we can pass in objects that might
have missing fields. See `renderPost.ts`.

```typescript
type Post = {
    title: string;
    body: string;
    image_url: string;
};

const renderPost = (post: Partial<Post>): string =>
    `${post.title} - ${post.body} - ${post.image_url || "PLACE_HOLDER_IMAGE"}`;
```

## Pick<T, Keys>

Takes a type and keeps only the named properties, producing a smaller type. See
`renderSummaries.ts`, which only needs `title` and `summary`.

```typescript
type Minimal = Pick<Post, "title" | "summary">;
```

# Omit 

Creates a copy of a type but excludes specific keys, the opposite of Pick

```typescript
type NoBG = Omit<Post, "image_url">
```