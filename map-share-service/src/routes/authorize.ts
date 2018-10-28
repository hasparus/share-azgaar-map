import { RequestHandler, text } from 'micro';

import { dataTransfer } from '../../../map-share-common';
import { isAdminId } from '../authorizeAdmin';

export const authorizeHandler: RequestHandler = async (req, res) => {
  const accountId = (await text(req)) as dataTransfer.AccountId;
  const isAdmin = await isAdminId(accountId);

  return { isAdmin };
};
