const fs = require('fs');

function readFileAsyncWithPromise(path) {
    return new Promise((resolve, reject) => {
        // Set timeout to mock reading a large file
        setTimeout(() => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }, 2000)
    });
} 


/**
 * START TEST:
 */
async function demo() {
    console.log('START DEMO');
    const data = await readFileAsyncWithPromise('./hello-world.txt');
    console.log(data);
    console.log('STOP DEMO');
}

demo();
