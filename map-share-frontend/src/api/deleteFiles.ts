import {
  dataTransfer,
  SERVICE_URL,
  ServiceRoutes,
} from '../../../map-share-common';
import { Maps } from '../../../map-share-common/dataTransfer';

export async function deleteFiles(paths: string[], accountId: string) {
  const body: dataTransfer.DeleteRequestBody = { paths, accountId };

  const response = await fetch(SERVICE_URL + ServiceRoutes.Delete, {
    body: JSON.stringify(body),
    method: 'POST',
  });

  const json = await response.json();

  if (response.ok) {
    return json as Maps;
  } else {
    throw json as { msg: string };
  }
}
