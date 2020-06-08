/**
 * App component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import _ from "lodash"
import React from "react"
import * as PropTypes from "prop-types"

import Header from "../header/header"
import "./app.scss"
import Footer from "../footer/footer"
import SEO from '../seo';

const App = (props) => {
  const { children, headerSize, theme, seo } = props;
  let seoContianer;

  if (_.isUndefined(seo)) {
    seoContianer = <SEO />
  } else {
    const title = seo.title ? seo.title : null;
    const description = seo.metaDescription ? seo.metaDescription.content[0].content[0].value : null;

    seoContianer = <SEO title={title} description={description} />
  }

  return (
    <>
      {seoContianer}
      <Header size={headerSize} theme={theme} />
      <main>{children}</main>
      <Footer theme={theme} />
    </>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  headerBackgroundFill: PropTypes.string,
  seo: PropTypes.object
}

export default App
