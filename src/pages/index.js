import React from "react"

import Page from "../components/page/page"
import Image from "../components/image/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <h1>Home Page</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Page>
)

export default IndexPage
