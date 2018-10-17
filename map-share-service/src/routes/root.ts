import { RequestHandler } from 'micro';

import { Map, GENERATOR_URL } from '../../../map-share-common';
import dbx from '../peripherals/dropbox';

async function makeMapUrl(path: string) {
  const { link } = await dbx.filesGetTemporaryLink({
    path: path,
  });
  return `${GENERATOR_URL}/?maplink=${encodeURIComponent(link)}`;
}

type RootResult = {
  maps: Map[];
};
export const rootHandler: RequestHandler = async (
  req,
  res
): Promise<RootResult> => {
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
