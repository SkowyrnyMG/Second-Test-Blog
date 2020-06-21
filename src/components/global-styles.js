import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        margin: 0;
        box-sizing: border-box;
      }

      html {
        margin: 0;
        padding: 0;
        font-size: 62.5%;
        font-family: 'Baloo Chettan 2', cursive;

        @media only screen and (max-width: 62.5em) {
          font-size: 58.5%;
        }
        @media only screen and (max-width: 37.5em) {
          font-size: 50.5%;
        }
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 2.5rem;
        line-height: 1.4;
        min-height: 100vh;
        overflow: hidden;

        font-family: 'Baloo Chettan 2', cursive;

        > div {
          margin-top: 0;

          min-height: 100vh;

          > div {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
        }
      }

      * + * {
        margin-top: 1rem;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        line-height: 1;
        color: #000048;
        @media only screen and (max-width: 62.5em) {
          text-align: center;
        }

        + * {
          margin-top: 0.5rem;
        }
      }

      h1 {
        font-size: 6rem;
        margin-bottom: 8rem;
      }
      h2 {
        font-size: 5rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
      }
      h3 {
        font-size: 4rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
      }
      h4 {
        font-size: 3rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
      }
      h5 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
      }
      h6 {
        font-size: 2rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
      }

      @media only screen and (max-width: 37.5em) {
        h1 {
          font-size: 4rem;
          margin-bottom: 8rem;
        }
        h2 {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          margin-top: 2rem;
        }
        h3 {
          font-size: 3rem;
          margin-bottom: 2rem;
          margin-top: 2rem;
        }
        h4 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          margin-top: 1rem;
        }
      }

      a {
        color: #000048;
        text-decoration: none;
      }

      p {
        @media only screen and (max-width: 62.5rem) {
          text-align: justify;
        }
      }
    `}
  />
);

export default GlobalStyles;
