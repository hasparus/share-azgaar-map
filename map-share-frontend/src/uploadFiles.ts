import { SERVICE_URL } from '../../map-share-common';

export function uploadFiles(files: FileList) {
  const formData = new FormData();
  Array.prototype.forEach.call(files, (file: File) =>
    formData.append('file', file)
  );

  return fetch(SERVICE_URL + 'upload', {
    body: formData,
    method: 'POST',
  }).then(response => response.json());
}
