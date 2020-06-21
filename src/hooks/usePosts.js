import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const {
    data: { edges },
  } = useStaticQuery(graphql`
    query {
      data: allDatoCmsArticle(
        sort: { fields: meta___firstPublishedAt, order: DESC }
      ) {
        edges {
          node {
            id
            title
            paragraph
            excerpt
            category {
              tagname
            }
            photo {
              fluid(maxWidth: 400) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    }
  `);

  return edges;
};

export default usePosts;
