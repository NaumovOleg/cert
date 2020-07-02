console.log('ddddddd', process.env, process.argv);

process.on('message', (mess) => {
  console.log('Subsprocess on message', mess)
});

process.send('Message from subsprocess')
