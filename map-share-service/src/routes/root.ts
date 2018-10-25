import { RequestHandler } from 'micro';

import { dataTransfer } from '../../../map-share-common';
import { makeDataTransferMaps } from '../makeDataTransferMaps';
import { dbx } from '../peripherals/dropbox';

type RootResult = dataTransfer.Maps;
export const rootHandler: RequestHandler = async (): Promise<RootResult> => {
  const { entries: files } = await dbx.filesListFolder({
    path: '',
    include_deleted: false,
  });

  console.log('clientid', await dbx.usersGetCurrentAccount(undefined));

  const maps = files.filter(file => file.name.match('.map'));

  return makeDataTransferMaps(maps);
};
