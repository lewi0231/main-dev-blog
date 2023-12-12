/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `notes`,
        // Path to the directory
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Web Wondering',
    description: 'portfolio',
    copyright: 'this is copyright message',
  },
  contact: 'me@thisisanexampleemail.com'
}
