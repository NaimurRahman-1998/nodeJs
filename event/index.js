/* eslint-disable prettier/prettier */

const EventEmitter = require('events'); // it is a core module. it is Class

const emitter = new EventEmitter();     // Because it is a class we create a new object using "new" keyword

emitter.on('bellRing', ({period,text}) => {           // here we are saying what to do when the event happens
  console.log(`we need to run bcz ${period}th period ${text}`);
});

setTimeout(()=>{
    emitter.emit('bellRing' , {       // here we are creating an event
        period: 4,
        text:'has ended'
    })
},2000)               


