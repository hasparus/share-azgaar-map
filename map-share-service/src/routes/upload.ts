import { RequestHandler, buffer, send } from 'micro';
import { upload } from 'micro-upload';

import dbx from '../peripherals/dropbox';

function asArray<T>(arg: T | T[]): T[] {
  return Array.isArray(arg) ? arg : [arg];
}

const toKilobytes = (bytes: number) => `${Math.round(bytes / 1000)}KB`;

const makeOkMessage = (filesData: { path_lower?: string }[]) => {
  const filesCount = filesData.length;
  return (
    `${filesCount} ${filesCount === 1 ? 'file' : 'files'} uploaded!` +
    ` Paths: ${filesData.map(f => f.path_lower).join()}`
  );
};

export const uploadHandler: RequestHandler = upload(async (req, res) => {
  if (req.files) {
    const files = asArray(req.files.file);
    const uploadedFilesData = await Promise.all(
      files.map(({ data, name }) => {
        console.log('Uploading', name, toKilobytes(data.byteLength));
        return dbx.filesUpload({
          path: `/${name}`,
          contents: data,
          mode: { '.tag': 'overwrite' },
        });
      })
    );
    return send(res, 200, makeOkMessage(uploadedFilesData));
  }

  return send(res, 400, 'No file uploaded.');
});
