const exec = require('executive');

const { deployDir } = require('./constants');

function deploy() {
  exec(`
    now --public ${deployDir} -e DROPBOX_ACCESS_TOKEN=@dropbox_access_token -e NODE_ENV=production
    now alias
    now rm $npm_package_name --safe --yes
  `);
}

deploy();
