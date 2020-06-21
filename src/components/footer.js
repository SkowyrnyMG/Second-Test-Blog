import React from 'react';
import { css } from '@emotion/core';

const Footer = () => (
  <footer
    css={css`
      margin-top: auto;
      position: relative;
      padding: 2rem calc((100% - 960px) / 2);
      display: flex;
      justify-content: center;
      background-color: #000048;
      margin-bottom: 0;
      color: #fff;
    `}
  >
    <span>
      © {new Date().getFullYear()}, Built by{' '}
      <a
        href='https://www.github.com/SkowyrnyMG'
        target='_blank'
        rel='noreferrer'
        css={css`
          color: #fff;
        `}
      >
        Mateusz Gruźla
      </a>
    </span>
  </footer>
);

export default Footer;
