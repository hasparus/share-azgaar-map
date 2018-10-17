import { RequestHandler } from 'micro';
import { rootHandler } from './routes';
import makeCorsMiddleware from 'micro-cors';

const corsMiddleware = makeCorsMiddleware();

const handler: RequestHandler = async (req, res) => {
  if (req.url === '/') {
    return rootHandler(req, res);
  }
  return req.url;
};

export default corsMiddleware(handler);
