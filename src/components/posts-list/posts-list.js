import PropTypes from "prop-types"
import React from "react"
import styles from "./posts-list.module.scss"
import PostsListItem from "../posts-list-item/posts-list-item"
import PostsListItemFullWidth from "../posts-list-item-full-width/posts-list-item-full-width"
import { buildPostSlug, getCornerStoneContent } from '../../utils/posts'

const isFullWidth = (key) => {
  const isWide = 2;

  return key === isWide;
}

const imageIsRight = (key) => {
  const isRight = [1, 4];
  return isRight.includes(key);
}

const PostsLists = (props) => {
  const { posts } = props
  
  return (
    <div className={styles.list}>
      {posts && posts.map((item, key) => {
        if (isFullWidth(key)) {
          return (
            <PostsListItemFullWidth
              key={key}
              content={item.teaserText.childMarkdownRemark.excerpt}
              title={item.title}
              slug={buildPostSlug(item)}
              image={item.teaserImage}
              category={getCornerStoneContent(item)}
            />
          )
        } else {
          return (
            <PostsListItem
              key={key}
              content={item.teaserText.childMarkdownRemark.excerpt}
              title={item.title}
              slug={buildPostSlug(item)}
              image={item.teaserImage}
              category={getCornerStoneContent(item)}
              imageIsRight={imageIsRight(key)}
            />
          )
        }
      })}
    </div>
  )
};

PostsLists.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsLists;