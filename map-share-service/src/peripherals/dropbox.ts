import fetch from 'isomorphic-fetch';

import { Dropbox } from 'dropbox';

const { DROPBOX_ACCESS_TOKEN } = process.env;
const dbx = new Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN, fetch });

export default dbx;
