# event
'event' is a core module. it exports a class. when we export it , we create a object with that class.
```
const EventEmitter = require('events'); 
const emitter = new EventEmitter();  
```

``` emitter.emit ``` creates an event  
``` emitter.on ``` listens to event and runs a callback function

```
emitter.on('bellRing', () => {           
  console.log('we need to run');
});

emitter.emit('bellRing');                

```

### When event is created , we should use the same EventEmitter for that. so we need to create an instance of the same event


```
const EventEmitter = require('events');

class School extends EventEmitter {
  startPeriod() {
    console.log('class started');

    setTimeout(() => {
      this.emit('bellRing', {
        period: 4,
        text: 'has ended',
      });
    }, 2000);
  }
}
```

