// Blog Post View
const postView = path.resolve('./src/templates/blog.js/post.js');
const postsView = path.resolve('./src/templates/blog.js/posts.js');

export const buildBlog = (createPage, data) => {
  // Blog related
  const PostsOverview = data.contentfulPosts;
  const Posts = PostsOverview.posts;

  createPage({
    path: `/${PostsOverview.slug}/`,
    component: postsView,
    context: {
      slug: PostsOverview.slug,
      id: PostsOverview.id
    },
  });

  Posts.forEach(post => {
    createPage({
      path: `/${PostsOverview.slug}/${post.slug}/`,
      component: postView,
      context: {
        slug: post.slug,
        id: post.id
      },
    })
  });
};
