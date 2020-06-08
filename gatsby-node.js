const Promise = require('bluebird');
const path = require('path');

const { buildPages } = require(path.resolve(__dirname, "lib/pages"));
const { buildBlog } = require(path.resolve(__dirname, "lib/blog"));
const { GatsbyNodeQuery } = require(path.resolve(__dirname, "lib/queries"));

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~scss": path.resolve(__dirname, "src/scss"),
        "~components": path.resolve(__dirname, "src/components"),
        "~templates": path.resolve(__dirname, "src/templates"),
        "~hooks": path.resolve(__dirname, "src/hooks"),
        "~utils": path.resolve(__dirname, "src/utils"),
        "~images": path.resolve(__dirname, "src/images")
      }
    }
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(GatsbyNodeQuery).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        buildPages(createPage, result.data);
        buildBlog(createPage, result.data);

        // buildShop(createPage, result.data);
      })
    )
  })
}