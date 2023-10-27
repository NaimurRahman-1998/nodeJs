/* eslint-disable prettier/prettier */

const fs = require('fs');

const streamData = fs.createReadStream(`${__dirname}/bigData.txt` , 'utf8');

streamData.on('data', (chunk) => {
//   console.log(chunk.toString());        // this chunk will give buffer packets but not at once , in a stream way
    console.log(chunk)
});

