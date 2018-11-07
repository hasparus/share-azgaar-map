import { Component, h } from 'hyperapp';

import { FeatherIcon } from '../FeatherIcon';
import * as styles from '../styles';
import { VisuallyHidden } from '../VisuallyHidden';

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
          <FeatherIcon kind="lock" aria-hidden />
          <VisuallyHidden>admin</VisuallyHidden>
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
