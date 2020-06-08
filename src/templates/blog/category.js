import React from 'react';
import App from "../../components/app/app"
import { graphql } from "gatsby"
import Wrapper from '../../components/wrapper/wrapper';
import PageHeader from '../../components/page-header/page-header';

const CategoryTemplate = ({ data }) => {
  console.log(data)
  
  const content = data.content;
  const categories = data.categories;
  const menuItems = categories.categories;

    return (
      <App theme={categories.theme}>
        <PageHeader menuItems={menuItems} theme={categories.theme} />
        <Wrapper>
          <h1>{content.title}</h1>
        </Wrapper>
      </App>
    )
}

export default CategoryTemplate;

export const pageQuery = graphql`
    query CategoryQuery($id: String!, $parentId: String!) {
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
        }
      }
    }
`
