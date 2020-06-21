import React from 'react';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

import Layout from '../components/layout';
import SEO from '../components/seo';

import useDefaultImage from '../hooks/useDefaultImg';

const Post = ({ data }) => {
  const defaultImage = useDefaultImage();

  let disqusConfig = {
    url: `http://localhost:8000//blog/${data.post.id}`,
    identifier: data.post.id,
    title: data.post.title,
  };

  return (
    <Layout>
      <SEO title={data.post.title} />
      <article
        css={css`
          width: 100%;
          @media only screen and (max-width: 62.5em) {
            padding: 0 5rem;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            text-align: center;
          }

          img {
            border-radius: 3rem;
          }

          span {
            filter: drop-shadow(0px 0px 4px #4444dd);
            max-width: 750px !important;
            margin: 5rem auto 5rem auto !important;
          }

          div {
            margin: 0 auto;
          }

          *:not(p) {
            margin-right: auto;
            margin-left: auto;
          }

          p {
            margin-bottom: 5rem;
          }
        `}
      >
        <h1>{data.post.title}</h1>
        <p
          css={css`
            font-size: 2rem;
            font-style: italic;
            text-align: center;
          `}
        >
          {data.post.author.author} ||{' '}
          {data.post.meta.firstPublishedAt.substring(0, 10)} || #
          {data.post.category.tagname}
        </p>
        {/* <div
          css={css`
            padding: 0;
            margin: 0 auto !important;
            border-radius: 2rem;
            height: 60rem;
            width: 90rem;
            overflow: hidden;
            position: relative;
            @media only screen and (max-width: 58.135em) {
              width: 500px;
              padding-bottom: 5rem;
              height: 100%;
            }
          `}
        > */}
        {
          <Img
            css={css`
              margin: 0 !important;
              padding: 0;
              /* min-width: 900px; */
              border-radius: 5rem;

              & > * {
                margin-top: 0 !important;
                padding: 0;
              }

              /* @media only screen and (max-width: 58.135em) {
                width: 100%;
              } */
            `}
            fluid={data.post.photo ? data.post.photo.fluid : defaultImage.img}
          />
        }
        {/* </div> */}
        <p
          css={css`
            display: block;
            width: 90%;
            border-left: 5px solid #000048;
            padding: 3rem 2rem;
            margin: 5rem auto 0;
            font-style: italic;
            font-weight: 400;
            color: #0000489f;
            background-color: #0000480f;
          `}
        >
          {data.post.excerpt}
        </p>

        <MDXRenderer>{data.post.paragraph.childMdx.body}</MDXRenderer>
      </article>
      <button
        css={css`
          display: block;

          border-radius: 2rem;
          border: 5px solid #000048;
          color: #000048;
          background: none;
          margin: 0 auto 5rem auto;
          outline: none;
          cursor: pointer;
          transition: all 0.25s;

          :hover {
            background-color: #000048;
          }
        `}
      >
        <Link
          css={css`
            display: inline-block;
            transition: color 0.25s;
            padding: 2rem 3rem;
            :hover {
              color: #fff;
            }
          `}
          to='/blog/'
        >
          Back to all posts
        </Link>
      </button>
      <Disqus
        css={css`
          margin: 0 5rem;
        `}
        config={disqusConfig}
      />
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($id: String!) {
    post: datoCmsArticle(id: { eq: $id }) {
      id
      title
      excerpt
      author {
        author
      }
      category {
        tagname
      }
      meta {
        firstPublishedAt
      }
      photo {
        fluid(maxWidth: 800) {
          ...GatsbyDatoCmsFluid
        }
      }
      paragraph: paragraphNode {
        childMdx {
          body
        }
      }
    }
  }
`;
