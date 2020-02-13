const path = require('path');
// Generic App View
const pageView = path.resolve('./src/templates/page.js');

const buildPages = (createPage, data) => {
  const Pages = data.contentfulPages.pages;

  Pages.forEach(page => {
    createPage({
      path: `/${page.slug}/`,
      component: pageView,
      context: {
        slug: page.slug,
        id: page.id
      },
    })
  });
}

module.exports.buildPages = buildPages;
