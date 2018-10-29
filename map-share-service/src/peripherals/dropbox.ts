import fetch from 'isomorphic-fetch';

import { Dropbox } from 'dropbox';

const { DROPBOX_ACCESS_TOKEN } = process.env;

if (!DROPBOX_ACCESS_TOKEN) {
  throw Error('process.env.DROPBOX_ACCESS_TOKEN missing.');
}

export const dbx = new Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN, fetch });
