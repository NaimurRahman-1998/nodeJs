/* eslint-disable prettier/prettier */
const http = require('http');

const server = http.createServer((req,res)=>{  // this "server is an event"
    if(req.url === '/'){
        res.write('hello from server')
    }
    res.end()
});    

// server.on('connection' , ()=>{         
//     console.log('server running')     
// })
// we will not use it 


server.listen(3000)                     // this is a event creator/listener like event.emit
                                        // it creates the server.