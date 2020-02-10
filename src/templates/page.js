import React from 'react';
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

// import Link from 'gatsby-link'
// import get from 'lodash/get'
// import Helmet from 'react-helmet'
// import styles from '../pages.js/blog.js.module.css'

const PageTemplate = ({ data }) => {
    // console.log(data);
    // const content = data.contentfulPage;

    return (
      <Layout>
        <SEO title="Product Page" />
        <h1>
            Page Template
        </h1>
      </Layout>
    );
}

export default PageTemplate;

// export const pageQuery = graphql`
//     query PageQuery($id: String!) {
//       contentfulPage(id: {eq: $id}) {
//         title
//       }
//     }
// `
