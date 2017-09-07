const findUp = require('find-up-cb');

module.exports = (cwd, callback) => {
  if (!callback) {
    [cwd, callback] = [process.cwd(), cwd];
  }

  findUp('package.json', { cwd }, callback);
};
