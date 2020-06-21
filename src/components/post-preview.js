import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

const PostPreview = ({
  id,
  photo,
  fluidPhoto,
  defaultPhoto,
  title,
  excerpt,
  tagName,
}) => {
  return (
    <Link
      key={id}
      to={`/blog/${id}`}
      css={css`
        list-style: none;
        text-decoration: none;
      `}
    >
      <article
        key={id}
        css={css`
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding: 5rem;
          transition: all 0.25s;
          flex-direction: column;
          margin: 0 2rem 2rem;
          border-bottom: 1px solid gray;

          @media not screen and (max-width: 62.5em) {
            :hover {
              box-shadow: 0 0 1rem -0.2rem #00004850;
              transform: scale(1.02);
            }
            border-radius: 2rem;
            border-bottom: none;
            flex-direction: row;
          }
        `}
      >
        {
          <Img
            css={css`
              width: 200px;
              min-width: 200px;
              height: 100%;
              margin-right: 2rem;
              border-radius: 2rem;

              @media only screen and (max-width: 62.5em) {
                width: 100%;
              }
            `}
            fluid={photo ? fluidPhoto.fluid : defaultPhoto}
          />
        }
        <div>
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <p
            css={css`
              font-size: 1.8rem;
            `}
          >
            #{tagName}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default PostPreview;
