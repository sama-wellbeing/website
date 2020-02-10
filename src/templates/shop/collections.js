import React from 'react'
import Page from "../../components/page/page"
import SEO from "../../components/seo"
import { graphql, Link } from "gatsby"

function RenderCollections(props) {
  const { collections, slug } = props;

  const collectionItems = collections.map((item, key) =>
    <li key={key}>
      <Link to={`/${slug}/${item.slug}/`} >
        {item.title}
      </Link>
    </li>
  );

  return (
    <ul>{collectionItems}</ul>
  );
}


const CollectionsTemplate = ({ data }) => {
    const content = data.contentfulProductCollections;

    return (
      <Page>
        <SEO title="Product Page" />
          <h1>{content.title}</h1>
          <RenderCollections collections={content.collections} slug={content.slug} />
      </Page>
    );
}

export default CollectionsTemplate;

export const pageQuery = graphql`
    query CollectionsQuery($id: String!) {
      contentfulProductCollections(id: {eq: $id}) {
        slug
        title
        collections {
          slug
          title
        }
      }
    }
`
