import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';

import SEO from '../components/seo';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import Searchbar from '../components/algolia-searchbar';
import CategorySelector from '../components/category-selector';
import PageIndex from '../components/page-index';

import useDefaultImage from '../hooks/useDefaultImg';

export const allPostsQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allPosts: allDatoCmsArticle(
      sort: { fields: meta___firstPublishedAt, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          paragraph
          excerpt
          category {
            tagname
          }
          photo {
            fluid(maxWidth: 400) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;

const BlogPage = ({ data, pageContext }) => {
  const posts = data.allPosts.edges;
  const defaultImage = useDefaultImage();

  return (
    <Layout>
      <SEO title='blog' />
      <h1
        css={css`
          text-align: center;
        `}
      >
        Blog Page works
      </h1>
      <Searchbar />

      {posts.map(post => (
        <PostPreview
          key={post.node.id}
          id={post.node.id}
          photo={post.node.photo}
          fluidPhoto={post.node.photo}
          defaultPhoto={defaultImage.img}
          title={post.node.title}
          excerpt={post.node.excerpt}
          tagName={post.node.category.tagname}
        />
      ))}
      <PageIndex pageContext={pageContext} />
    </Layout>
  );
};

export default BlogPage;
