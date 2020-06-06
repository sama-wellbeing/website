import PropTypes from "prop-types"
import React from "react"
import styles from "./posts-list.module.scss"
import PostsListItem from "../posts-list-item/posts-list-item";
import { buildPostSlug, getCornerStoneContent } from '../../utils/posts';

const PostsLists = (props) => {
  const { posts } = props
  
  return (
    <div className={styles.list}>
      {posts && posts.map((item, key) => (
        <PostsListItem
          id={key}
          key={key}
          content={item.teaserText.childMarkdownRemark.excerpt}
          title={item.title}
          slug={buildPostSlug(item)}
          image={item.teaserImage}
          category={getCornerStoneContent(item)}
        />
      ))}
    </div>
  )
};

PostsLists.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsLists;