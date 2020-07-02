'use strict'

const crypto = require('crypto');
const { Certificate } = crypto;


// CIPHER---------------------------------------->
const algorithm = 'aes-192-cbc';
const password = 'password'
const key = crypto.scryptSync(password, 'salt', 240);
const iv = crypto.randomBytes(16);
iv.fill(0);
const cipher = crypto.createCipher(algorithm, key, iv);
const decipher = crypto.createDecipher(algorithm, key, iv)

// let encrypted = '';
// cipher.on('readable', () => {
//   let chunk;
//   while (null !== (chunk = cipher.read())) {
//     console.log(chunk.toString())
//     encrypted += chunk.toString('hex');
//   }
// });
// cipher.on('end', () => {
//   console.log(encrypted);
// });

// cipher.write('Some text to encrypt');
// cipher.end();

/* piped streams
const input = fs.createReadStream('test.js');
const output = fs.createWriteStream('test.enc');
input.pipe(cipher).pipe(output); */

let encrypted = cipher.update('some clear text test', 'utf8', 'hex');
// encrypted += cipher.update('some clear text data', 'utf8', 'hex');

/* Once the cipher.final() method has been called,
the Cipher object can no longer be used to encrypt data.
Attempts to call cipher.final() more than once will result
in an error being thrown. */


decipher.setAutoPadding(false);
encrypted += cipher.final('hex');
// cipher.end()

// console.log('encrypted', encrypted);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final();
// console.log('decrypted', decrypted);



// DIFFIEHELMAN--------------------------------->
const assert = require('assert');

// Generate Alice's keys...
// const alice = crypto.createDiffieHellman('alice');
// const aliceKey = alice.generateKeys('hex');

// // Generate Bob's keys...
// const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
// const bobKey = bob.generateKeys('hex');

// // alice.setPublicKey(Buffer.from('dfferjnfrjekfrj', 'hex'));
// // alice.setPrivateKey(Buffer.from('dfferjnfrjekfrj', 'hex'));

// // Exchange and generate the secret...
// const aliceSecret = alice.computeSecret(bob.getPublicKey(), 'hex', 'hex');
// const bobSecret = bob.computeSecret(alice.getPublicKey(), 'hex', 'hex');

// console.log(aliceSecret, bobSecret);

// console.log(alice.getPrivateKey('hex'), alice.getPublicKey('hex'), alice.getGenerator().toString());


const domain = crypto.createDiffieHellman(300);
// const domain = crypto.createDiffieHellmanGroup('modp1');

const Oleh = crypto.createDiffieHellman(domain.getPrime(), domain.getGenerator());
Oleh.generateKeys('hex');

const Kate = crypto.createDiffieHellman(domain.getPrime(), domain.getGenerator());
Kate.generateKeys();

const THird = crypto.createDiffieHellman(domain.getPrime(), domain.getGenerator());
THird.generateKeys();

const kateSecret = Kate.computeSecret(Oleh.getPublicKey(), 'hex', 'hex');
const olegSecret = Oleh.computeSecret(Kate.getPublicKey(), 'hex', 'hex');
const olegSecret2 = Oleh.computeSecret(THird.getPublicKey(), 'hex', 'hex');



// ELLIPTIC CURVE DIFFIE HELMANN------------------------------>
const { createECDH, ECDH } = require('crypto');

// openssl ecparam - list_curves

const ecdh1 = createECDH('secp256k1');
ecdh1.generateKeys();

const ecdh2 = createECDH('secp256k1');
ecdh2.generateKeys();



const ecdh1Compressed = ecdh1.getPublicKey('hex', 'compressed');
const ecdh2Compressed = ecdh2.getPublicKey('hex', 'compressed');

const uncompressedKey = ECDH.convertKey(ecdh1Compressed,
  'secp256k1',
  'hex',
  'hex',
  'uncompressed');

const ecdh1Secret = ecdh1.computeSecret(ecdh2Compressed, 'hex', 'hex');
const ecdh2Secret = ecdh2.computeSecret(ecdh1Compressed, 'hex', 'hex');

// console.log(ecdh1Secret, ecdh2Secret);

// HASH ----------------------------------

const hash = crypto.createHash('sha256', 'secret');
// hash.on('readable', () => {
//   const data = hash.read();
//   if (data) {
//     console.log(data.toString('hex'));
//   }
// });
// hash.write('some data to hash');
// hash.end();



hash.update('some data to hash');
// console.log(hash.digest('hex'))

// HMAC --------------------------------->
const hmac = crypto.createHmac('sha256', 'secret');
hmac.update('some data to hash');
// console.log('hmac', hmac.digest('hex'), '---', );


// SIGN------------------------------------>
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
});

const fs = require('fs');

// const privateKey = fs.readFileSync('/home/oleg/.ssh/id_rsa');
// const publicKey = fs.readFileSync('/home/oleg/.ssh/id_rsa.pub');

const sign = crypto.createSign('RSA-SHA256');
sign.write('some');
sign.end();

// const signature = sign.sign(privateKey, 'hex');

// const verify = crypto.createVerify('SHA256');
// verify.update('some data to sign');
// verify.end();
// console.log(verify.verify(publicKey, signature));


// PBKDF------------------------------------------------>
const pbkdfkey = crypto.pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
// console.log(pbkdfkey.toString('hex'));

// RANDOM BYTES --------------------------------------------->
const buf = crypto.randomBytes(256);
crypto.randomFillSync(buf).toString('hex')
// console.log(buf.toString('hex'));
crypto.randomFill(buf, (err, bufresp) => {
  if (err) throw err;
  // console.log(Buffer.from(bufresp.buffer, bufresp.byteOffset, bufresp.byteLength)
  //   .toString('hex'));
});

// SCRYPT-------------------------------------------------->
const key2 = crypto.scryptSync('secret', 'salt', 64, { N: 1024 });









