import { Map, SERVICE_URL } from '../../map-share-common';

export function makeMapPermalink(path: Map['path']) {
  return SERVICE_URL + path;
}
