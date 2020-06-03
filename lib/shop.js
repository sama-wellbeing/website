// const path = require('path');
// // Collections being the top level, a collection of collections
// const collectionsView = path.resolve('./src/templates/shop/collections.js');
// // Single collection
// const collectionView = path.resolve('./src/templates/shop/collection.js');
// // Single Product View
// const productView = path.resolve('./src/templates/shop/product.js');

// const buildShop = (createPage, data) => {
// // Shop related stuff
//   const CollectionsOverview = data.contentfulProductCollections;
//   // Single product category
//   const Collections = CollectionsOverview.collections;

//   createPage({
//     path: `/${CollectionsOverview.slug}/`,
//     component: collectionsView,
//     context: {
//       slug: CollectionsOverview.slug,
//       id: CollectionsOverview.id
//     },
//   })

//   Collections.forEach(collection => {
//     createPage({
//       path: `/${CollectionsOverview.slug}/${collection.slug}/`,
//       component: collectionView,
//       context: {
//         slug: collection.slug,
//         id: collection.id
//       },
//     });

//     if (collection.products) {
//       collection.products.forEach(product => {
//         createPage({
//           path: `/${CollectionsOverview.slug}/${collection.slug}/${product.slug}/`,
//           component: productView,
//           context: {
//             slug: product.slug,
//             id: product.id
//           },
//         })
//       });
//     }
//   });
// }

// module.exports.buildShop = buildShop;
