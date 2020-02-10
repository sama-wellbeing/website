import React from 'react';
import Page from "../../components/page/page"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

const PostTemplate = ({ data }) => {
    const content = data.contentfulPost;

    return (
      <Page>
        <SEO title={content.title} />
        <h1>{content.title}</h1>
      </Page>
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
