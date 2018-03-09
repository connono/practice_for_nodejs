var events = require('events');
var eventEmitter = new events.EventEmitter();
//listener#1
var listener1 = function listener1(){
	console.log('listener1 start');
}
//listener#2
var listener2 = function listener2(){
	console.log('listener2 start');
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + 'of listeners');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log("listener1 not listen any more");
//emit event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log('remains' + eventListeners + 'listeners');
console.log('END');
