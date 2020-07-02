'use strict';

const { spawnSync, spawn, exec, execSync, execFile, execFileSync, fork, forkSync } = require('child_process');

// async function runSpawn() {
// const ls = spawnSync('ls', ['-lh', '/usr'],
// { stdio: 'ignore' }
// );
// console.log(Buffer.from(ls.stdout).toString())
// }

// runSpawn()

// ls.stdout.on('data', (data) => {
//   console.log(`--stdout: ${data}`);
// });
// ls.stdin.on('data', (data) => {
//   console.log(`--stdin: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// ==============================================================================
// EXEC ------------------------------------->
// Spawns a shell then executes the command within that shell, buffering any generated output.

// const ex = execSync('bash -c ./test.bash', {
//   // environment
//   env: {
//     ...process.env,
//     test: 'test_env'
//   },
//   // current working directory
//   cwd: './',
//   // default shell
//   shell: '/bin/sh',
//   maxBuffer: 10000,
//   // timeout:30000

// });
// console.log(Buffer.from(ex).toString());


// EXECFILE--------------------------------------------------------------->
/*  is similar to child_process.exec() except that it does not spawn a shell by default.Rather,
  the specified executable file is spawned directly as a new process making it
slightly more efficient than child_process.exec(); */


// execFile('./test.bash', {
//   env: {
//     'test': "fdwdewdwe"
//   }
// }, (err, stdout, sterr) => {
//   // console.log('err', err);
//   // console.log('stdout', stdout);
//   // console.log('sterr', sterr);
// });

const execFiles = execFile('node', ['--version',], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  // console.log(stdout);
});

async function execFile2() {
  let { stdout, stderr, stdin, stdio } = await execFile('node', ['--version']);
  // console.log('stdout', stdout);
  // console.log('stderr', stderr)
  // console.log('stdin', stdin)
  // console.log('stdio', stdio)
};

// execFile2();



// PROCESS FORC--------------------------------------------------------------------------------------->
// Used to spawn nodejs process

// options
//   cwd
//   env
//   detached  
//   execPath
//   execArgv
//   serialization
//   silent
//   stdio
//   windowsVerbatimArguments 
//   uid 
//   gid 

// const forks = fork('./test.js', ['ex'], {
//   env: {
//     name: 'Oleg'
//   },
//   /*   If true, stdin, stdout, and stderr of the child will be piped 
//     to the parent, otherwise they will be inherited from the parent */
//   silent: false,

//   // execArgv: ['arg1', 'arg2'],

//   /*   Prepare child to run independently of its parent process.
//     Specific behavior depends on the platform */
//   detached: true,
//   argv0: 'nodejs',
//   // detached: true,
//   // stdio: 'ignore'

//   // uid: 1

// }, (err, stdout, stderr) => {
//   // console.log('fork err', err);
// });

// SPAWN-------------------------------------------------------------------------------------->
/* spawns a new process using the given command, with command line arguments
  in args.If omitted, args defaults to an empty array */

// options
//   cwd
//   env
//   argv0
//   stdio
//   detached
//   uid 
//   gid 
//   serialization 
//   shell
//   windowsVerbatimArguments
//   windowsHide

// const { stderr, stdout, stdio, stdin } = spawnSync('ls', ['-1h', './']);
// console.log('stdout', stdout.toString());
// console.log('stderr', stderr.toString());
// console.log('stdin', stdin.toString());
// console.log('stdio', stdio.toString());

// const ps = spawn('ls', ['./']);
// const grep = spawn('grep', ['ssh']);

// ps.stdout.on('data', (data) => {
// console.log('-----', data.toString())
// grep.stdin.write(data);
// process.exit(0)
// });

// grep.on('close', (code) => {
//   console.log('grep close-----------', code)
//   if (code !== 0) {
//     console.log(`grep process exited with code ${code}`);
//   }
// });


/* When using the detached option to start a long - running process,
  the process will not stay running in the background after the parent exits
unless it is provided with a stdio configuration that is not
connected to the parent.If the parent's stdio is inherited, the child will
remain attached to the controlling terminal. */


// const subprocess = spawn(process.argv[0], ['test.js'], {
//   detached: true,
//   stdio: ['ignore', 'ignore', 'ignore',]
// });

// subprocess.unref();



// =========OPTIONS======
// STDIO--------------------

/* 'pipe': Create a pipe between the child process and the parent process.The parent end
of the pipe is exposed to the parent as a property on the child_process object as
  subprocess.stdio[fd].Pipes created for fds 0, 1,
  and 2 are also available as subprocess.stdin, subprocess.stdout
and subprocess.stderr, respectively. */

/* 'ipc': Create an IPC channel for passing messages / file descriptors between parent and child.
A ChildProcess may have at most one IPC stdio file descriptor.Setting this option enables the
subprocess.send() method.If the child is a Node.js process, the presence of an IPC channel
will enable process.send() and process.disconnect() methods, as well as 'disconnect'
and 'message' events within the child.Accessing the IPC channel fd in any way other than
process.send() or using the IPC channel with a child process that is not a Node.js instance is not supported.
 */

/* 'ignore': Instructs Node.js to ignore the fd in the child.While Node.js will always
open fds 0, 1, and 2 for the processes it spawns, setting the fd to 'ignore' will
cause Node.js to open / dev / null and attach it to the child's fd. */

/* 'inherit': Pass through the corresponding stdio stream to / from the parent process.
In the first three positions, this is equivalent to process.stdin, process.stdout,
  and process.stderr, respectively.In any other position, equivalent to 'ignore' */

/*<Stream>: object: Share a readable or writable stream that refers to a tty,
file, socket, or a pipe with the child process.
The stream's underlying file descriptor is duplicated in the child process
to the fd that corresponds to the index in the stdio array. The stream must have an
underlying descriptor (file streams do not until the 'open' event has occurred). */

/* Positive integer: The integer value is interpreted as a file descriptor
that is currently open in the parent process. It is shared with the child
 process, similar to how <Stream> objects can be shared. Passing sockets is not supported on Windows. */


const subprocess = fork('./test.js', {
  detached: false,
  env: {
    name: 'test js'
  },
  stdio: 'inherit'
});
// subprocess.send({ message: 'Message' }, (err, data) => {
//   console.log('+++++', 'sended', data)
// });

console.log(subprocess.connected)


subprocess.on('message', (message) => {
  console.log(message)
})
subprocess.on('close', () => {
  console.log('close')
});
// subprocess.kill('SIGHUP')
subprocess.unref();
subprocess.ref();

setTimeout(() => {
  console.log('last-----', subprocess.connected, subprocess.exitCode, subprocess.spawnargs)
}, 1000)

// console.log(subprocess.channel)


// subprocess.unref();

// execFile('./test.bash')



