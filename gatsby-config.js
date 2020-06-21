require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const blogQuery = `
 query {
  allDatoCmsArticle {
    nodes {
      title
      excerpt
      objectID: id
      category {
        tagname
      }
    }
  }
}

`;

const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) => data.allDatoCmsArticle.nodes,
    indexName: process.env.ALGOLIA_INDEX_NAME,
  },
];

module.exports = {
  siteMetadata: {
    title: `Second test blog`,
    description: `Just a second test blog to build up my GATSBY setup convience..`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000,
      },
      enablePartialUpdates: false,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-datocms`,
            options: {
              apiToken: process.env.DATO_API_TOKEN,
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-remark-images-datocms`,
      options: {
        maxWidth: 900,
      },
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-images-datocms`,
            options: {
              apiToken: process.env.DATO_API_TOKEN,
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
          { resolve: `gatsby-transformer-remark` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `second test blog`,
        short_name: `2nd test`,
        start_url: `/`,
        background_color: `#000048`,
        theme_color: `#000048`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.DISQS_API_TOKEN,
      },
    },
  ],
};
