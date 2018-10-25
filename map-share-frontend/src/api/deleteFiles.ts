import { dataTransfer, ServiceRoutes } from '../../../map-share-common';

export function deleteFiles(paths: string[], accountId: string) {
  const body: dataTransfer.DeleteRequestBody = { paths, accountId };

  return fetch(ServiceRoutes.Delete, {
    body: JSON.stringify(body),
    method: 'POST',
  }).then(response => response.json());
}
