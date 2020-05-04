console.log('Launched test js file ');
console.log('Process env', process.env['name']);
console.log('Process.argv', process.argv);
console.log('Process.argv0', process.argv0);
console.log('Process execArgv', process.execArgv)

// throw new Error('Test file error')


// setTimeout(() => {
//   console.log('timed out fffff ')
// }, 5000);


process.on('data', (data) => {
  console.log(data)
});

process.on('message', (data) => {

  console.log('process.on message', data);
  process.exit(0)
});


process.stdin.on('message', (data) => {
  console.log('process.stdin.on message', data)
});

process.stdin.on('data', (data) => {
  console.log('process.stdin.on data', data)
});
process.stdin.on('read', (data) => {
  console.log('process.stdin.on read', data)
});

process.stdout.on('message', (data) => {
  console.log('process.stdout.on message', data)
});

process.stdout.on('data', (data) => {
  console.log('process.stdout.on data', data)
});
process.stdout.on('read', (data) => {
  console.log('process.stdout.on read', data)
});

process.send('Message from subsprocess', () => {

})



