import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import classnames from 'classnames'
import styles from "./menu-item.module.scss"
import Menu from "../menu/menu"

const MenuItem = ({ title, slug, theme, menuItems }) => {
  const className = classnames(styles.item, {
    [styles[theme]] : true
  });

  return (
    <li className={className}>
      <Link to={`/${slug}/`}>
        {title}
      </Link>
      
      {menuItems && (
        <Menu menuItems={menuItems} />
      )}
    </li>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string
}

export default MenuItem
