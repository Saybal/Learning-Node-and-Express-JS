// import EventEmitter from "./event.js";

// const emiiter = new EventEmitter();

const EventEmitter = require('events');

const emiiter = new EventEmitter();

console.log(emiiter);

emiiter.on("greet", (data) => console.log("Hello, Ami greet", data));
emiiter.on("click", (data) => console.log("Hello, Ami click", data));

console.log(emiiter);

emiiter.emit("greet", "World");
emiiter.emit("click", "Button");
emiiter.emit("click", "Another Button");
