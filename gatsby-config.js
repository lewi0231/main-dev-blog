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
    `gatsby-plugin-ffmpeg`,
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/circlelogo.png`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options:
      {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-videos`,
            options: {
              pipelines: [
                {
                  name: "vp9",
                  transcode: (chain) =>
                    chain
                      .videoCodec("libvpx-vp9")
                      .noAudio()
                      .outputOptions(["-crf 20", "-b:v 0"]),
                  maxHeight: 480,
                  maxWidth: 900,
                  fileExtension: "webm",
                },
                {
                  name: "h264",
                  transcode: (chain) =>
                    chain
                      .videoCodec("libx264")
                      .noAudio()
                      .addOption("-profile:v", "main")
                      .addOption("-pix_fmt", "yuv420p")
                      .outputOptions(["-movflags faststart"])
                      .videoBitrate("1000k"),
                  maxHeight: 480,
                  maxWidth: 900,
                  fileExtension: "mp4",
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            }
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              // urlOverrides: [
              //   {
              //     id: "youtube",
              //     embedURL: (videoId) =>
              //       `https://www.youtube-nocookie.com/embed/${videoId}`,
              //   },
              // ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              // iframeId: true, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
              // sandbox: 'allow-same-origin allow-scripts allow-presentation', // Optional: iframe sandbox options - Default: undefined
            },
          },
          "gatsby-remark-responsive-iframe", //Optional: Must be loaded after gatsby-remark-embed-video
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `videos`,
        // Path to the directory
        path: `${__dirname}/src/videos/`
      },
    },
  ],
  siteMetadata: {
    title: 'Studio Dev - Paul Lewis - Shopify Web Developer',
    description: 'I offer Shopify theme customization and web development services',
    contact: 'studio.dev888@gmail.com',
    siteUrl: 'https://studiodev.ink'
  },
}
