import { IncomingMessage, ServerResponse } from 'http';
import { send } from 'micro';

import { makeMapUrl } from '../makeMapUrl';

const HTTP_FOUND = 302;

// opens map by name -- {url}/{map-name}.map
export const openHandler = (
  req: IncomingMessage,
  res: ServerResponse,
  path: string
) => {
  if (path) {
    makeMapUrl(path)
      .then(url => {
        res.writeHead(HTTP_FOUND, {
          Location: url,
        });

        res.end();
      })
      .catch((err: DropboxTypes.Error<string> & { response: Response }) => {
        // tslint:disable-next-line:no-console
        console.error(err);
        const status = err.response.status;

        if (status === 404 || status === 409) {
          send(res, 404, `Map with name "${path}" not found.`);
        } else {
          send(res, status, err.error);
        }
      });
  } else {
    send(res, 404, 'Map not found: Name missing.');
  }
};
