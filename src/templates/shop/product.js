import React from 'react';
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

const ProductTemplate = ({ data }) => {
    const content = data.contentfulProduct;

    return (
      <Layout>
        <SEO title="Product Page" />
          <h1>
            {content.title}
          </h1>
      </Layout>
    );
}

export default ProductTemplate;

export const pageQuery = graphql`
    query ProductQuery($id: String!) {
      contentfulProduct(id: {eq: $id}) {
        title
        shopifyContent {
          title
          variants {
            edges {
              node {
                availableForSale
                price
                title
              }
            }
          }
        }
      }
    }
`
