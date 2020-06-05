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

const App = (props) => {
  const {children, headerSize} = props;

  return (
    <>
      <Header size={headerSize} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  headerBackgroundFill: PropTypes.string,
}

export default App
