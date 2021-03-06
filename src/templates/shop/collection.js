// import React from 'react';
// import App from "../../components/app/app"
// import SEO from "../../components/seo"
// import { graphql, Link } from "gatsby"

// function RenderProducts(props) {
//     const { products, path } = props;

//     const listItems = products.map((item, key) =>
//       <li key={key}>
//           <Link to={`${path}/${item.slug}/`} >
//               {item.title}
//           </Link>
//       </li>
//     );

//     return (
//       <ul>{listItems}</ul>
//     );
// }

// const CollectionTemplate = ({ data }) => {
//     const content = data.contentfulProductCollection;
//     const products = content.products;
//     const path = `/${data.contentfulProductCollections.slug}/${content.slug}`;

//     return (
//       <App>
//         <SEO title={content.title} />
//         <h1>
//             {content.title}
//         </h1>
//         {products &&
//             <RenderProducts path={path} products={products}/>
//         }
//       </App>
//     );
// }

// export default CollectionTemplate;

// export const pageQuery = graphql`
//     query ProductsQuery($id: String!) {
//       contentfulProductCollection(id: {eq: $id}) {
//         title
//         slug
//         products {
//             title
//             slug
//         }
//       }
//       contentfulProductCollections {
//         slug
//       }
//     }
// `
