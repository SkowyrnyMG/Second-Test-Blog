import React from 'react';
import Img from 'gatsby-image';
import useLogo from '../hooks/useLogo';

const Logo = () => {
  const { img } = useLogo();
  return <Img fluid={img} />;
};

export default Logo;
