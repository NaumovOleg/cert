const process = require('process');

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

// ON PROMISE.RACE
// process.on('multipleResolves', (type, promise, reason) => {
//   console.error('-----------', type, promise, reason);
//   // setImmediate(() => process.exit(1));
// });

async function main() {
  try {
    return await new Promise((resolve, reject) => {
      // resolve('First call');
      // resolve('Swallowed resolve');
      reject(new Error('Swallowed reject'));
    })
  } catch {
    // throw new Error('Failed');
  }
}



process.on('unhandledRejection', (reason, promise) => {
  console.log('unhandledRejection', reason, '------', promise)
});
process.on('rejectionHandled', (promise, reason) => {
  console.log('rejectionHandled', reason, '------', promise)
});
// process.on('uncaughtException', (exception, reason) => {
//   console.log('uncaughtException', exception, '====', reason)
// });
console.log(
  // process.allowedNodeEnvironmentFlags,
  // process.arch, '-',
  // process.argv, '-',
  // process.argv0, '-',
  // process.channel,
  // process.config,
  // process.debugPort,
  // process.cpuUsage(),
  // process.execArgv,
  // process.execPath,
  // process.getegid(),
  // process.getgid(),
  // process.getgroups(),
  // process.getuid(), '=====',
  // process.hrtime.bigint(),
  // process.getgroups(),
  // process.memoryUsage(),
  // process.platform,
  // process.pid,
  // process.release,


  // process.stderr,
  // process.stdin
  process.title,
  process.uptime(),
  process.versions


);
// console.log(erd)
process.setUncaughtExceptionCaptureCallback((err) => {
  console.log('---------------------------', err)

})

// process.initgroups('bnoordhuis', 27)

// process.abort()

process.on('warning', (warning) => {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});


// If the Node.js process was spawned
// with an IPC
// channel(see the Child Process documentation),
//   the process.channel property is a reference to the IPC channel

// process.channel
// process.channel.ref()
// process.disconnect()


// CHANGE current working directory 
// process.chdir(directory)

// process.emitWarning('Something happened!', {
//   code: 'MY_WARNING',
//   detail: 'This is some additional information'
// });





main()
