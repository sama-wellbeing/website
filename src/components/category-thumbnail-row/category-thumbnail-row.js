import PropTypes from "prop-types"
import React from "react"
import styles from "./category-thumbnail-row.module.scss"
import CategoryThumbnail from '../category-thumbnail/category-thumbnail';
import Row from '../grid/row/row';

const CategoryThumbnailRow = (props) => {
  const { categories } = props

  return (
    <Row className={styles.row}>
      {categories.map((item, key) => (
        <CategoryThumbnail
          key={key}
          slug={item.slug}
          title={item.title}
          image={item.teaserImage}
        />
      ))}
    </Row>
  )
};

CategoryThumbnailRow.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoryThumbnailRow;