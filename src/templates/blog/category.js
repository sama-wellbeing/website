import React from 'react';
import App from "../../components/app/app"
import { graphql } from "gatsby"
import Wrapper from '../../components/wrapper/wrapper';
import PageHeader from '../../components/page-header/page-header';
import PostsLists from '../../components/posts-list/posts-list';

const CategoryTemplate = ({ data }) => {
  const posts = data.posts.edges;
  const content = data.content;
  const categories = data.categories;
  const menuItems = categories.categories;

  return ( 
    <App theme={categories.theme}>
      <PageHeader
        menuItems={menuItems}
        theme={categories.theme}
        title={content.title}
        hero={content.hero}
      />
      <Wrapper>
        <PostsLists posts={posts} />
      </Wrapper>
    </App>
  )
}

export default CategoryTemplate;

export const pageQuery = graphql`
    query CategoryQuery($id: String!, $parentId: String!) {
      posts: allContentfulPost(filter: {contentfulparent: {id: {eq: $id}}}) {
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
      content: contentfulPostCategory(id: {eq: $id}) {
        title
      }
      categories: contentfulPosts(id: {eq: $parentId}) {
        title
        slug
        theme
        categories {
          slug
          title
          id
          contentfulparent {
            title
            theme
            slug
          }
        }
      }
    }
`
