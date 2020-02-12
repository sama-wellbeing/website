import React from "react"

import Page from "../components/page/page"
// import Image from "../components/image/image"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Hero from "../components/hero/hero"
const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulHomePage {
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
              file {
                url
              }
            }
          }
        }
      }
    `
  );
  const hero = data.contentfulHomePage.hero;

  return (
    <Page headerBackgroundFill={'background75'}>
      <SEO title="Home" />
      <Hero imageSrc={hero.image.file.url} title={hero.title} subTitle={hero.subtitle} cta={hero.cta} />

      <h1>Home Page</h1>
      {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
        {/*<Image />*/}
      {/*</div>*/}
    </Page>
  )
}


export default IndexPage
