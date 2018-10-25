import { Dropbox } from 'dropbox';
import { Component, h, VNode } from 'hyperapp';

import { authorize } from '../api';

// tslint:disable-next-line:no-import-side-effect
import './styles.scss';

const DROPBOX_CLIENT_ID = 'mivohghnu5zxdto';

const dbx = new Dropbox({ clientId: DROPBOX_CLIENT_ID, fetch });
const AUTHENTICATION_URL = dbx.getAuthenticationUrl(`${location.href}auth`);

function parseQueryString(query: string) {
  const ret: { [k: string]: string[] | string | null } = Object.create(null);

  if (typeof query !== 'string') {
    return ret;
  }

  const str = query.trim().replace(/^(\?|#|&)/, '');

  if (!str) {
    return ret;
  }

  str.split('&').forEach(param => {
    const parts = param.replace(/\+/g, ' ').split('=');
    let key = parts.shift();
    let val: string | undefined | null =
      parts.length > 0 ? parts.join('=') : undefined;

    key = decodeURIComponent(key || '');

    val = val === undefined ? '' : decodeURIComponent(val);

    const retVal = ret[key];
    if (ret[key] === undefined) {
      ret[key] = val;
    } else if (Array.isArray(retVal)) {
      retVal.push(val);
    } else {
      ret[key] = [ret[key] as string, val];
    }
  });

  return ret;
}

export const state = {
  auth: {
    data: undefined,
    isAdmin: undefined as boolean | undefined,
  },
};

type State = typeof state;
type AuthState = State['auth'];

export const actions = {
  auth: {
    setState: (diff: Partial<AuthState>) => diff,
    authorizeWithDropbox: () => async (_: AuthState, acts: AuthActions) => {
      const parsed = parseQueryString(location.hash) as Record<
        'access_token' | 'account_id' | 'uid' | 'token_type',
        string
      >;

      history.replaceState(undefined, '', '/');

      const isAdmin = await authorize(parsed.account_id);
      acts.setState(isAdmin);
    },
  },
};

type AuthActions = typeof actions['auth'];
export type LoginButtonAttrs = {};
export const LoginButton: Component<LoginButtonAttrs> = () => (
  <a className="anchor-button button button--big" href={AUTHENTICATION_URL}>
    Login
  </a>
);

export type AdminLoginLinkAttrs = {};

declare namespace hyperapp {
  export interface View<State, Actions> {
    // tslint:disable-next-line:callable-types
    (state: State, actions: Actions): VNode<object> | null;
  }
}

// tslint:disable-next-line:no-any
const HYPERAPP_NULL = null as any;

export const AdminLoginLink: Component<
  AdminLoginLinkAttrs,
  State
> = () => st => {
  switch (st.auth.isAdmin) {
    case undefined:
      return (
        <a className="admin-login-link" href={AUTHENTICATION_URL}>
          admin
        </a>
      );
    case false:
      return HYPERAPP_NULL;
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

export function handleAuthQueryString(main: typeof actions) {
  if (location.pathname === '/auth') {
    main.auth.authorizeWithDropbox();
  }
}
