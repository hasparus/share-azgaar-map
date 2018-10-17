import { RequestHandler } from 'micro';
import { rootHandler, uploadHandler } from './routes';
import cors from 'micro-cors';

const handler: RequestHandler = async (req, res) => {
  switch (req.url) {
    case '/':
      return rootHandler(req, res);
    case '/upload':
      return uploadHandler(req, res);
    default:
      return req.url;
  }
};

export default cors()(handler);
