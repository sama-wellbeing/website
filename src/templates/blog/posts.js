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
      <PageHeader
        menuItems={content.categories}
        theme={theme}
        title={content.title}
        hero={content.hero}
      />
      <Wrapper></Wrapper>
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
        contentfulparent {
          slug
          title
        }
      }
    }
  }
`
