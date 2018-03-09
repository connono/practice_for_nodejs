var events = require('events');
var eventEmitter = new events.EventEmitter();
//eventEmitter.on('eventName', eventHandler);
//eventEmitter.emit('eventName');
var connectHandler = function connected(){
	console.log('success');
	eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function(){
	console.log('success receive');
});
eventEmitter.emit('connection');
console.log('end');
