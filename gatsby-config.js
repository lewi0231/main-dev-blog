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
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/logo.png`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options:
      {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
        ]
      },

    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `notes`,
        // Path to the directory
        path: `${__dirname}/src/projects/`
      },
    },
  ],
  siteMetadata: {
    title: 'Studio Dev',
    description: 'A portfolio website',
    contact: 'studio.dev888@gmail.com'
  },
}
