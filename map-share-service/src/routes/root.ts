import { RequestHandler } from 'micro';
import fetch from 'isomorphic-fetch';
import { Dropbox } from 'dropbox';

const { DROPBOX_ACCESS_TOKEN } = process.env;

const dbx = new Dropbox({ accessToken: DROPBOX_ACCESS_TOKEN, fetch });

async function makeMapUrl(path: string) {
  const { link } = await dbx.filesGetTemporaryLink({
    path: path,
  });
  return `http://localhost:5000/?maplink=${encodeURIComponent(link)}`;
}

const rootHandler: RequestHandler = async (req, res) => {
  const { entries: files } = await dbx.filesListFolder({ path: '' });

  const maps = files.filter(file => file.name.match('.map'));
  const mapUrls = await Promise.all(
    maps.map(file => makeMapUrl(file.path_lower!))
  );

  res.end(`
    <div style="display: flex; flex-direction: column; font-family: monospace">
      ${maps.map(
        (file, index) => `<a href="${mapUrls[index]}">${file.path_lower}</a>`
      )}
    </div>
  `);
};

export default rootHandler;
