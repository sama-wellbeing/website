import PropTypes from "prop-types"
import React from "react"
import classnames from "classnames"
import styles from "./posts-list-item.module.scss"
import Button from "../button/button";
import Image from '../image/image';
import Title from '../title/title';
import { Link } from "gatsby";

const PostsListItem = (props) => {
  const { id, title, content, slug, image, category } = props;

  const isEven = 	id%2 == 0;
  const thumbanilContainerClass = classnames(styles.col, styles.thumbnailContainer, {
    [styles.thumbnailContainerIsOdd]: !isEven
  });
  const thumbanilClass = classnames(styles.thumbnail, {
    [styles.thumbnailIsOdd]: !isEven,
  })
  const contentClass = classnames(styles.col, styles.contentCol, {
    [styles.contentlIsOdd]: !isEven,
  });
  const titleContainer = classnames(styles.content, styles.titleContainer, {
    [styles.titleIsOdd]: !isEven,
  })
  const contentContainer = classnames(styles.content, styles.copyContainer);

  return (
    <div className={styles.row}>
      <div className={thumbanilContainerClass}>
        <div className={thumbanilClass}>
          <Image className={styles.image} fluid={image.fluid}></Image>
        </div>
      </div>
      <div className={contentClass}>
        <div className={titleContainer}>
          <Title className={styles.category} type={"h6"}>
            <Link to={`/${category.slug}/`}>{category.title}</Link>
          </Title>
          <Title className={styles.title} type={"h3"}>
            {title}
          </Title>
        </div>
        <div className={contentContainer}>
          <p>{content}</p>
          <Button internal url={slug} text={"Read More"} />
        </div>
      </div>
    </div>
  )
};

PostsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default PostsListItem;