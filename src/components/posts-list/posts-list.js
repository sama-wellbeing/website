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
  const { posts, useActiveTheme } = props
  
  return (
    <div className={styles.list}>
      {posts && posts.map((item, key) => {
        const content = "node" in item ? item.node : item;
                
        if (isFullWidth(key)) {
          return (
            <PostsListItemFullWidth
              key={key}
              content={content.teaserText.childMarkdownRemark.excerpt}
              title={content.title}
              slug={buildPostSlug(content)}
              image={content.teaserImage}
              category={getCornerStoneContent(content)}
              useActiveTheme={useActiveTheme}
            />
          )
        } else {
          return (
            <PostsListItem
              key={key}
              content={content.teaserText.childMarkdownRemark.excerpt}
              title={content.title}
              slug={buildPostSlug(content)}
              image={content.teaserImage}
              category={getCornerStoneContent(content)}
              useActiveTheme={useActiveTheme}
              imageIsRight={imageIsRight(key)}
            />
          )
        }
      })}
    </div>
  )
};

PostsLists.propTypes = {
  posts: PropTypes.array.isRequired,
  useActiveTheme: PropTypes.bool
};

PostsLists.defaultProps = {
  useActiveTheme: true
};

export default PostsLists;