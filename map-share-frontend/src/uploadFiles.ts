import { SERVICE_URL } from '../../map-share-common';

export async function uploadFiles(files: FileList) {
  const formData = new FormData();
  Array.prototype.forEach.call(files, (file: File) =>
    formData.append('file', file)
  );

  const response = await fetch(SERVICE_URL + 'upload', {
    body: formData,
    method: 'POST',
  });

  const json = await response.text();
  console.log(json);
}
