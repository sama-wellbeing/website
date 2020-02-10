import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const MenuItem = ({ title, slug }) => (
  <li>
    <Link to={`/${slug}/`} >
      {title}
    </Link>
  </li>
)

MenuItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string
}

export default MenuItem
