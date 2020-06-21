/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import GlobalStyles from '../components/global-styles';
import Header from './header';
import Footer from './footer';
import './layout.css';

import { css } from '@emotion/core';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={css`
          margin: 0 auto;
          max-width: 960px;
          width: 100%;
        `}
      >
        <main
          css={css`
            width: 100%;
          `}
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
