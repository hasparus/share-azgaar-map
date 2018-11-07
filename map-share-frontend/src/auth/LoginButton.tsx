import { css } from 'emotion';
import { Component, h } from 'hyperapp';

import { AUTHENTICATION_URL } from './authenticationUrl';

const anchorButtonStyles = css`
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`;

export type LoginButtonAttrs = {};

export const LoginButton: Component<LoginButtonAttrs> = () => (
  <a
    className={`${anchorButtonStyles} button button--big`}
    href={AUTHENTICATION_URL}
  >
    Login
  </a>
);
