import { graphql, useStaticQuery } from 'gatsby';

const useLogo = () => {
  const query = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { logoImage } = query;

  return {
    img: logoImage.childImageSharp.fluid,
  };
};

export default useLogo;
