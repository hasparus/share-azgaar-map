import { RequestHandler } from 'micro';
import cors from 'micro-cors';

import { rootHandler, uploadHandler, deleteHandler } from './routes';

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

export default cors()(handler);
