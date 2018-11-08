import { GENERATOR_URL } from '../../map-share-common';

import { dbx } from './peripherals/dropbox';
export async function makeGeneratorMapUrl(path: string) {
  const { link } = await dbx.filesGetTemporaryLink({
    path: path,
  });

  return `${GENERATOR_URL}/?maplink=${encodeURIComponent(link)}`;
}
