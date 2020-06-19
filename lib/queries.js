const GatsbyNodeQuery = `
    {
      allContentfulPage {
        nodes {
          title
          slug
          id
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
              id
              slug
              title
              contentfulparent {
                id
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
              id
              slug
              title
            }
          }
        }
      }
      allContentfulAuthor {
        nodes {
          title
          slug
          id
        }
      }
    }
  `

module.exports.GatsbyNodeQuery = GatsbyNodeQuery;
