import React from "react"

import App from "../components/app/app"
// import Image from "../components/image/image"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Hero from "../components/hero/hero"
import Wrapper from "../components/wrapper/wrapper"
import { colours, headerHeights, heroHeights } from '../constants/theme';
import CategoryThumbnailRow from '../components/category-thumbnail-row/category-thumbnail-row';

const IndexPage = () => {
  let data = useStaticQuery(
    graphql`
      query {
        allContentfulHomePage(
          filter: { id: { eq: "2d016566-5546-5b12-80b1-d15a60ca62a7" } }
        ) {
          edges {
            node {
              id
              seoMetaData {
                title
                metaDescription {
                  content {
                    content {
                      value
                    }
                  }
                }
              }
              hero {
                title
                subtitle
                image {
                  fluid(maxWidth: 2440) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
                cta {
                  internalUrl {
                    slug
                  }
                  text
                }
              }
              contentCategories {
                title
                slug
                teaserImage {
                  fluid(maxWidth: 400) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  data = data.allContentfulHomePage.edges[0].node;

  const hero = data.hero;
  const seo = data.seoMetaData;
  console.log(data);
  return (
    <App headerSize={headerHeights.LARGE}>
      <SEO
        title={seo.title}
        description={seo.metaDescription.content[0].content[0].value}
      />
      <Hero
        size={heroHeights.SMALL}
        image={hero.image}
        title={hero.title}
        subtitle={hero.subtitle}
        cta={hero.cta}
        backgroundColor={colours.LIGHT_BLUE}
      />

      <Wrapper>
        <CategoryThumbnailRow categories={data.contentCategories} />
      </Wrapper>
    </App>
  )
}


export default IndexPage