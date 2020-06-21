import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom';
import { css } from '@emotion/core';
import Img from 'gatsby-image';

import SearchLinkPreview from './search-link-preview';

import useAlgoliaSearchLogo from '../hooks/useAlgoliaSearchLogo';

const searchClient = algoliasearch(
  'JFJVNS77EJ',
  'd6f96ffc010ae80c361bfb34e57a0b3e',
);

const Results = connectStateResults(({ searchState }) => {
  const AlgoliaLogo = useAlgoliaSearchLogo();

  return searchState && searchState.query ? (
    <>
      <div>
        <p
          css={css`
            margin: 2rem 0 0 2rem;
          `}
        >
          Search results:
        </p>
        <Hits hitComponent={SearchLinkPreview} />
      </div>
      <a
        href='https://www.algolia.com/'
        target='_blank'
        rel='norefferer'
        css={css`
          display: block;
          margin: 0.5rem auto;
          width: 150px;
        `}
      >
        <Img
          fluid={AlgoliaLogo.img}
          css={css`
            width: 150px;
          `}
        />
      </a>
    </>
  ) : null;
});

const Searchbar = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName='Blog'>
      <SearchBox
        css={css`
          position: relative;
          padding: 0 calc((100% - 50rem) / 2);
          margin-bottom: 5rem;

          @media only screen and (max-width: 33.125em) {
            padding: 0 calc((100% - 40rem) / 2);
          }
          @media only screen and (max-width: 21.25rem) {
            padding: 0 calc((100% - 35rem) / 2);
          }

          input {
            border-radius: 1rem;
            position: relative;
            top: 0;
            display: inline-block;
            padding: 1rem 8rem 1rem 1rem;
            width: 50rem;
            outline: none;

            @media only screen and (max-width: 33.125em) {
              width: 40rem;
            }
            @media only screen and (max-width: 21.25rem) {
              width: 35rem;
            }

            :focus,
            :focus ~ button {
              border-color: blue;
              fill: blue;
              color: blue;
            }
          }

          button {
            position: absolute;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            bottom: 50%;
            transform: translate(-150%, 50%);
            transition: all 0.25s;
            cursor: pointer;
            background: none;
            border: 2px solid;
            outline: none;

            :nth-last-of-type(1) {
              transform: translate(50%, 50%);
            }

            &:hover {
              border-color: blue;
              fill: blue;
              color: blue;
              background-color: rgba(21, 32, 555, 0.2);
            }

            @media only screen and (max-width: 33.125em) {
              :nth-last-of-type(1) {
                transform: translate(-150%, 50%);
              }
              :first-of-type {
                opacity: 0;
              }
            }

            svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        `}
      />
      <div
        css={css`
          position: absolute;
          width: 90rem;
          left: 50%;
          transform: translate(-50%, 0);
          max-height: 50rem;
          overflow-y: scroll;
          z-index: 100;
          background: #fff;
          box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.5);
          border-radius: 1rem;
          @media only screen and (max-width: 62.5em) {
            width: 96%;
            transform: translate(-50%, -3rem);
          }

          ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
            background-color: #f5f5f5;
          }

          ::-webkit-scrollbar {
            background-color: hsla(240, 60%, 30%, 0.3);
          }
          ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
            background-color: #555;
          }

          * {
            list-style: none;
          }
        `}
      >
        <Results />
      </div>
    </InstantSearch>
  );
};

export default Searchbar;
