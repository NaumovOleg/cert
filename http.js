const http = require('http');
const https = require('https');
const net = require('net');
const headers = {
  'content-length': '123',
  'content-type': 'text/plain',
  'connection': 'keep-alive',
  'host': 'mysite.com',
  'accept': '*/*'
};
const url = 'https://vskblbpuf0.execute-api.eu-west-1.amazonaws.com/dev/admin'


// AGENT----------------------------------------------->

// https.get(url, res => {
//   res.read((err, resp) => {
//     console.log('-----', resp)
//   })
// });

const keepAliveAgent = new http.Agent({ keepAlive: true });
const options = {
  // hostname: 'localhost',
  // port: 5000,
  path: '/get',
  method: 'get',
  url: 'http://localhost:5000'
  // agent: false
}
// options.agent = keepAliveAgent;


// ClientRequest--------------------------------------------------------------------

// const proxy = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('okay');
// });
// proxy.on('connect', (req, clientSocket, head) => {
//   // Connect to an origin server
//   const { port, hostname } = new URL(`http://${req.url}`);
//   const serverSocket = net.connect(port || 80, hostname, () => {
//     clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
//       'Proxy-agent: Node.js-Proxy\r\n' +
//       '\r\n');
//     serverSocket.write(head);
//     serverSocket.pipe(clientSocket);
//     clientSocket.pipe(serverSocket);
//   });
// });

// proxy.listen(1337, '127.0.0.1', () => {

//   // Make a request to a tunneling proxy
//   const options = {
//     port: 1337,
//     host: '127.0.0.1',
//     method: 'CONNECT',
//     path: 'www.google.com:80'
//   };

//   const req = http.request(options);
//   req.end();

//   req.on('connect', (res, socket, head) => {
//     console.log('got connected!');

//     // Make a request over an HTTP tunnel
//     socket.write('GET / HTTP/1.1\r\n' +
//       'Host: www.google.com:80\r\n' +
//       'Connection: close\r\n' +
//       '\r\n');
//     socket.on('data', (chunk) => {
//       // console.log(chunk.toString());
//     });
//     socket.on('end', () => {
//       proxy.close();
//     });
//   });
// });


// HTTP SERVER  ------------------------------------------------------------>
const server = http.createServer((req, res) => {
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.on('request', (err, res) => {
  console.log(res.socket.remoteAddress);
  console.log(res.socket.remotePort);
  res.writeHead(200, {
    'Content-Length': Buffer.byteLength('ddddddddd'),
    'Content-Type': 'text/plain'
  })
  res.end('ddddddddd')
});
server.on('data', (err, chunk) => {
  console.log('dddd', chunk)
});
server.listen(8000, () => {
  console.log('Connect server');
});
/*
EVENTS
  checkContinue
  checkExpectation
  clientError
  close
  connect
  connection
  request
  upgrade
  data

  */




// ServerResponse-------------------------------------------------------------->
setTimeout(() => {
  const req = http.request({
    host: 'localhost',
    port: 8000,
    method: 'get'
  }, (res) => {
    console.log('-----------')
    res.resume();
    res.on('end', () => {
      if (!res.complete)
        console.error(
          'The connection was terminated while the message was still being sent');
    });
  });

}, 2000)
