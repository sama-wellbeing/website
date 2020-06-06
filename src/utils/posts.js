export const buildPostSlug = (post) => {
  const slug = post.slug;
  const cornerStone = post.contentfulparent.contentfulparent.slug;
  const category = post.contentfulparent.slug

  return `/${cornerStone}/${category}/${slug}/`
};

export const getCornerStoneContent = (post) => {
  return post.contentfulparent.contentfulparent;
}