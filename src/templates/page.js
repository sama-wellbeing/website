import React from 'react';
import App from "../components/app/app"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Wrapper from '../components/wrapper/wrapper';

const PageTemplate = ({ data }) => {
    const content = data.contentfulPage;

    return (
      <App>
        <SEO title="Product Page" />
        <Wrapper>
          <h1>{content.title}</h1>
        </Wrapper>
      </App>
    )
}

export default PageTemplate;

export const pageQuery = graphql`
    query PageQuery($id: String!) {
      contentfulPage(id: {eq: $id}) {
        title
      }
    }
`
