import PropTypes from "prop-types"
import React from "react"
import styles from "./thumbnail-navigation.module.scss"
import ThumbnailNavigationItem from '../thumbnail-navigation-item/thumbnail-navigation-item';
import Row from '../grid/row/row';

const ThumbnailNavigation = (props) => {
  const { thumbnails } = props

  return (
    <Row className={styles.row}>
      {thumbnails.map((item, key) => (
        <ThumbnailNavigationItem
          key={key}
          isFirst={key === 0}
          slug={item.slug}
          title={item.title}
          image={item.teaserImage}
          parent={item.contentfulparent}
        />
      ))}
    </Row>
  )
};

ThumbnailNavigation.propTypes = {
  thumbnails: PropTypes.array.isRequired
};

export default ThumbnailNavigation;