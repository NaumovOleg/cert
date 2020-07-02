
/* The microtask queue is managed by V8 and may be used
  in a similar manner to the process.nextTick()
queue, which is managed by Node.js.The process.nextTick()
queue is always processed before the microtask
queue within each turn of the Node.js event loop. */

queueMicrotask(() => {
  console.log('ddddd')
});
