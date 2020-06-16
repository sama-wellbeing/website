const path = require('path');
// Blog Post View
const authorView = path.resolve('./src/templates/blog/author.js');

const buildAuthors = (createPage, data) => {

  const authors = data.allContentfulAuthor.nodes

  // Create cornerstone content
  authors.forEach(author => {
    createPage({
      path: `/about/${author.slug}/`,
      component: authorView,
      context: {
        slug: author.slug,
        id: author.id,
      },
    })
  });
};

module.exports.buildAuthors = buildAuthors;
