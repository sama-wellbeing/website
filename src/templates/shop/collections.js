import React from 'react';

// import Link from 'gatsby-link'
// import get from 'lodash/get'
// import Helmet from 'react-helmet'
// import styles from '../pages.js/blog.js.module.css'

const CollectionsTemplate = ({ data }) => {
    console.log(data);
    // const content = data.contentfulPage;

    return (
        <h1>
            Collections Page
        </h1>
    );
}

export default CollectionsTemplate;

// export const pageQuery = graphql`
//     query PageQuery($id: String!) {
//       contentfulPage(id: {eq: $id}) {
//         title
//       }
//     }
// `
