import { graphql, useStaticQuery } from 'gatsby';

const useAlgoliaSearchLogo = () => {
  const query = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "algolia-search.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { logo } = query;

  return {
    img: logo.childImageSharp.fluid,
  };
};

export default useAlgoliaSearchLogo;
