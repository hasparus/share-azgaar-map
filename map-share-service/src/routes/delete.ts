import { json, RequestHandler, send } from 'micro';

import { dataTransfer } from '../../../map-share-common';
import { isAdminId } from '../authorizeAdmin';
import { dbx } from '../peripherals/dropbox';

export const deleteHandler: RequestHandler = async (req, res) => {
  const { paths, accountId } = (await json(
    req
  )) as dataTransfer.DeleteRequestBody;

  if (isAdminId(accountId)) {
    dbx.filesDeleteBatch({
      entries: paths.map(path => ({ path })),
    });

    return { msg: 'ok' };
  }

  return send(res, 403, { msg: 'user is not an admin' });
};
