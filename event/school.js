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

module.exports = School;
