import { RequestHandler, send } from 'micro';

import dbx from '../peripherals/dropbox';
import { IncomingMessage } from 'http';

type UploadResult = any;

type RequestFiles = {};

export const uploadHandler: RequestHandler = async (
  req: IncomingMessage & { files?: RequestFiles },
  res
): Promise<UploadResult> => {
  if (!req.files) {
    return send(res, 400, 'No file uploaded.');
  }
};
