import { css } from 'emotion';
import { Component, h } from 'hyperapp';

import { AUTHENTICATION_URL } from './authenticationUrl';
import { State } from './index';

const adminLoginLinkStyles = css`
  font-size: 0.6em;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

export type AdminLoginLinkAttrs = {};
export const AdminLoginLink: Component<
  AdminLoginLinkAttrs,
  State
> = () => st => {
  switch (st.auth.isAdmin) {
    case undefined:
      return (
        <a className={adminLoginLinkStyles} href={AUTHENTICATION_URL}>
          admin
        </a>
      );
    case false:
      return null;
    case true:
      return (
        <span
          style={{
            fontSize: '0.6em',
          }}
        >
          logged in
        </span>
      );
    default:
      throw Error('invalid state');
  }
};
