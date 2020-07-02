const log = (data) => {
  console.log(data)
};

setTimeout(() => {
  console.log('setTimeout')
});

setImmediate(() => {
  console.log('setImmediate')
});
process.nextTick(() => {
  console.log('nextTick')
});

let bar;

function someAsyncApiCall(callback) {
  callback()
}

someAsyncApiCall(() => {
  setImmediate(console.log, '--setImmediate');
  process.nextTick(console.log, '--nextTick')
});

bar = 1;
