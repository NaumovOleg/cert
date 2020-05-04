// 'use strict';

/* 
encodings:
base64
utf8
hex
utf16le 
latin1
ascii for 7bit only 

*/

// length - returns the number of bytes 

const buf1 = Buffer.alloc(5);
const buf1_2 = Buffer.alloc(5, 'gt', 'utf8')
const buf2 = Buffer.allocUnsafe(5);
const buf3 = Buffer.from([1, 34, 4]);
const buf4 = Buffer.from([0x74, 0xc3, 0xa9, 0x73, 0x74]);
const buf5 = Buffer.from('hello world');
const buf6 = Buffer.from('68656c6c6f20776f726c64', 'hex');

// console.log(buf6.buffer, buf6.byteOffset, buf6.byteLength, buf6.length);

const uintArr = new Uint16Array(buf6);
// const buf7 = Buffer.from(buf6, 0, 2);
// const buf8 = new Buffer(Buffer.poolSize)

// buf6.map((el, index) => {
//   console.log(el, index)
// })

const length = Buffer.byteLength('68656c6c6f20776f726c64', 'hex');

// COMPARE------------------------------>
const buf9 = Buffer.from('1234');
const buf9_1 = Buffer.from('123456');
const buf10 = Buffer.from('0123');

const arr = [buf9, buf10];


// buf9.compare(buf10) = 1
// console.log(buf9.compare(buf10, 1, 2, 0, 1))
// console.log(buf9_1.compare(buf9))


// console.log(buf9, buf10, arr, [buf9, buf10].sort(Buffer.compare));


// CONCAT--------------------------------->

const buf11 = Buffer.from('hello', 'utf8');
const buf12 = Buffer.from('world', 'utf8');

const concated = Buffer.concat([buf11, buf12]);

// console.log(buf11, buf12, concated.toString());


// BUFFER FROM ----------------------------->
// const ab = new ArrayBuffer(10);
const buf13 = Buffer.from({ name: 'Oleg' }.toString());

// BUFFER ISBUFFER------------------------------->
Buffer.isBuffer(buf13);

// BUFFER ISENCODING------------------------------->
Buffer.isEncoding('utf8');

// BYTE OFFSET------------------------------------------>
const nodeBuffer = Buffer.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const bfarr = new Int8Array(nodeBuffer.buffer, nodeBuffer.byteOffset, nodeBuffer.length);
const ofsettedBuffer = Buffer.from(nodeBuffer, 1000, 10);

// COPY ----------------------------------------------->
const buf14 = Buffer.from('abcqwe')
const buf15 = Buffer.from('def');

const copied = buf14.copy(buf15, 2, 2, 4)

// console.log(copied, buf14.toString(), buf15.toString())

// ENTRIES ------------------------------------------------>
const buf16 = Buffer.from('abcdef', 'hex');
// const entries = buf16.entries();
// for (const a of entries) {
//   console.log(a)
// }


// EQUALS ------------------------------------------------>
const buf17 = Buffer.from('ABC');
const buf18 = Buffer.from('abc');
const buf19 = Buffer.from('ABCD');

const buf1d = Buffer.from('ABC');
const buf2d = Buffer.from('414243', 'hex');
const buf3d = Buffer.from('ABCD');

// buf17.equals(buf18) = false
// buf17.equals(buf19) = false
// buf19.equals(buf17) = false

// buf1d.equals(buf2d) = true
// buf1d.equals(buf3d) =false


// FILL----------------------------------------------------->
const buf20 = Buffer.allocUnsafe(50).fill('\u0222');
buf20.fill('aazz', 20, 40, 'hex')
// console.log(buf20.toString());

// INCLUDES---------------------------------------------------->
const buf21 = Buffer.from('this is a buffer');
// console.log(buf21.includes('this', 0));

// INDEXOF------------------------------------------------------->
const buf22 = Buffer.from('this is a buffer');
// console.log(buf22.indexOf('t'))

// KEYS-------------------------------------------------------->
const buf23 = Buffer.from('this is a buffer');
const keys = buf23.keys();

// for (let key of keys) {
//   console.log(key)
// }

// LAST INDEX OF---------------------------------------------->
const buf24 = Buffer.from('this is a buffer');
// console.log(buf24.lastIndexOf('is', 100000))

// SUBARRAY------------------------------------------------>
const buf25 = Buffer.from('abcdef', 'utf8');
// console.log(buf25, buf25.subarray(-4, -2))

// SLICE--------------------------------------------------------->
const buf26 = Buffer.from('abcdef', 'utf8');
// console.log(buf26.slice(0, 4).toString(), buf26.toString());

// SWAP-------------------------------------------------------------->
const buf27 = Buffer.from('abcdefgh');
// console.log(buf27, buf27.length);
// console.log(buf27.swap16())
// console.log(buf27.swap32())
// console.log(buf27.swap64());

// TOJSON TO STRING------------------------------------------------------------->
const buf28 = Buffer.from('abcdefgh', 'hex');
// console.log(buf28.toString('hex', 2, 4))
// console.log(JSON.stringify(buf28))

// VALUSE ------------------------------------------------------------------------>
const buf29 = Buffer.from('abcdef', 'utf8');
const values = buf29.values();
// for (const value of values) {
//   console.log(value);
// }


// WRITE-------------------------------------------------------------->
const buf30 = Buffer.alloc(30);
// console.log(buf30.fill('3', 10, 20, 'utf8'))
console.log(buf30.write('3', 20, 2))
console.log(buf30.kMaxLength)











