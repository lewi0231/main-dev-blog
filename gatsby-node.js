const path = require('path')

const templatePath = path.resolve('./src/templates/tutorial-details.js')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query Tutorials {
            allMdx{
                nodes{
                    frontmatter{
                        slug
                    }
                    internal {
                        contentFilePath
                    }
                }
            }
        }
    `)

    data.allMdx.nodes.forEach(node => {
        actions.createPage({
            path: '/tutorials/' + node.frontmatter.slug,
            component: `${templatePath}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                slug: node.frontmatter.slug
            }
        })
    })
}