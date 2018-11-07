import { css } from 'emotion';
import { h, VNode } from 'hyperapp';

import { Component } from './Component';
import { classNames } from './utils/classNames';

const className = css`
  bottom: 1em;
  margin: 1em;
  display: flex;
  justify-content: center;
`;

export const Footer: Component<{}> = (attrs, children) => (
  <footer className={className} {...attrs}>
    {children}
  </footer>
);
