import { json, RequestHandler } from 'micro';

import { dataTransfer } from '../../../map-share-common';
import dbx from '../peripherals/dropbox';

type DeletedMapPaths = {
  paths: string[];
};

export const deleteHandler: RequestHandler = async (req, res): Promise<{}> => {
  const data = (await json(req)) as DeletedMapPaths;

  dbx.filesDeleteBatch({
    entries: data.paths.map(path => ({ path })),
  });

  return { msg: 'ok' };
};
