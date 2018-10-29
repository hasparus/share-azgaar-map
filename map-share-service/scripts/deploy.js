const exec = require('executive');

const { deployDir } = require('./constants');

function deploy() {
  exec(`
    now --public
    now alias
    now rm $npm_package_name --safe --yes
    rm -rf ${deployDir}
  `);
}

deploy();
