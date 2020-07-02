
const fs = require('fs');

const readStrream = fs.createReadStream(__dirname + '/test.js');
// const writeStrream = fs.createWriteStream(__dirname + '/testeee.txt');
readStrream.on('data', (data) => {
  console.log(data.toString());

  // writeStrream.write(data);
  fs.appendFileSync(__dirname + '/testeee.txt', data, 'utf8')
});
