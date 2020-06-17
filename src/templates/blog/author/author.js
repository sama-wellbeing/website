import React from 'react';
import classnames from "classnames"
import App from "../../../components/app/app"
import { graphql } from "gatsby"
import Header from "../../../components/header/header"
import { heroHeights } from '../../../constants/theme'
import FlexibleContent from '../../../components/flexible-content/flexible-content'
import styles from "./author.module.scss"
import HeroImage from '../../../components/hero-image/hero-image';

const AuthorTemplate = ({ data }) => {
  const content = data.author;

  const { hero } = content;

  return (
    <App useHeader={false}>
      <div className={styles.headerBackground}>
        <Header theme={"transparent"} />
        <HeroImage image={hero.image} title={hero.title} subtitle={hero.subtitle} />
      </div>
      {content.content && (
        <FlexibleContent content={content.content.contentRow} />
      )}
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
