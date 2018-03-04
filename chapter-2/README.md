# Chapter 2 - Sync vs Async

## Example: Read a file sync and async

1. Create a js file _(index.js)_
```
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
```

2. Use the demo functions
```
const demoPath = './hello-world.txt';
readFileSyncDemo(demoPath);
console.log('----------------------------------');
readFileAsyncDemo(demoPath);
```

3. Run with node(mon)
```
$ node .
$ nodemon .
```

3. Output:
```
START READING FILE SYNC:
Hello world!

STOP READING FILE SYNC
----------------------------------
START READING FILE ASYNC:
STOP READING FILE ASYNC
DATA:  Hello world!
```
