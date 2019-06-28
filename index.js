var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 3001;

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('ServerON');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('newUser', () => {
    io.emit('newUser');
  })

  socket.on('newMessage', ({username, message})=>{
    io.emit('newMessage', {username, message});
  });

});


http.listen(port, function(){
  console.log(`listening on *:${port}`);
});