import React from 'react';
import { Link } from 'gatsby';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

const PrevButton = styled(Link)`
  pointer-events: ${({ pagenumber }) => (pagenumber === 1 ? `none` : ` auto`)};
  color: ${({ pagenumber }) => (pagenumber === 1 ? `gray` : `#000048`)};
`;
const NextButton = styled(Link)`
  pointer-events: ${({ pagenumber, numberofpages }) =>
    pagenumber === numberofpages ? `none` : ` auto`};
  color: ${({ pagenumber, numberofpages }) =>
    pagenumber === numberofpages ? `gray` : `#000048`};
`;

const pageIndex = ({ pageContext }) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = pageContext;

  return (
    <div
      css={css`
        bottom: 6rem;
        margin: 5rem auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        a {
          padding: 0rem 2rem;
          background-color: #00004810;

          :focus,
          :active {
            border: 2px dashed #000048 !important;
          }

          &:not(:last-child) {
            border-right: 1px solid #00223311;
          }
        }
      `}
    >
      <nav
        css={css`
          border-radius: 5rem;
        `}
      >
        <PrevButton
          pagenumber={humanPageNumber}
          numberofpages={numberOfPages}
          to={previousPagePath}
        >
          &larr;
        </PrevButton>

        {/* Link to current page - 2 */}
        {humanPageNumber - 2 > 0 && (
          <Link
            to={`/blog/${humanPageNumber - 2 == 1 ? '' : humanPageNumber - 2}`}
          >
            {humanPageNumber - 2}
          </Link>
        )}

        {/* Link to previous page */}
        {humanPageNumber - 1 > 0 && (
          <Link to={previousPagePath}>{humanPageNumber - 1}</Link>
        )}

        {/* Current Page */}
        <Link
          to={`/blog/${humanPageNumber}`}
          css={css`
            pointer-events: none;
            background-color: lightblue !important;
          `}
        >
          {humanPageNumber}
        </Link>

        {/* Link to next page */}
        {humanPageNumber + 1 < numberOfPages + 1 && (
          <Link to={nextPagePath}>{humanPageNumber + 1}</Link>
        )}

        {/* Link to current page + 2 */}
        {humanPageNumber + 2 < numberOfPages && (
          <Link
            to={`/blog/${
              humanPageNumber + 2 == numberOfPages ? '' : humanPageNumber + 2
            }`}
          >
            {humanPageNumber + 2}
          </Link>
        )}

        <NextButton
          pagenumber={humanPageNumber}
          numberofpages={numberOfPages}
          to={nextPagePath}
        >
          &rarr;
        </NextButton>
      </nav>
    </div>
  );
};

export default pageIndex;
