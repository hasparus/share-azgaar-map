import { css } from 'emotion';
import { h } from 'hyperapp';

import { Component } from './Component';

const footerStyle = css`
  bottom: 1em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const footerItemStyle = css`
  :not(:first-child) {
    border-left: 1px dashed currentColor;
  }
  padding: 0 1em;
  font-size: 0.6em;
  color: #333;
  text-decoration: none;
`;

export const Footer: Component = (attrs, children) => (
  <footer className={footerStyle} {...attrs}>
    {children.map(child => (
      <div className={footerItemStyle}>{child}</div>
    ))}
  </footer>
);
