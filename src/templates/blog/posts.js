import React from 'react';
import App from "../../components/app/app"
import { graphql } from "gatsby"
import Wrapper from '../../components/wrapper/wrapper';
import PageHeader from '../../components/page-header/page-header';

const PostsTemplate = ({ data }) => {
  const content = data.contentfulPosts;
  const theme = content.theme ? content.theme : null;

  return (
    <App theme={theme}>
      <PageHeader menuItems={content.categories} theme={theme}/>

      <Wrapper>
        <h1>{content.title}</h1>
      </Wrapper>
    </App>
  )
};

export default PostsTemplate;

export const pageQuery = graphql`
  query PostsQuery($id: String!) {
    contentfulPosts(id: {eq: $id}) {
      title
      slug
      theme
      categories {
        title
        slug
        contentfulparent {
          slug
          title
        }
      }
    }
  }
`
