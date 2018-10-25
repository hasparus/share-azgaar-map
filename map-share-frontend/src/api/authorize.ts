import { SERVICE_URL, ServiceRoutes } from '../../../map-share-common';

export function authorize(accountId: string) {
  return fetch(SERVICE_URL + ServiceRoutes.Authorize, {
    body: accountId,
    method: 'POST',
  }).then(response => response.json());
}
