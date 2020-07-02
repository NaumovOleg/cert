const fs = require('fs');
const { Dirent, constants } = require('fs')
const path = require('path');
const file = './fsFiles/test3.txt';

// delete File
// fs.unlinkSync(`./fsFiles/text.txt`);

// rename 
// fs.renameSync('./fsFiles/test`', './fsFiles/testeee');

const stat = fs.statSync(file);
// console.log(stat);
// const readedFile = fs.readFileSync(file);
// console.log(readedFile.toString());

const open = fs.openSync(file, 'r');
// const close = fs.closeSync(open);

// console.log(open)

// const fstat = fs.fstat(parseInt(open));



// console.log(open, close, fsStat);

const fileUrl = new URL('file:///tmp/hello');
// console.log(fileUrl);


// DIRENT--------------------------------------------------------------------->
const dir = new Dirent('./fsFiles');
// dir.isBlockDevice();
// dir.isCharacterDevice();
// dir.isDirectory();
// dir.isFIFO();
// dir.isFile();
// dir.isSocket();
// dir.isSymbolicLink();

// const dir2 = fs.readdirSync('./fsFiles')


// WATCHER------------------------------------------------------------------------------>
// fs.watch('./fsFiles', { encoding: 'buffer' }, (eventType, filename) => {
//   console.log(eventType, filename.toString())

// });

// const watchFile = fs.watchFile('./fsFiles/test.txt', { encoding: 'buffer' }, (event, file) => {
// console.log(event, file);
// });
// watchFile.on('change', (file) => {
//   console.log(arguments)
// });
// watchFile.on('close', (file) => {
//   // console.log(arguments)
// })


// READ STREAM ------------------------------------------------------------------------>

const stream = fs.createReadStream(file, {
  start: 10,
  end: 100,
  flags: 'r',
  encoding: 'utf8'
});
// stream.on('close', () => { console.log('Stream closed') })
// stream.on('ready', () => { console.log('Stream ready') })
// stream.on('open', () => { console.log('Stream open') });
stream.on('data', (data) => { console.log('Stream data', data.toString()) });
// stream.on('end', () => { console.log('Stream end') });

// console.log(stream.bytesRead)
// console.log(stream.path)
// console.log(stream.pending)
// stream.read();


// FS STATS-------------------------------------------------------------------->

// const fileStats = new fs.Stats('./fsFiles/test.js');
// console.log(
// fileStats,
// fileStats.isBlockDevice(),
// fileStats.isCharacterDevice(),
// fileStats.isFile(),
// fileStats.isDirectory(),
// fileStats.isFIFO(),
// fileStats.isSocket(),
// fileStats.isSymbolicLink(),

// )

// WRITE STRAEM------------------------------------------------------------------>

const writestream = fs.createWriteStream(file, {
  // start: 0,
  // end: 30,
  encoding: 'hex'
});
// writestream.on('close', () => { console.log('writestream closed') })
// writestream.on('ready', () => { console.log('writestream ready') })
// writestream.on('open', () => { console.log('writestream open') });
// writestream.on('data', (data) => { console.log('writestream data', data.toString()) });
writestream.write('test write stream \n');


// FILE ACCESS ----------------------------------------------------------------->
// fs.access(file, constants.F_OK, (err, data) => {
//   console.log(err, data)
// });



// APPEND-------------------------------------------------------------------->
const readFile = fs.createReadStream('./fsFiles/test.js');
readFile.on('data', async (data) => {
  fs.appendFileSync(file, data, 'utf8')
});


// CHMOD -------------------------------------------------------------------------->
// fs.chmodSync(file, 777);


// COPY FILE -------------------------------------------------------------------------->

// const copied = fs.copyFileSync(file, `./fsFiles/test${Math.random()}.txt`, constants.COPYFILE_EXCL)



// const fd = fs.openSync(file, 'r+', {
//   encoding: 'utf8'
// });
// // Truncate the file to first four bytes
// fs.ftruncate(fd, 5, (err) => {
//   console.log('-----', fs.readFileSync(file, 'utf8'));
// });




// MK DIR  ----------------------------------------------------->
// fs.mkdirSync('./dir');
// console.log(fs.mkdtempSync('./'));


// READ FILE---------------------------------------------->
const fileDescriptor = fs.openSync(file, 'r+')
fs.readFile(file, 'utf8', (err, data) => {
  console.log('dewdewdew', data);
});
const fileR = fs.readFileSync(fileDescriptor, 'utf8');
console.log(fileR, fs.realpathSync.native('./'));

// fs.rmdirSync('./dir');
// console.log(fs.symlinkSync('./mew2', './fsFiles'))
















