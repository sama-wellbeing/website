import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classnames from 'classnames'

import Menu from "../menu/menu"
import styles from "./tray.module.scss"
import { MenuKeys } from '../../constants/menus';

const Tray = (props) => {
  const { trayIsVisible, setTrayIsVisible } = props;
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulMenu(filter: { menuId: { eq: "mobile-menu" } }) {
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
            }
          }
        }
      }
    `
  )

  const trayClass = classnames(styles.tray, {
    [styles.trayIsActive]: trayIsVisible,
  })
  const trayUnderlayClass = classnames(styles.trayUnderlay, {
    [styles.trayUnderlayIsActive]: trayIsVisible,
  })
  const trayContainerClass = classnames(styles.trayContainer, {
    [styles.trayContainerIsActive]: trayIsVisible,
  })
  const closeClass = classnames(styles.close, {
    [styles.closeIsActive]: trayIsVisible,
  })
  const menuItems = data.allContentfulMenu.nodes[0].menuItems;

  return (
    <div className={trayClass}>
      <div className={trayContainerClass}>
        <Menu
          className={styles.menu}
          menuItems={menuItems}
          theme={MenuKeys.MOBILE}
        />
      </div>
      <div
        className={trayUnderlayClass}
        onClick={() => setTrayIsVisible(false)}
        onKeyDown={() => setTrayIsVisible(false)}
      ></div>
      <button className={closeClass} onClick={() => setTrayIsVisible(false)}>
        Close
      </button>
    </div>
  )
}

Tray.propTypes = {
  setTrayIsVisible: PropTypes.func
}

export default Tray
