var net = require('net');


net.createServer(function(socket) {

    const name = socket.remoteAddress + ":" +  socket.remotePort;
    socket.write("Welcome " + name + "\n");
    socket.write(name + "joined chat \n");

    socket.on('data', function (data) {
        socket.write(socket.name + "> " + data);
        console.log(socket.name + "> " + data);
    });
}).listen(4200);

console.log("Chat server running at port 4200\n");