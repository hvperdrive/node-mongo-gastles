const fs = require('fs');

function readFileSyncDemo(path) {
    console.log('START READING FILE SYNC:');

    var data = fs.readFileSync(path, 'utf8');
    console.log(data);

    console.log('STOP READING FILE SYNC');
}

function readFileAsyncDemo(path) {
    console.log('START READING FILE ASYNC:');

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('DATA: ', data);
    });

    console.log('STOP READING FILE ASYNC');
} 


/**
 * START TEST:
 */

const demoPath = './hello-world.txt';
readFileSyncDemo(demoPath);
console.log('----------------------------------');
readFileAsyncDemo(demoPath);
