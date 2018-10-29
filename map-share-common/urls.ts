let urls;

if (process.env.NODE_ENV !== 'production') {
  const host = process.env.IP || 'localhost';
  urls = {
    // tslint:disable:no-http-string
    GENERATOR_URL: `http://${host}:5000`,
    SERVICE_URL: `http://${host}:3000`,
    // tslint:enable:no-http-string
  };
} else {
  urls = {
    GENERATOR_URL: 'https://hasparus.github.io/Fantasy-Map-Generator/',
    SERVICE_URL: 'https://map-share-service.now.sh',
  };
}

export const GENERATOR_URL = urls.GENERATOR_URL;
export const SERVICE_URL = urls.SERVICE_URL;
