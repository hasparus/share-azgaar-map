import { Dropbox } from 'dropbox';
import { Component, h } from 'hyperapp';

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
    data: null,
  },
};

export type State = typeof state;

export const actions = {
  auth: {
    authorizeWithDropbox: () => {
      const parsed = parseQueryString(location.hash) as Record<
        'access_token' | 'account_id' | 'uid' | 'token_type',
        string
      >;

      const data = {
        accessToken: parsed.access_token,
        accountId: parsed.account_id,
        uid: parsed.uid,
      };
      history.replaceState(null, '', '/');

      return { data };
    },
  },
};

export type Actions = typeof actions;

export type LoginButtonAttrs = {};
export const LoginButton: Component<LoginButtonAttrs> = () => (
  <a className="anchor-button button button--big" href={AUTHENTICATION_URL}>
    Login
  </a>
);

export type AdminLoginLinkAttrs = {};
export const AdminLoginLink: Component<AdminLoginLinkAttrs> = () => (
  <a className="admin-login-link" href={AUTHENTICATION_URL}>
    admin
  </a>
);

export function handleAuthQueryString(main: Actions) {
  if (location.pathname === '/auth') {
    main.auth.authorizeWithDropbox();
  }
}
