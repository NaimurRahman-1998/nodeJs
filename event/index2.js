/* eslint-disable prettier/prettier */

const School = require('./school');

const school = new School();

school.on('bellRing', ({period,text}) => {           
  console.log(`we need to run bcz ${period}th period ${text}`);
});


school.startPeriod();