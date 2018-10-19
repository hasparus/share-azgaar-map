import { RequestHandler, send, json } from 'micro';

import { dataTransfer } from '../../../map-share-common';
import dbx from '../peripherals/dropbox';

type DeleteResult = string;

type DeletedMapPaths = {
  paths: string[];
};

export const deleteHandler: RequestHandler = async (
  req,
  res
): Promise<DeleteResult> => {
  const data = (await json(req)) as DeletedMapPaths;
  const x = await dbx.filesDeleteBatch({
    entries: data.paths.map(path => ({ path })),
  });
  console.log({ x });
  return 'ok';
};
