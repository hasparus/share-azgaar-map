import { RequestHandler } from 'micro';
import cors from 'micro-cors';

import { ServiceRoutes } from '../../map-share-common';

import {
  authorizeHandler,
  deleteHandler,
  openHandler,
  rootHandler,
  uploadHandler,
} from './handlers';

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
      if ((req.url || '').endsWith('.map')) {
        return openHandler(req, res);
      }

      return { url: req.url };
  }
};

// tslint:disable-next-line:no-default-export
export default cors()(handler);
