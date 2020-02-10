import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const MenuItem = ({ title, slug }) => (
    <li>
      <Link
          to={`${slug}/`}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
      {title}
    </Link>
  </li>
)

MenuItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string
}

MenuItem.defaultProps = {
  // siteTitle: ``,
}

export default MenuItem
