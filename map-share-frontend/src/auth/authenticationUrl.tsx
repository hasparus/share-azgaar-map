import { Dropbox } from 'dropbox';

const DROPBOX_CLIENT_ID = 'mivohghnu5zxdto';

const dbx = new Dropbox({ clientId: DROPBOX_CLIENT_ID, fetch });

export const AUTHENTICATION_URL = dbx.getAuthenticationUrl(
  `${location.href}auth`
);
