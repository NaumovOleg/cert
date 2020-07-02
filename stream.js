const stream = require('stream');
const fs = require('fs');

// const readableStream = fs.createReadStream(__dirname + '/fsFiles/test3.txt');
// readableStream.on('data', data => {
//   console.log(data.toString())
// })

const writableStream = fs.createWriteStream(__dirname + '/fsFiles/test4.txt');
writableStream.write('hello');
writableStream.cork()
// writableStream.end('dddd');

// console.log(readableStream.readableBuffer, writableStream)
console.log(writableStream.toString())
