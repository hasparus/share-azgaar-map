import { RequestHandler, send } from 'micro';

import { makeMapUrl } from '../makeMapUrl';

const HTTP_FOUND = 302;

// opens map by name
export const openHandler: RequestHandler = (req, res) => {
  const hash = ((req.url || '').match(/m(.*)/) || [])[1];
  if (hash) {
    makeMapUrl(hash)
      .then(url => {
        res.writeHead(HTTP_FOUND, {
          Location: url,
        });

        res.end();
      })
      .catch((err: DropboxTypes.Error<string> & { response: Response }) => {
        // tslint:disable-next-line:no-console
        console.error(err);
        send(res, err.response.status, err.error);
      });
  } else {
    send(res, 404, 'Map not found: Name missing.');
  }
};
