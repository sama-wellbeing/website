const GatsbyNodeQuery = `
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
      allContentfulPosts {
        edges {
          node {
            id
            slug
            title
            categories {
              id
              slug
              title
            }
          }
        }
      }
      allContentfulPost {
        edges {
          node {
            id
            title
            slug
            contentfulparent {
              slug
              title
              contentfulparent {
                slug
                title
              }
            }
          }
        }
      }
    }
  `

module.exports.GatsbyNodeQuery = GatsbyNodeQuery;
