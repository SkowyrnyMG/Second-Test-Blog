import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Scene from '../images/svg/undraw-gatsby.svg';
import gsap from 'gsap';

const IndexPage = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const dude = elements.getElementById('dude');
    const gatsbyLogo = elements.getElementById('gatsby-logo');
    const gatsbyText = elements.getElementById('gatsby-text');
    const line = elements.getElementById('line');
    const grass = elements.getElementById('grass');

    gsap.set([...grass.children, dude, gatsbyLogo, gatsbyText, line], {
      autoAlpha: 0,
    });
    gsap.set(gatsbyLogo, { transformOrigin: '50% 100%' });
    gsap.set(gatsbyText, { transformOrigin: '50% 0%' });
    gsap.set(line, { transformOrigin: '0% 0%' });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(dude, { x: '-=300' }, { duration: 1, x: `+=300`, autoAlpha: 1 })
      .fromTo(
        gatsbyLogo,
        { scaleY: 0 },
        { duration: 1, scaleY: 1, autoAlpha: 1 },
      )
      .fromTo(
        gatsbyText,
        { scaleY: 0 },
        { duration: 1, scaleY: 1, autoAlpha: 1 },
        '-=1',
      )
      .fromTo(line, { scaleX: 0 }, { duration: 0.8, scaleX: 1, autoAlpha: 1 })
      .to(grass.children, { duration: 4, autoAlpha: 1, stagger: 1 });
  });

  return (
    <Layout>
      <SEO title='Home' />

      <h1
        css={css`
          @keyframes appear {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0%);
              opacity: 1;
            }
          }

          margin-bottom: -12rem;
          text-align: center;
          opacity: 0;
          font-size: 5rem;

          animation: appear 0.5s forwards ease-in-out;
        `}
      >
        First GatsbyJS Blog!
      </h1>
      <div
        ref={wrapper}
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Scene
          css={css`
            @media only screen and (max-width: 62.5em) {
              width: 80%;
              max-height: 30rem;
              margin-top: 15rem;
            }
          `}
        />
      </div>
      <button
        css={css`
          display: block;

          border-radius: 2rem;
          border: 5px solid #000048;
          color: #000048;
          background: none;
          margin: 5rem auto 5rem auto;
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
          Go to blog!
        </Link>
      </button>
    </Layout>
  );
};

export default IndexPage;
