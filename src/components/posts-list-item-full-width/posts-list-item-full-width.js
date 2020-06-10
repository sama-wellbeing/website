import PropTypes from "prop-types"
import React from "react"
import BackgroundImage from 'gatsby-background-image'
import classnames from "classnames"
import styles from "./posts-list-item-full-width.module.scss"
import Button from "../button/button";
import Title from '../title/title';
import { Link } from "gatsby";

const PostsListItemFullWidth = (props) => {
  const { title, slug, image, category } = props;
  const theme = category.theme.replace(/\s/g, '');

  const rowClass = classnames(styles.row, {
    //   [styles.thumbnailIsOdd]: !isEven,
    [styles[`theme${theme}`]]: theme,
  })
  const categoryThemeClass = classnames(styles.categoryLink, {
    [styles[`themeCategory${theme}`]]: theme,
  })

  return (
    <div className={rowClass}>
      <div className={styles.contentContainer}>
        <BackgroundImage
          className={styles.background}
          fluid={image.fluid}
        ></BackgroundImage>
        <div className={styles.content}>
          <Title className={styles.category} type={"h6"}>
            <Link className={categoryThemeClass} to={`/${category.slug}/`}>
              {category.title}
            </Link>
          </Title>
          <Title className={styles.title} type={"h2"}>
            {title}
          </Title>
          <Button internal url={slug} text={"Read More"} />
        </div>
      </div>
    </div>
  )
};

PostsListItemFullWidth.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default PostsListItemFullWidth