const exec = require('executive');
const path = require('path');
const fs = require('fs');

const { deployDir, rootDir } = require('./constants');

function makePkgJson() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(rootDir, 'package.json'),
      { encoding: 'utf-8' },
      (err, data) => {
        if (err) {
          reject(err);
        }

        const newData = data
          .replace(/"build":.+\s+/, '')
          .replace('build/index.js', 'map-share-service/build/index.js');

        fs.writeFile(path.join(deployDir, 'package.json'), newData, err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    );
  });
}

async function makeProductionBuild() {
  await exec.parallel([`mkdir ${deployDir}`, `cd ${rootDir} && yarn build`]);

  const common = path.join(deployDir, 'map-share-common');
  const build = path.join(deployDir, 'map-share-service');

  await Promise.all([
    makePkgJson(),

    exec([
      exec.parallel([`mkdir ${common}`, `mkdir ${build}`]),
      exec.parallel([
        `cp -rf ${rootDir}/build ${build}`,
        `cp ${path.join(rootDir, '..', 'map-share-common')}/*.js ${common}`,
      ]),
    ]),
  ]);
}
makeProductionBuild();
