import { RequestHandler, send } from 'micro';

import { dbx } from '../peripherals/dropbox';

const HTTP_FOUND = 302;

export const openHandler: RequestHandler = (req, res) => {
  const hash = ((req.url || '').match(/m\/(.*)/) || [])[1];
  if (hash) {
    res.writeHead(HTTP_FOUND, {
      Location: 'https://example.com',
    });
    res.end();
  } else {
    send(res, 404, 'Map not found: ID missing.');
  }
};
