module.exports = {
  siteMetadata: {
    title: `E-commerce Snipcart and Gatsby Starter`,
    author: `Issy Dennis`,
    description: `A simple e-commerce shop using Gatsby and Snipcart.`,
    siteUrl: `https://dazzling-snyder-43eb54.netlify.app`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/items`,
        name: `items`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Snipcart Starter`,
        short_name: `Gatsby Snipcart`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `thistle`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        //replace with own Snipcart API key
        apiKey: 'YThhYWRhY2YtMTRjMy00ZDZhLWIyYTgtYWYzZjBmNzExNTZkNjM3NDI4NjQ2NDE0NzYzODk3',
        autopop: true,
          }
    },
    `gatsby-plugin-styled-components`,
  ],
}
