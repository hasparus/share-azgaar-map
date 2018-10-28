import fetch from 'isomorphic-fetch';

import { Dropbox } from 'dropbox';

const { DROPBOX_ACCESS_TOKEN } = process.env;
export const dbx = new Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN, fetch });
