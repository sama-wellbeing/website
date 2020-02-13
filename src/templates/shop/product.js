import React from 'react';
import App from "../../components/app/app"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

const ProductTemplate = ({ data }) => {
    const content = data.contentfulProduct;

    return (
      <App>
        <SEO title="Product Page" />
          <h1>
            {content.title}
          </h1>
      </App>
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
