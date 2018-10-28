import { dataTransfer, GENERATOR_URL } from '../../map-share-common';

import { dbx } from './peripherals/dropbox';

async function makeMapUrl(path: string) {
  const { link } = await dbx.filesGetTemporaryLink({
    path: path,
  });

  return `${GENERATOR_URL}/?maplink=${encodeURIComponent(link)}`;
}

export async function makeDataTransferMaps(
  maps: { path_lower?: string }[]
): Promise<dataTransfer.Maps> {
  const mapUrls = await Promise.all(
    // tslint:disable-next-line:no-non-null-assertion
    maps.map(file => makeMapUrl(file.path_lower!))
  );

  return {
    maps: maps.map((file, index) => ({
      path: file.path_lower || '?',
      temporaryLink: mapUrls[index],
    })),
  };
}
