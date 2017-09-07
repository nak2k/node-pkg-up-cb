const test = require('tape');
const pkgUp = require('..');

test('test', t => {
  t.plan(2);

  pkgUp(__dirname, (err, path) => {
    t.error(err);
    t.ok(path.endsWith('/package.json'));
  });
});
