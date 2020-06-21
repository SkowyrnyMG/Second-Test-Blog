const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = require.resolve('./src/templates/post.js');

  const result = await graphql(`
    query {
      allPosts: allDatoCmsArticle {
        edges {
          node {
            id
            title
            excerpt
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('Pages creations failed.');
  }

  const posts = result.data.allPosts.edges;

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 5,
    itemsPerFirstPage: 3,
    pathPrefix: '/blog',
    component: require.resolve('./src/templates/blog.js'),
  });

  posts.forEach(post => {
    createPage({
      path: `/blog/${post.node.id}`,
      component: postTemplate,
      context: {
        id: post.node.id,
      },
    });
  });
};
