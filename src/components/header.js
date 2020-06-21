import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Logo from './logo';

const NavLink = styled(Link)`
  text-decoration: none;

  &:not(:last-of-type) {
    margin-right: 5rem;
  }

  &.activeNavLink {
    color: #3f2fc8;
    font-weight: bold;
  }
`;

const LogoLink = styled(Link)`
  width: 5rem;
`;

const Header = ({ siteTitle }) => (
  <header
    css={css`
      padding: 3rem calc((100% - 960px) / 2);
      box-shadow: 0 0 1rem -0.3rem #000048;
      margin-bottom: 10rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media only screen and (max-width: 62.5em) {
        justify-content: space-evenly;
      }
    `}
  >
    <LogoLink to='/'>
      <Logo />
    </LogoLink>
    <nav>
      <NavLink to='/' activeClassName='activeNavLink'>
        Home
      </NavLink>
      <NavLink to='/blog/' activeClassName='activeNavLink'>
        Blog
      </NavLink>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
