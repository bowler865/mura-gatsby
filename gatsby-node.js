const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMuraNode {
          edges {
            node {
              contentid
              filename
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allMuraNode.edges.forEach(({ node }) => {
      createPage({
        path: `${node.filename}`,
        component: path.resolve(`./src/templates/resource.js`),
        context: {
          contentid: node.contentid
        },
      })
    })
    resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
};