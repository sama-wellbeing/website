/**
 * App component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import _ from "lodash"
import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import classnames from "classnames"
import Header from "../header/header"
import "./app.scss"
import styles from "./app.scss"
import Footer from "../footer/footer"
import SEO from '../seo';
import Tray from "../tray.js/tray"
import { isTrayActive } from "../../state/ui/ui-selectors"

const App = (props) => {
  const { children, headerSize, theme, seo, trayIsActive } = props
  let seoContianer;

  if (_.isUndefined(seo)) {
    seoContianer = <SEO />
  } else {
    const title = seo.title ? seo.title : null;
    const description = seo.metaDescription ? seo.metaDescription.content[0].content[0].value : null;

    seoContianer = <SEO title={title} description={description} />
  }

  const bodyClass = classnames({
    [styles.trayIsActive]: trayIsActive,
  })

  return (
    <>
      {seoContianer}
      <div className={bodyClass}>
        <Tray />
        <Header size={headerSize} theme={theme}/>
        <main>{children}</main>
        <Footer theme={theme} />
      </div>
    </>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  headerBackgroundFill: PropTypes.string,
  seo: PropTypes.object,
}


export default connect(state => ({
  trayIsActive: isTrayActive(state),
}),null)(App)