import { css } from 'emotion';
import { h } from 'hyperapp';

import { Component } from './Component';

const footerStyle = css`
  bottom: 1em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    margin: 0 0.5em;
    font-size: 0.6em;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Footer: Component = (attrs, children) => (
  <footer className={footerStyle} {...attrs}>
    {children}
  </footer>
);
