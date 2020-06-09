import React from 'react';
import App from "../../components/app/app"
import { graphql } from "gatsby"
import Wrapper from '../../components/wrapper/wrapper';
import PageHeader from '../../components/page-header/page-header';

const PostTemplate = ({ data }) => {
  const content = data.post;
  const cornerstone = data.cornerstone;

  const theme = cornerstone.theme || null; 

  return (
    <App theme={theme}>
      <PageHeader menuItems={cornerstone.categories} theme={theme} hero={content.hero} title={content.title} />
      <Wrapper>
      </Wrapper>
    </App>
  )
}

export default PostTemplate;

export const pageQuery = graphql`
    query PostQuery($id: String!, $cornerstoneId: String!) {
      post: contentfulPost(id: {eq: $id}) {
        title
        author {
          slug
          title
        }
      }
      cornerstone: contentfulPosts(id: {eq: $cornerstoneId}) {
        title
        slug
        theme
        categories {
          slug
          title
          id
          contentfulparent {
            slug
            title
          }
        }
      }
    }
`
