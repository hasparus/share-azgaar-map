import { RequestHandler } from 'micro';
import { rootHandler } from './routes';
import cors from 'micro-cors';

const handler: RequestHandler = async (req, res) => {
  switch (req.url) {
    case '/':
      return rootHandler(req, res);
    default:
      return req.url;
  }
};

export default cors()(handler);
