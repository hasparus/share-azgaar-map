import { RequestHandler } from 'micro';
import fetch from 'isomorphic-fetch';
import { Dropbox } from 'dropbox';

const GENERATOR_URL = 'http://localhost:5000/';

const { DROPBOX_ACCESS_TOKEN } = process.env;
const dbx = new Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN, fetch });

import { Map } from '../../../map-share-common';

async function makeMapUrl(path: string) {
  const { link } = await dbx.filesGetTemporaryLink({
    path: path,
  });
  return `${GENERATOR_URL}/?maplink=${encodeURIComponent(link)}`;
}

type RootResult = {
  maps: Map[];
};
const rootHandler: RequestHandler = async (req, res): Promise<RootResult> => {
  const { entries: files } = await dbx.filesListFolder({ path: '' });

  const maps = files.filter(file => file.name.match('.map'));
  const mapUrls = await Promise.all(
    maps.map(file => makeMapUrl(file.path_lower!))
  );

  return {
    maps: maps.map((file, index) => ({
      path: file.path_lower || '?',
      temporaryLink: mapUrls[index],
    })),
  };
};

export default rootHandler;
