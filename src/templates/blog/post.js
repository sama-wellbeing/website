import React from 'react';
import App from "../../components/app/app"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

const PostTemplate = ({ data }) => {
    const content = data.contentfulPost;

    return (
      <App>
        <SEO title={content.title} />
        <h1>{content.title}</h1>
      </App>
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
