import fs from 'fs';

function readFileCb(err: Error | null, data: string | Buffer) {
    console.log('2. will this?');
    console.log(data.toString());
}

// readFileCb(err, data)
fs.readFile('./hello.txt', readFileCb);

console.log('1. what will be printed first? ')