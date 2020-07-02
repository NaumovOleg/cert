const { EventEmitter, captureRejectionSymbol, once, on } = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super(
      { captureRejections: true }
    )
  }

  [captureRejectionSymbol](err, event, ...args) {
    console.log('rejection happened for', event, 'with', err, ...args);
    this.destroy(err);
  }
};


const myEmitter = new MyEmitter();
myEmitter.on('event', async (response) => {
  console.log('an event occured', response);

  // return Promise.reject('ddddddddddddd')
  return 'ddd'
  // throw new Error('Error emitted');
  // myEmitter.emit('error', new Error('whoops!'));
});

// myEmitter.on('error', (error) => {
//   console.log('an error occured', error);
// });

myEmitter.once('event_once', () => {
  console.log('event_once');
});

// myEmitter.on(EventEmitter.errorMonitor, (err) => {
//   console.log('error -  ', err);
// });

myEmitter[Symbol.for('nodejs.rejection')] = console.log;
setTimeout(async () => {
  myEmitter.emit('myevent', 42);
  myEmitter.emit('event', 'name');
  // myEmitter.emit('erorr', new Error('Evenbt error'))
  myEmitter.emit('event_once');
  myEmitter.emit('event_once');

}, 500);

myEmitter.prependListener('foo', () => console.log('b'));
myEmitter.prependOnceListener('event_once', () => console.log('b'));
myEmitter.removeAllListeners('event_once');


// console.log(EventEmitter.listenerCount(myEmitter, 'event'));
// console.log('getMaxListeners', myEmitter.getMaxListeners())
// myEmitter.setMaxListeners(20)
// console.log('getMaxListeners', myEmitter.getMaxListeners());
// console.log('eventNames', myEmitter.eventNames());
// console.log('listenerCount', myEmitter.listenerCount('event'));
// console.log('listeners', myEmitter.listeners('event'));
// console.log('rawListeners', myEmitter.rawListeners('event'));

const listeners = myEmitter.rawListeners('event');
const logFnWrapper = listeners[0];


// console.log('--------------------------------', once);
async function run() {
  const ee = new EventEmitter();

  // setImmediate(() => {
  ee.on('myevent', () => {
    console.log('myevent emitted')
  })
  // ee.emit('error', err);
  // });

  process.nextTick(() => {
    ee.emit('myevent', 42, 444);
  });

  const value = await once(ee, 'myevent');
  console.log(value);

  // const err = new Error('kaboom');
  // process.nextTick(() => {
  ee.on('myevent', () => {
    console.log('myevent emitted')
  })
  // ee.emit('error', err);
  // });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();




