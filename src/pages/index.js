import React from "react"

import Page from "../components/page/page"
// import Image from "../components/image/image"
import SEO from "../components/seo"
import { backgroundBlock } from './index.module.scss'

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <div className={backgroundBlock}/>
    <h1>Home Page</h1>
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
      {/*<Image />*/}
    {/*</div>*/}
  </Page>
)

export default IndexPage
