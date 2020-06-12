import _ from "lodash"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./thumbnail-navigation-item.module.scss"
import BackgroundImage from "gatsby-background-image"
import { colours } from '../../constants/theme'
import Col from "../grid/col/col"
import classnames from "classnames"

const ThumbnailNavigationItem = props => {
  const {slug, title, image, parent, isFirst } = props;
    
  const freshSlug = !_.isUndefined(parent) ? `/${parent.slug}/${slug}/` : `/${slug}/`

  const containerClass = classnames(styles.thumbnailContainer, {
    [styles.isFirst]: isFirst,
  })

  return (
    <Col className={containerClass}>
      <Link to={freshSlug} className={styles.thumbnail}>
        <BackgroundImage
          className={styles.background}
          fluid={image.fluid}
          backgroundColor={colours.LIGHT_BLUE}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </Link>
    </Col>
  )
}

ThumbnailNavigationItem.propTypes = {
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  parent: PropTypes.object,
  isFirst: PropTypes.bool
}

export default ThumbnailNavigationItem