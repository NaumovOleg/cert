const path = require('path');

console.log(
  path.basename(__filename),
  path.win32.basename(__filename),
  path.delimiter,
  path.dirname(__filename),
  path.extname(__filename),
  path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  }),
  path.isAbsolute('/foo/bar'),

  path.parse(__dirname),
  path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'),
  path.resolve('/foo/bar', '/tmp/file/'),

)
