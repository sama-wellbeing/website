import React from 'react';
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const PageTemplate = ({ data }) => {
    const content = data.contentfulPage;

    return (
      <Layout>
        <SEO title="Product Page" />
        <h1>
            {content.title}
        </h1>
      </Layout>
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
