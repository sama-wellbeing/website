import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./category-thumbnail.module.scss"
import BackgroundImage from "gatsby-background-image"
import { colours } from '../../constants/theme';

const CategoryThumbnail = props => {
  const {slug, title, image } = props;
    
  return (
    <div className={styles.thumbnailContainer}>
      <Link to={`/${slug}/`} className={styles.thumbnail}>
        <BackgroundImage
          className={styles.background}
          fluid={image.fluid}
          backgroundColor={colours.LIGHT_BLUE}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </Link>
    </div>
  )
}

CategoryThumbnail.propTypes = {
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default CategoryThumbnail