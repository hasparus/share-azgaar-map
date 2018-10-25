import { ServiceRoutes } from '../../../map-share-common';

export function uploadFiles(files: FileList) {
  const formData = new FormData();
  Array.prototype.forEach.call(files, (file: File) =>
    formData.append('file', file)
  );

  return fetch(ServiceRoutes.Upload, {
    body: formData,
    method: 'POST',
  }).then(response => response.json());
}
