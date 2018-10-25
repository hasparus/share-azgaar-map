import { RequestHandler } from 'micro';
import cors from 'micro-cors';

import { ServiceRoutes } from '../../map-share-common';

import {
  authorizeHandler,
  deleteHandler,
  rootHandler,
  uploadHandler,
} from './routes';

const handler: RequestHandler = async (req, res) => {
  switch (req.url) {
    case ServiceRoutes.Root:
      return rootHandler(req, res);
    case ServiceRoutes.Upload:
      return uploadHandler(req, res);
    case ServiceRoutes.Delete:
      return deleteHandler(req, res);
    case ServiceRoutes.Authorize:
      return authorizeHandler(req, res);
    default:
      return { url: req.url };
  }
};

// tslint:disable-next-line:no-default-export
export default cors()(handler);
