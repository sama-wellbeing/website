import React from 'react';
import App from "../../components/app/app"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import Wrapper from '../../components/wrapper/wrapper';

const CategoryTemplate = ({ data }) => {
    const content = data.contentfulPostCategory;

    return (
      <App>
        <Wrapper>
          <h1>{content.title}</h1>
        </Wrapper>
      </App>
    )
}

export default CategoryTemplate;

export const pageQuery = graphql`
    query CategoryQuery($id: String!) {
      contentfulPostCategory(id: {eq: $id}) {
        title
      }
    }
`
