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
      contentfulProductCollections {
        id
        title
        slug
        collections {
          title
          id
          slug
          products {
            slug
            title
            id
          }
        }
      }
    }
  `;

module.exports.GatsbyNodeQuery = GatsbyNodeQuery;
