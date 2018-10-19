import { SERVICE_URL } from '../../../map-share-common';

export function deleteFiles(paths: string[]) {
  const body = { paths };

  return fetch(`${SERVICE_URL}/delete`, {
    body: JSON.stringify(body),
    method: 'POST',
  }).then(response => response.json());
}
