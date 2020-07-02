'use strict'

const net = require('net');
const path = require('path')

let server = net.createServer(socket => {
  console.log('=========>', 'connection')
}).listen({ port: 3003, host: 'localhost' });

/*SERVER LISTEN OPTIONS
   port 
  host 
  path < string > Will be ignored if port is specified.See Identifying paths for IPC connections.
  backlog < number > Common parameter of server.listen() functions.
  exclusive < boolean > Default: false
  readableAll < boolean > For IPC servers makes the pipe readable for all users.Default: false.
  writableAll < boolean > For IPC servers makes the pipe writable for all users.Default: false.
  ipv6Only < boolean > For TCP servers, setting ipv6Only to true will disable dual - stack support, i.e., binding to host:: won't make 0.0.0.0 be bound. Default: false.
 */
console.log('Server addressss',
  server.address(),
  server.listening,
  server.maxConnections,
);

server.on('close', () => {
  console.log('Server closed')
});
server.on('read', () => {
  console.log('))))))))))))))=Server read')
});
server.on('data', () => {
  console.log('))))))))))))))=Server read')
});
server.on('connection', (el) => {
  console.log('Server connection');
  el.on('data', (err, daat) => {
    console.log('-------', err.toString());
    el.write('dddddddddddddddddddddddd')
  });

});
server.on('listening', () => {
  console.log('Server listening')
});
server.on('error', () => {
  console.log('Server error')
});


// server.unref()

setTimeout(() => {

  // server.close();

}, 2000)

const socket = new net.Socket();
const conn = net.createConnection({ port: 3003 })
/* SOCKET CONNECT OPTION 
  port < number > Required.Port the socket should connect to.
  host < string > Host the socket should connect to.Default: 'localhost'.
  localAddress < string > Local address the socket should connect from.
  localPort < number > Local port the socket should connect from.
  family<number>: Version of IP stack.Must be 4, 6, or 0. The value 0 indicates that both IPv4 and IPv6 addresses are allowed.Default: 0.
  hints < number > Optional dns.lookup() hints.
  lookup < Function > Custom lookup function.Default: dns.lookup(). */


socket.connect({
  port: 3003,
  host: 'localhost'
});

socket.setEncoding('utf8')
socket.on('close', () => {
  console.log('socket closed')
});
socket.on('connect', () => {
  console.log('socket connection')
});
socket.on('data', (data) => {
  console.log('socket data', data.toString('utf8'))
});
socket.on('drain', () => {
  console.log('socket drain')
});
socket.on('ready', () => {
  console.log('socket ready')
});
socket.on('lookup', () => {
  console.log('socket lookup')
});

console.log('Socket address',
  socket.address(),
  socket.localAddress,
  socket.localPort,
  socket.remoteAddress,
  socket.remoteFamily,
  socket.bufferSize,
  socket.bytesRead,
  socket.bytesWritten,
  socket.connecting,
  socket.destroyed
);

// socket.pause();
// socket.resume();
// socket.setKeepAlive(true, 10);
// socket.setNoDelay(false)
// socket.setTimeout(3000, () => {
//   console.log('socket timed out')
// });

setTimeout(() => {
  server.getConnections((err, count) => {
    console.log('ConnectionsCout ', count)
  });
  console.log('==============================',)
  socket.write('Hello world', 'utf8');
  // socket.end('ffff');
}, 1000)

// socket.on('timeout', () => {
//   console.log('socket timeout');
//   socket.end();
// }, 1000);

// socket.destroy(err => {
//   // console.log(err)
// })
