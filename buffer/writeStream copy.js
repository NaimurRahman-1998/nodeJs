/* eslint-disable prettier/prettier */
const fs = require('fs');

const streamData = fs.createReadStream(`${__dirname}/bigData.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/output.txt`)

streamData.on('data', (chunk) => { 
    writeStream.write(chunk)
});

streamData.on('data', (chunk) => { 
    writeStream.write(chunk)
});

