/* eslint-disable prettier/prettier */
const http = require('http');

const server = http.createServer();     // this "server is an event"

server.on('connection' , ()=>{          // this is like event.on
    console.log('server running')       // it will console when we hit localhost:3000 in browser
})


server.listen(3000)                     // this is a event creator/listener like event.emit
                                        // it creates the server.