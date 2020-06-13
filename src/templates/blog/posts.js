import React from 'react';
import App from "../../components/app/app"
import { graphql } from "gatsby"
import Wrapper from '../../components/wrapper/wrapper';
import PageHeader from '../../components/page-header/page-header';
import ThumbnailNavigation from '../../components/thumbnail-navigation/thumbnail-navigation';
import PostsLists from '../../components/posts-list/posts-list';

const PostsTemplate = ({ data }) => {
  const content = data.content;
  const posts = data.posts.edges;
  const theme = content.theme ? content.theme : null;
  
  return (
    <App theme={theme}>
      <PageHeader
        menuItems={content.categories}
        theme={theme}
        title={content.title}
        hero={content.hero}
      />
      <Wrapper>
        <ThumbnailNavigation thumbnails={content.categories} />

        <PostsLists posts={posts} />
      </Wrapper>
    </App>
  )
};

export default PostsTemplate;

export const pageQuery = graphql`
  query PostsQuery($id: String!) {
    posts: allContentfulPost(
      filter: {
        contentfulparent: {
          contentfulparent: {
            id: { eq: $id }
          }
        }
      }
    ) {
      edges {
        node {
          slug
          title
          teaserText {
            childMarkdownRemark {
              excerpt(truncate: true, pruneLength: 350)
            }
          }
          teaserImage {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          contentfulparent {
            slug
            contentfulparent {
              title
              theme
              slug
            }
          }
        }
      }
    }
    content: contentfulPosts(id: { eq: $id }) {
      title
      slug
      theme
      hero {
        subtitle
        title
        image {
          fluid(maxWidth: 3000, quality: 90) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      categories {
        title
        slug
        teaserImage {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        contentfulparent {
          slug
          title
        }
      }
    }
  }
`
