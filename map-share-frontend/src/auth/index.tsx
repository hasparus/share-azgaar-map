import { authorize } from '../api';

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
    data: undefined as { accountId: string } | undefined,
    isAdmin: undefined as boolean | undefined,
  },
};

export type State = typeof state;
type AuthState = State['auth'];

export const actions = {
  auth: {
    setState: (diff: Partial<AuthState>) => diff,
    authorizeWithDropbox: () => (_: AuthState, acts: AuthActions) => {
      const parsed = parseQueryString(location.hash) as Record<
        'access_token' | 'account_id' | 'uid' | 'token_type',
        string
      >;

      history.replaceState(undefined, '', '/');

      const accountId = parsed.account_id;
      authorize(accountId).then(acts.setState);

      return { data: { accountId } };
    },
  },
};

type AuthActions = typeof actions['auth'];
export function handleAuthQueryString(main: typeof actions) {
  if (location.pathname === '/auth') {
    main.auth.authorizeWithDropbox();
  }
}

export * from './LoginButton';
export * from './AdminLoginLink';
