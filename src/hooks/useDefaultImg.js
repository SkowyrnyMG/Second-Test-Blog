import { graphql, useStaticQuery } from 'gatsby';

const useDefaultImage = () => {
  const query = useStaticQuery(graphql`
    query {
      defaultImage: file(relativePath: { eq: "default-post-img.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { defaultImage } = query;

  return {
    img: defaultImage.childImageSharp.fluid,
  };
};

export default useDefaultImage;
