/*
Example usage:
yarn dev
yarn dev fr s proto // <- prefixes of scripts prefixed with "d:"
*/
const concurrently = require('concurrently');
const pkg = require('../package.json');

const colors = ['green', 'blue', 'magenta', 'cyan', 'white', 'yellow'];

const CATEGORY_PREFIX = 'd:';

const args = process.argv.slice(2);

let commands;
if (args.length) {
  const prefixes = args.map(s => 'd:'.concat(s));
  commands = prefixes
    .map((p, index) => {
      const command = Object.keys(pkg.scripts).find(x => x.startsWith(p));
      return command
        ? {
            command: 'npm:'.concat(command),
            name: args[index],
            prefixColor: colors[index],
          }
        : null;
    })
    .filter(x => x);
} else {
  commands = Object.keys(pkg.scripts)
    .filter(x => x.startsWith(CATEGORY_PREFIX))
    .map((command, index) => ({
      command: 'npm:'.concat(command),
      name: command.slice(2, 4),
      prefixColor: colors[index],
    }));
}

concurrently(commands, {
  restartTries: 50,
  restartDelay: 500,
});
