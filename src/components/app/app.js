/**
 * App component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import * as PropTypes from "prop-types"

import Header from "../header/header"

import "./app.scss"
import Footer from "../footer/footer"
import SEO from '../seo';

const App = (props) => {
  const {children, headerSize, theme} = props;

  return (
    <>
      <SEO title="Product Page" />
      <Header size={headerSize} theme={theme} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  headerBackgroundFill: PropTypes.string,
}

export default App
