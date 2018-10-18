declare namespace DropboxTypes {
  interface DropboxOptions {
    fetch: any;
  }
}

declare module 'micro-upload' {
  import { RequestHandler } from 'micro';
  import { IncomingMessage, ServerResponse } from 'http';
  import { FileArray } from 'express-fileupload';

  type FileRequestHandler = ((
    res: IncomingMessage & {
      files: FileArray;
    },
    req: ServerResponse
  ) => any);

  function upload(fn: FileRequestHandler): RequestHandler;
  function upload(opts: object, fn: FileRequestHandler): RequestHandler;
}
