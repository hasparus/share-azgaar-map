import { RequestHandler } from 'micro';
import rootHandler from './routes/root';

const handler: RequestHandler = async (req, res) => {
  if (req.url === '/') {
    return rootHandler(req, res);
  }
  return req.url;
};

export default handler;
