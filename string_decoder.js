const { StringDecoder } = require('string_decoder');
const fs = require('fs');
const readBuf = fs.createReadStream(__dirname + '/fsFiles/test4.txt');


const decoder = new StringDecoder('utf8');


readBuf.on('data', data => {
  console.log(decoder.write(data))

})

