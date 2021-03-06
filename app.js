const EventEmitter = require("./EventEmitter").EventEmitter;

const emitter = new EventEmitter();
const eventNames = {
    CLICK: "CLICK"
};

// You should not rely on using magic strings, this is bad as it is easy to make a typo to cause a bug and it is hard for tools to help us find it.
// emitter.addEventListener('click', function () {
//     console.log('BUTTON PRESSED, done! ')
// });

// instead of 'click' create a variable which equals to 'click' if it is undefined it will be easy to debug
emitter.addEventListener(eventNames.CLICK, function () {
    console.log("Button was clicked !");
});

emitter.emit("CLICK");