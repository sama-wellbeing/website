import React from 'react';
import Page from "../components/page/page"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const PageTemplate = ({ data }) => {
    const content = data.contentfulPage;

    return (
      <Page>
        <SEO title="Product Page" />
        <h1>
            {content.title}
        </h1>
      </Page>
    );
}

export default PageTemplate;

export const pageQuery = graphql`
    query PageQuery($id: String!) {
      contentfulPage(id: {eq: $id}) {
        title
      }
    }
`
