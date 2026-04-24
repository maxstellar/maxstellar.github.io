---
title: hello world
date: 2026-04-23
---

hey! this is my first blog post. welcome to the new blog section of the site.

## how this works

i write posts as markdown files in the `posts/` folder, push to github, and a github action builds them into html pages that live in `blog/`. it all goes up automatically.

images go in `posts/images/` and get copied over during the build. reference them in a post like:

```md
![alt text](./images/your-image.png)
```

## supported formatting

- **bold** and *italic*
- [links](https://github.com/maxstellar)
- `inline code` and code blocks:

```js
const stars = 130;
for (let i = 0; i < stars; i++) twinkle();
```

- blockquotes:

> "everything is figureoutable."

- headings, ordered/unordered lists, horizontal rules, all the usual markdown.

## drafts

add `draft: true` to a post's frontmatter and it'll be skipped by the build until you're ready.

---

that's it for now. back to making stuff.
