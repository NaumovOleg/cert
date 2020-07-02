const net = require('net');
// const connection = net.connect('localhost');
const fs = require('fs');
// try {
//   const m = 1;
//   const n = m + z;
// } catch (err) {
//   console.log('error', err)
//   // Handle the error here.
// }

// fs.readFile('a file that does not exist', (err, data) => {
//   if (err) {
//     console.error('There was an error reading the file!', err);
//     return;
//   }
//   // Otherwise handle the data
// });



// Adding an 'error' event handler to a stream:
// connection.on('error', (err) => {
//   // If the connection is reset by the server, or if it can't
//   // connect at all, or on any sort of error encountered by
//   // the connection, the error will be sent here.
//   console.error(err);
// });

// connection.pipe(process.stdout);
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;

function MyError(message) {
  // console.log(new.target)
  this.name = 'name';
  this.message = message;
  Error.captureStackTrace(this, MyError);
  this.prototype = Object.create(Error.prototype)
}
// MyError.prototype = Error.costructor;

// throw new MyError('dddd')
// console.log(new MyError().stack, '----', myObject.stack);

// ERRORS-------------------------------->
// RangeError
// SyntaxError
// TypeError



throw new MyError()
