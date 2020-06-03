const GatsbyNodeQuery =
  `
    {
      contentfulPages {
        pages {
          ... on ContentfulPage {
            id
            title
            slug
          }
        }
      }
      contentfulPosts {
        id
        slug
        title
        posts {
          id
          title
          slug
        }
      }
    }
  `;

module.exports.GatsbyNodeQuery = GatsbyNodeQuery;
