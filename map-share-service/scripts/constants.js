const path = require('path');

const rootDir = path.join(__dirname, '..');
const deployDir = path.join(rootDir, '__dist');

module.exports = {
  rootDir,
  deployDir,
};
