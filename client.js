net = require('net');
socket = new net.Socket();

var myNick = 'loic';
var port = '4200';
var host = '127.0.0.1';
client = net.connect({port: port, host: host}, function(){
    client.write("Hello, I'm "+ myNick);
});

client.on('data', function(data){
    data = data.toString();
    console.log(data);
});