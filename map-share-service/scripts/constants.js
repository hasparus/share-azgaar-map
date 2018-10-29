const path = require('path');

const rootDir = path.join(__dirname, '..');
const deployDir = path.join(rootDir, '__deploy');

module.exports = {
  rootDir,
  deployDir,
};
