import React from 'react';
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

const PostTemplate = ({ data }) => {
    const content = data.contentfulPost;

    return (
      <Layout>
        <SEO title={content.title} />
        <h1>{content.title}</h1>
      </Layout>
    );
}

export default PostTemplate;

export const pageQuery = graphql`
    query PostQuery($id: String!) {
      contentfulPost(id: {eq: $id}) {
        title
      }
    }
`
