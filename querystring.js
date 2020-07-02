const querystring = require('querystring');

const obj = {
  name: 'Oleg',
  surname: 'Naumov',
  foo: 'bar',
  abc: ['xyz', '123']
}
const str = 'The URL query string -- to parse'
const p = querystring.parse(str, ' ', '--');

const p2 = querystring.stringify(obj, ';', '=')

console.log(p, p2)
