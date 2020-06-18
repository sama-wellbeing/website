import { graphql, useStaticQuery } from "gatsby"
import { connect } from 'react-redux';
import React from "react"
import classnames from 'classnames'

import Menu from "../menu/menu"
import styles from "./tray.module.scss"
import { MenuKeys } from '../../constants/menus';
import { toggleTray } from "../../state/ui/ui-action";
import { isTrayActive } from "../../state/ui/ui-selectors"
import Layout from '../layout/layout';

const Tray = (props) => {
  const { trayIsActive, dispatch } = props;
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
    [styles.trayIsActive]: trayIsActive,
  })
  const trayUnderlayClass = classnames(styles.trayUnderlay, {
    [styles.trayUnderlayIsActive]: trayIsActive,
  })
  const trayContainerClass = classnames(styles.trayContainer, {
    [styles.trayContainerIsActive]: trayIsActive,
  })
  const closeClass = classnames(styles.close, {
    [styles.closeIsActive]: trayIsActive,
  })
  const menuItems = data.allContentfulMenu.nodes[0].menuItems;

  return (
    <Layout className={trayClass}>
      <div className={trayContainerClass}>
        <Menu
          className={styles.menu}
          menuItems={menuItems}
          theme={MenuKeys.MOBILE}
        />
      </div>
      <div
        role="presentation"
        className={trayUnderlayClass}
        onClick={() => dispatch(toggleTray(false))}
        onKeyDown={() => dispatch(toggleTray(false))}
      ></div>
      <button
        className={closeClass}
        onClick={() => dispatch(toggleTray(false))}
      >
        Close
      </button>
    </Layout>
  )
}

export default connect(state => ({
  trayIsActive: isTrayActive(state),
}),null)(Tray)
