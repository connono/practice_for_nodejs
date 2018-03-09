var fs = require("fs");
var data = 'xxx: www.runoob.com';
//create a writable stream -> output.txt
var writeStream = fs.createWriteStream('output.txt', {'flags' : 'a' });
writeStream.write(data, 'UTF8');
//remind this is ended.
writeStream.end();
//do this stream -> data, end, and error
writeStream.on('finish',function(){
	console.log('success');
});
writeStream.on('error', function(){
	console.log(err.stack);
})
console.log('END');
