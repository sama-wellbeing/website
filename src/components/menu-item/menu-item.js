import _ from "lodash"
import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import classnames from 'classnames'
import styles from "./menu-item.module.scss"
import Menu from "../menu/menu"

const MenuItem = ({ title, slug, theme, menuItems, parent }) => {
  const className = classnames(styles.item, {
    [styles[theme]]: true,
  })
  let freshSlug = slug;

  const isExternal = freshSlug.includes('http');

  if (!isExternal) {
    freshSlug = !_.isUndefined(parent) ? `/${parent.slug}/${slug}/` : `/${slug}/`;
  }

  return (
    <li className={className}>
      {isExternal ? (
        <a href={freshSlug} title={title}>{title}</a>
      ): (
        <Link title={title} to={`/${freshSlug}/`}>{title}</Link>
      )}

      {menuItems && <Menu menuItems={menuItems} />}
    </li>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  theme: PropTypes.string,
  menuItems: PropTypes.object
}

export default MenuItem
