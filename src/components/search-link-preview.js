import React from 'react';
import { Link } from 'gatsby';
import { Highlight } from 'react-instantsearch-dom';
import { css } from '@emotion/core';

const SearchLinkPreview = ({ hit }) => {
  return (
    <Link
      key={hit.objectID}
      to={`/blog/${hit.objectID}`}
      css={css`
        list-style: none;
        text-decoration: none;
      `}
    >
      <article
        key={hit.objectID}
        css={css`
          display: flex;
          align-items: center;
          margin: 2rem;
          padding: 1rem;
          transition: all 0.25s;
          border-bottom: 1px solid #00004850;

          :hover {
            /* box-shadow: 0 0 1rem -0.2rem #00004850; */
            background-color: #00004810;
            /* color: white; */
          }
          :hover > div h2 {
            /* color: white; */
          }
        `}
      >
        <div
          css={css`
            width: 100%;
          `}
        >
          <h5>
            <Highlight hit={hit} attribute='title' tagName='mark' />
          </h5>
          <p
            css={css`
              font-size: 1.8rem;
            `}
          >
            <Highlight hit={hit} attribute='excerpt' tagName='mark' />
          </p>
          <p
            css={css`
              font-size: 1.2rem;
            `}
          >
            #<Highlight hit={hit} attribute='category.tagname' tagName='mark' />
          </p>
        </div>
      </article>
    </Link>
  );
};

export default SearchLinkPreview;
