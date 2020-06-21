import React from 'react';
import { css } from '@emotion/core';

const CategorySelector = ({ setState }) => (
  <div
    css={css`
      margin: 0 auto 3rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      input {
        opacity: 0;
        transform: translateX(9999px);
        appearance: none;

        :checked + label {
          font-weight: bold;
          color: #3f2fc8;
        }
      }
      label {
        display: inline-block;
        cursor: pointer;
        margin-top: 0;

        &:not(:last-child) {
          margin-right: 3rem;
        }

        :hover {
          color: #3f2fc8;
        }
      }
    `}
  >
    <span>Category:</span>
    <input
      type='radio'
      id='all-category'
      value=''
      name='category'
      defaultChecked
      onChange={() => setState('all')}
    />
    <label htmlFor='all-category'>all</label>
    <input
      type='radio'
      id='first-category'
      value='workout'
      name='category'
      onChange={() => setState('workout')}
    />
    <label htmlFor='first-category'>workout</label>
    <input
      type='radio'
      id='second-category'
      value='bitcoin'
      name='category'
      onChange={() => setState('bitcoin')}
    />
    <label htmlFor='second-category'>bitcoin</label>
    <input
      type='radio'
      id='third-category'
      value='localnews'
      name='category'
      onChange={() => setState('localnews')}
    />
    <label htmlFor='third-category'>localnews</label>
  </div>
);

export default CategorySelector;
