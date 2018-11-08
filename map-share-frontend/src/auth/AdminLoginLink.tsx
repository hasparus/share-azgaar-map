import { Component, h } from 'hyperapp';

import { AccessibleIcon } from '../AccessibleIcon';
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
        // tslint:disable-next-line:react-a11y-anchors -- false positive
        <a
          className={styles.flatButton}
          style={{
            textDecoration: 'none',
          }}
          href={AUTHENTICATION_URL}
          title="login as admin"
        >
          <AccessibleIcon kind="unlock" label="admin" />
        </a>
      );
    case false:
      return null;
    case true:
      return <span>logged in</span>;
    default:
      throw Error('invalid state');
  }
};
