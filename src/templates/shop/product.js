import React from 'react';
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

const ProductTemplate = ({ data }) => {
    console.log(data);
    // const content = data.contentfulPage;

    return (
      <Layout>
        <SEO title="Product Page" />
          <h1>
              Product Page
          </h1>
      </Layout>
    );
}

export default ProductTemplate;

// export const pageQuery = graphql`
//     query PageQuery($id: String!) {
//       contentfulPage(id: {eq: $id}) {
//         title
//       }
//     }
// `
