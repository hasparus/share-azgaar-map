import { json, RequestHandler } from 'micro';

import { dataTransfer } from '../../../map-share-common';
import { dbx } from '../peripherals/dropbox';

export const authorizeHandler: RequestHandler = async (
  req,
  res
): Promise<{}> => {
  const data = (await json(req)) as dataTransfer.MapPaths;

  dbx.filesDeleteBatch({
    entries: data.paths.map(path => ({ path })),
  });

  return { msg: 'ok' };
};
