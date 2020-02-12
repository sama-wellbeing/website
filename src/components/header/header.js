import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classnames from 'classnames'

import Menu from "../menu/menu"
import Brand from "../brand/brand"
import Wrapper from "../wrapper/wrapper"

import styles from "./header.module.scss"

const Header = ({ backgroundFill }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulMenu(
          filter: { menuId: { eq: "primary-menu" } }
        ) {
          nodes {
            menuItems {
              ... on ContentfulPage {
                slug
                title
              }
              ... on ContentfulPosts {
                slug
                title
              }
              ... on ContentfulProductCollections {
                slug
                title
              }
            }
          }
        }
        contentfulSettings {
          strapline
        }
      }
    `
  );
  const headerClass = classnames(styles.header, styles.headerBackground, {
    [styles[backgroundFill]] : backgroundFill
  });

  const menuItems = data.allContentfulMenu.nodes[0].menuItems;
  const strapLine = data.contentfulSettings.strapline;

  return (
    <header className={headerClass}>
      <Wrapper>
        <Menu menuItems={menuItems} />
        <Brand />
        <h4 className={styles.strapline}>{strapLine}</h4>
      </Wrapper>
    </header>
  )
}

Header.propTypes = {
  backgroundFill: PropTypes.string
}

Header.defaultProps = {
  backgroundFill: 'backgroundWrap'
}

export default Header
