let urls;

if (process.env.NODE_ENV !== 'production') {
  urls = {
    GENERATOR_URL: 'http://localhost:5000/',
    SERVICE_URL: 'http://localhost:3000/',
  };
} else {
  urls = {
    GENERATOR_URL: '???',
    SERVICE_URL: '???',
  };
}

export const GENERATOR_URL = urls.GENERATOR_URL;
export const SERVICE_URL = urls.SERVICE_URL;
