import PropTypes from "prop-types"
import React from "react"
import styles from "./gallery-row.module.scss"
import Image from "../../image/image"

const GalleryRow = ({ images }) => {
  return (
    <div className={styles.wrapper}>
      {images.map((image, key) => (
        <div key={key} className={styles.imageWrapper}>
          <Image fluid={image.fluid} />
        </div>
      ))}
    </div>
  )
}

export default GalleryRow;

GalleryRow.propTypes = {
  images: PropTypes.array.isRequired,
}
