import React from "react"

import App from "../components/app/app"
// import Image from "../components/image/image"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Hero from "../components/hero/hero"
const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulHomePage {
          edges {
            node {
              id
              hero {
                title
                subtitle
                image {
                  fluid(maxWidth: 1280) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const hero = data.allContentfulHomePage.edges[0].node.hero;

  return (
    <App headerBackgroundFill={'background75'}>
      <SEO title="Home" />
      <Hero image={hero.image} title={hero.title} subTitle={hero.subtitle} cta={hero.cta} />

      <h1>Home Page</h1>
      {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
        {/*<Image />*/}
      {/*</div>*/}
    </App>
  )
}


export default IndexPage
