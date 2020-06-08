const GatsbyNodeQuery = `
    {
      allContentfulPage {
        edges {
          node {
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
      allContentfulPostCategory {
        edges {
          node {
            slug
            title
            id
            contentfulparent {
              slug
              title
            }
          }
        }
      }
    }
  `

module.exports.GatsbyNodeQuery = GatsbyNodeQuery;
