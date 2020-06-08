const path = require('path');
// Blog Post View
const postView = path.resolve('./src/templates/blog/post.js');
const postsView = path.resolve('./src/templates/blog/posts.js');
const categoryView = path.resolve("./src/templates/blog/category.js")

const buildBlog = (createPage, data) => {

  // Blog related
  const PostsOverview = data.allContentfulPosts.edges;
  const SinglePosts = data.allContentfulPost.edges;
  const Categories = data.allContentfulPostCategory.edges;

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
  });

  // Create Single Posts
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

  // Create categories
  Categories.forEach(category => {
    const content = category.node;
    const slug = content.slug;

    createPage({
      path: `/${content.contentfulparent.slug}/${slug}/`,
      component: categoryView,
      context: {
        slug: slug,
        id: content.id,
      },
    })
  })
};

module.exports.buildBlog = buildBlog;
