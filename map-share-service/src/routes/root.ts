import { RequestHandler } from 'micro';

import { dataTransfer } from '../../../map-share-common';
import dbx from '../peripherals/dropbox';
import makeDataTransferMaps from '../makeMaps';

type RootResult = dataTransfer.Maps;
export const rootHandler: RequestHandler = async (): Promise<RootResult> => {
  const { entries: files } = await dbx.filesListFolder({
    path: '',
    include_deleted: false,
  });

  const maps = files.filter(file => file.name.match('.map'));

  return makeDataTransferMaps(maps);
};
