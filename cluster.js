'use strict';

const cluster = require('cluster');
const numCPUs = require('os')
const http = require('http');

if (cluster.isMaster) {

  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  cluster.setupMaster({
    exec: './cluster_test.js',
    args: ['--use', 'https', 'dddd', 'dddd'],
    silent: true,
    env: {
      testName: 'dddddssdcewc'
    }
  })


  const forked = cluster.fork({
    testEnv: 'Olehg',
  });
  console.log(process.env.testEnv)
  const worker = cluster.workers['1'];

  forked.on('disconnect', (data) => {
    console.log('master diconnected', data)
  });
  forked.on('exit', (data) => {
    console.log('master exit', data)
  })
  forked.on('error', (data) => {
    console.log('master error', data)
  });
  forked.on('listening', (data) => {
    console.log('master listening', data)
  });
  forked.on('message', (data) => {
    console.log('master message', data)
  });
  forked.on('online', (data) => {
    console.log('master online', data)
  })
  forked.send('Message from master worker');

  forked.on('listening', () => {
    console.log('dccmdclr ecrek cremkl')
  });


  // worker.disconnect();
  // worker.kill();

  // console.log(cluster.isMaster, cluster.isWorker, worker.exitedAfterDisconnect);

  // setTimeout(() => {
  //   console.log(worker.id, worker.isConnected(), worker.isDead())
  // }, 1000);

  // console.log(worker.process)

  // console.log(worker)
}

if (cluster.isWorker) {
  console.log(process.env.testEnv)
  process.on('disconnect', (data) => {
    console.log('Worker diconnected', data)
  });
  process.on('exit', (data) => {
    console.log('Worker exit', data)
  })
  process.on('error', (data) => {
    console.log('Worker error', data)
  })
  process.on('listening', (data) => {
    console.log('Worker listening', data)
  });
  process.on('message', (data) => {
    console.log('Worker message', data)
  });
  process.on('online', (data) => {
    console.log('Worker online', data)
  });

  process.send('Message from slave worker', () => {
    console.log('sendHandle')
  }, {
    /*    A value that can be used when passing 
       instances of net.Socket.When true,
       the socket is kept open in the sending
        process.Default: false */

    keepOpen: true
  });
}




cluster.on('exit', (worker, code, signal) => {
  console.log('Cluster on exit', code, signal)
});



cluster.on('disconnect', (worker) => {
  // console.log('Cluster on disconnect', worker, code, signal)
});

cluster.on('fork', (worker) => {
  // console.log('Cluster on fork', worker)
});

cluster.on('listening', (worker, address) => {
  // console.log('Cluster on listening', address, worker)
});

// console.log(cluster.schedulingPolicy, cluster.SCHED_RR, cluster.SCHED_NONE)



/* cluster event, envs
    disconnect
    fork
    listening


    isWorker,
    isMaster,
    schedulingPolicy
    */

/* cluster settings
  execArgv < string[] > List of string arguments
    passed to the Node.js executable.Default: process.execArgv.
  exec < string > File path to worker file.
    Default: process.argv[1].
  args < string[] > String arguments passed to worker.
    Default: process.argv.slice(2).
  cwd < string > Current working directory of the worker process.
    Default: undefined(inherits from parent process).
    serialization < string > Specify the kind of serialization used
    for sending messages between processes.
    Possible values are 'json' and 'advanced'.Default: false.
  silent < boolean > Whether or not to send output
    to parent's stdio. Default: false.
  stdio < Array > Configures the stdio of forked processes.
    Because the cluster module relies on IPC to function,
    this configuration must contain an 'ipc' entry.
    When this option is provided, it overrides silent.
  uid < number > Sets the user identity of the process. (See setuid(2).)
  gid < number > Sets the group identity of the process. (See setgid(2).)
    inspectPort<number> | <Function> Sets inspector port of worker.
    This can be a number, or a function that takes no arguments and returns a number.
    By default each worker gets its own port,
    incremented from the master's process.debugPort.
    windowsHide <boolean> Hide the forked processes console
    window that would normally be created on Windows systems. Default: false. */


