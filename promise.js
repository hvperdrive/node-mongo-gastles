const fs = require('fs');

function readFileAsyncWithPromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
} 


/**
 * START TEST:
 */
readFileAsyncWithPromise('./hello-world.txt').then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})
