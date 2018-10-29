const exec = require('executive');
const path = require('path');
const fs = require('fs');

const rootDir = path.join(__dirname, '..');
const deployDir = path.join(rootDir, '__deploy');

const makePkgJson = () =>
  new Promise((resolve, reject) => {
    fs.readFile(
      path.join(rootDir, 'package.json'),
      { encoding: 'utf-8' },
      (err, data) => {
        if (err) {
          reject(err);
        }

        const newData = data.replace(/"build":.+\s+/, '');
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

async function main() {
  await exec(`mkdir ${deployDir}`);
  await Promise.all([
    makePkgJson(),
    exec(`cp -rf ${rootDir}/build ${deployDir}`),
  ]);
}
main();

// `rm -rf ${deployDir}`,
