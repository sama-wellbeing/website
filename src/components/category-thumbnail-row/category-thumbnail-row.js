import PropTypes from "prop-types"
import React from "react"
import styles from "./category-thumbnail-row.module.scss"
import CategoryThumbnail from '../category-thumbnail/category-thumbnail';

const CategoryThumbnailRow = (props) => {
  const { categories } = props

  return (
    <div className={styles.row}>
      {categories.map((item, key) => (
        <CategoryThumbnail
          key={key}
          slug={item.slug}
          title={item.title}
          image={item.teaserImage}
        />
      ))}
    </div>
  )
};

CategoryThumbnailRow.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoryThumbnailRow;