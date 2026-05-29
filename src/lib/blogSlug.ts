export const createBlogSlug = (title?: string) => {
  if (!title) return "";

  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96)
    .replace(/-+$/g, "");
};

export const getBlogSlug = (post: { title?: string; slug?: { current?: string } | string; _id?: string }) => {
  const titleSlug = createBlogSlug(post?.title);
  if (titleSlug) return titleSlug;

  if (typeof post?.slug === "string") return post.slug;
  return post?.slug?.current || post?._id || "";
};
