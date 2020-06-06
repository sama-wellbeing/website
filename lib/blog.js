const path = require('path');
// Blog Post View
const postView = path.resolve('./src/templates/blog/post.js');
const postsView = path.resolve('./src/templates/blog/posts.js');

const buildBlog = (createPage, data) => {

  // Blog related
  const PostsOverview = data.allContentfulPosts.edges;
  const SinglePosts = data.allContentfulPost.edges

  // Create cornerstone content
  PostsOverview.forEach(posts => {
    const postsContent = posts.node;
    const postsContentSlug = postsContent.slug;

    createPage({
      path: `/${postsContentSlug}/`,
      component: postsView,
      context: {
        slug: postsContent.slug,
        id: postsContent.id,
      },
    });

    if (postsContent.categories !== null) {
      postsContent.categories.forEach(category => {
        createPage({
          path: `/${postsContentSlug}/${category.slug}`,
          component: postsView,
          context: {
            slug: category.slug,
            id: category.id,
          },
        }); 
      });
    }
  });

  SinglePosts.forEach(post => {
    const postContent = post.node;
    const cornerstoneSlug = postContent.contentfulparent.contentfulparent.slug;
    const categorySlug = postContent.contentfulparent.slug

    createPage({
      path: `/${cornerstoneSlug}/${categorySlug}/${postContent.slug}/`,
      component: postView,
      context: {
        slug: postContent.slug,
        id: postContent.id,
      },
    })
  });
};

module.exports.buildBlog = buildBlog;
