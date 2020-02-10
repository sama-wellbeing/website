import React from 'react';
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

function RenderProducts(props) {
    const { products, path } = props;

    const listItems = products.map((item, key) =>
      <li key={key}>
          <Link to={`${path}/${item.slug}/`} >
              {item.title}
          </Link>
      </li>
    );

    return (
      <ul>{listItems}</ul>
    );
}

const CollectionTemplate = ({ data }) => {
    const content = data.contentfulProductCollection;
    const products = content.products;
    const path = `/${data.contentfulProductCollections.slug}/${content.slug}`;

    return (
      <Layout>
        <SEO title={content.title} />
        <h1>
            {content.title}
        </h1>
        {products &&
            <RenderProducts path={path} products={products}/>
        }
      </Layout>
    );
}

export default CollectionTemplate;

export const pageQuery = graphql`
    query ProductsQuery($id: String!) {
      contentfulProductCollection(id: {eq: $id}) {
        title
        slug
        products {
            title
            slug
        }
      }
      contentfulProductCollections {
        slug
      }
    }
`
