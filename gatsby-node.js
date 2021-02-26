const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      {
        blogs: allPrismicBlogs {
          nodes {
            uid
          }
        }
      }
    `)
    result.data.blogs.nodes.forEach(item => {
        createPage({
          path: `/blogs/${item.uid}`,
          component: path.resolve(`src/templates/BlogTemplate.js`),
          context: {
            slug: item.uid,
          },
        })
      })
    }