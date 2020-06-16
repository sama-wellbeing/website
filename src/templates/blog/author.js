import React from 'react';
import App from "../../components/app/app"
import { graphql } from "gatsby"
import PageHeader from '../../components/page-header/page-header';
import { heroHeights } from '../../constants/theme';
import FlexibleContent from '../../components/flexible-content/flexible-content';

const AuthorTemplate = ({ data }) => {
  const content = data.author;

  if (content.hero) {
    content.hero.height = heroHeights.MEDIUM
  }

  return (
    <App>
      <PageHeader hero={content.hero} title={content.title} />
      {content.content && <FlexibleContent content={content.content.contentRow} />}
    </App>
  )
}

export default AuthorTemplate;

export const pageQuery = graphql`
  query AuthorQuery($id: String!) {
    author: contentfulAuthor(id: {eq: $id}) {
      title
      hero {
        subtitle
        title
        image {
          fluid(maxWidth: 3000, quality: 90) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      content {
        contentRow {
          ... on ContentfulFcCenteredText {
            title
            tag
            backgroundColour
            content {
              childMarkdownRemark {
                html
              }
            }
            internal {
              type
            }
          }
          ... on ContentfulFcSingleImage {
            title
            tag
            imagePosition
              image {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            content {
              childMarkdownRemark {
                html
              }
            }
            internal {
              type
            }
          }
          ... on ContentfulFcGalleryRow {
            images {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            internal {
              type
            }
          }
        }
      }
    }
  }
`
