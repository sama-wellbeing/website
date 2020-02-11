import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import classnames from 'classnames'
import styles from "./menu-item.module.scss"

const MenuItem = ({ title, slug, theme }) => {
  const className = classnames(styles.item, {
    [styles[theme]] : true
  });

  return (
    <li className={className}>
      <Link to={`/${slug}/`}>
        {title}
      </Link>
    </li>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string
}

export default MenuItem
