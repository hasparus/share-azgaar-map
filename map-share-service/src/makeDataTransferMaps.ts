import { dataTransfer } from '../../map-share-common';

export function makeDataTransferMaps(
  maps: { path_lower?: string }[]
): dataTransfer.Maps {
  return {
    maps: maps.map(file => ({
      path: file.path_lower || '?',
    })),
  };
}
