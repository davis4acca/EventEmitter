var EventEmitter = require('./EventEmitter').EventEmitter;

var emitter = new EventEmitter();

emitter.addEventListener('click', function () {
    console.log('BUTTON PRESSED, done! ')
});

emitter.emit('click')