import { RequestHandler } from 'micro';
import cors from 'micro-cors';

import { deleteHandler, rootHandler, uploadHandler } from './routes';

const handler: RequestHandler = async (req, res) => {
  switch (req.url) {
    case '/':
      return rootHandler(req, res);
    case '/upload':
      return uploadHandler(req, res);
    case '/delete':
      return deleteHandler(req, res);
    default:
      return req.url;
  }
};

// tslint:disable-next-line:no-default-export
export default cors()(handler);
