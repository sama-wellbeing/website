// Generic Page View
const pageView = path.resolve('./src/templates/page.js');

export const buildPages = (createPage, data) => {
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
