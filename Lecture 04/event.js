// let arr = [1, 2, 3, 4, 5];

// console.log(arr.__proto__);

function EventEmitter() {
    this.events = {};
}

EventEmitter.prototype.on = function (eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
}

EventEmitter.prototype.emit = function (eventName,data) {
    if (this.events[eventName]) {
        this.events[eventName].forEach(listener => {
            listener(data);
        });
    }
}

export default EventEmitter;