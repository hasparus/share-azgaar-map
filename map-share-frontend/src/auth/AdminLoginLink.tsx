import { Component, h } from 'hyperapp';

import * as styles from '../styles';

import { AUTHENTICATION_URL } from './authenticationUrl';
import { State } from './index';

export type AdminLoginLinkAttrs = {};
export const AdminLoginLink: Component<
  AdminLoginLinkAttrs,
  State
> = () => st => {
  switch (st.auth.isAdmin) {
    case undefined:
      return (
        <a
          className={styles.textButton}
          style={{
            textDecoration: 'none',
          }}
          href={AUTHENTICATION_URL}
        >
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
