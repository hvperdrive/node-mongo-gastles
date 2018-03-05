# Gastles NodeJS en MongoDB

## Chapter 3

...

## Chapter 2 - Sync vs Async

### Example: Read a file sync and async

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


## Chapter 1 - NPM eco system

### NPM 

https://www.npmjs.com/

__Popular packages:__
* https://www.npmjs.com/package/lodash
* https://www.npmjs.com/package/react
* https://www.npmjs.com/package/moment

### package.json

https://docs.npmjs.com/files/package.json


> Creating a node app or package starts always with the `package.json` file.

1. Create the `package.json` file
```
{
  "name": "chapter-1",
  "version": "1.0.0"
}
```
> The most important things in your package.json are the name and version fields. Those are actually required, and your package won't install without them 

2. Add meta data fields
```
{
  "name": "chapter-1",
  "version": "1.0.0",
  "description": "",
  "author": "Jasper De Smet <jasper.desmet@studiohyperdrive.be",
  "license": "ISC"
}
```

3. Add a main entry point
```
{
  "name": "chapter-1",
  "version": "1.0.0",
  "description": "",
  "author": "Jasper De Smet <jasper.desmet@studiohyperdrive.be",
  "license": "ISC",
  "main": "index.js"
}
```
> The main field is the primary entry point to your program. The startpoint of the app of the primary module of the package.

4. Create the main entry point file `index.js`
```
console.log('Hello world, this is chapter 2');
```

5. Run the node package / app
```
$ node .
> Hello world, this is chapter 2
```

6. Add extra scripts
```
{
  "name": "chapter-1",
  "version": "1.0.0",
  "description": "",
  "author": "Jasper De Smet <jasper.desmet@studiohyperdrive.be",
  "license": "ISC",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

7. Run extra scripts
```
$ npm run test
> echo "Error: no test specified" && exit 1

Error: no test specified
```
> or use the shorthand: `npm test`

8. Add a custom script

Create a script file `my-custom-script.js` in this directory
```
console.log('Hello world, this is chapter 2');
```
Add the script to the `scripts` property in the `package.json`

```
{
  "name": "chapter-1",
  "version": "1.0.0",
  "description": "",
  "author": "Jasper De Smet <jasper.desmet@studiohyperdrive.be",
  "license": "ISC",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "hello": "node my-custom-script"
  }
}
```

9. Run the custom script
```
$ npm run hello
> node my-custom-script

Hello world, this is a custom script
```

### npm init

https://docs.npmjs.com/cli/init

> Creating a `package.json` is a lot of work. Run `npm init` answer the questions and checkout your freshly generated `package.json`

```
$ npm init
```

### Use a npm module / package

https://www.npmjs.com/package/chalk

1. Install the package

https://docs.npmjs.com/cli/install

```
$ npm install chalk
```
> npm install saves any specified packages into dependencies by default. Additionally, you can control where and how they get saved with some additional flags: `-D` or `--save-dev`: Package will appear in your devDependencies

2. Check the updated `package.json`
```
{
  "name": "chapter-1",
  "version": "1.0.0",
  "description": "",
  "author": "Jasper De Smet <jasper.desmet@studiohyperdrive.be",
  "license": "ISC",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "hello": "node my-custom-script"
  },
  "dependencies": {
    "chalk": "^2.3.1"
  }
}
```

3. Check the `package.lock` file

https://docs.npmjs.com/files/package-lock.json

> It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.

> (git) Always commit this file

4. Check the `node_modules` folder

> Folder with all the installed packages

> (git) Never commit this folder

5. Use the package
```
const chalk = require('chalk');
 
console.log(chalk.blue('Hello world!'));
```

6. Test the updates
```
$ node .
```

### Starting from an existing app / package

> Run `npm install` to install all the `dependencies` and `dev-dependencies`. 

### Speed up development

> Starting your app over and over again is a lot of work. Luckily, there is a tool to do this for us: `nodemon`

https://nodemon.io/

1. Install nodemon (global)

```
$ npm install -g nodemon
```

2. Test nodemon installation
```
$ nodemon -v
```

3. Run your app with `nodemon`
```
$ nodemon .
```

4. Make a change in the source _(index.js)_
```
console.log(chalk.red('Hello world, this is chapter 2!'));
```

_Option: Using nodemon without global installation:_

https://techoverflow.net/2017/08/12/using-nodemon-without-a-global-installation/

## Chapter 0 - NodeJS warm up

### Terminal

```
$ node
> 1 + 1 
2
> console.log('Hello world')
Hello world
```
> To exit, press ctr+c twice

### Run node script

1. Create a file `script.js`
2. Add some javascript  
```
console.log('Hello world')
```
3. Run the script
```
$ cd path/to/chapter-0/
$ node script.js
> Hello world
```

## Init

### Requirements

#### Node & npm (LTS)

https://nodejs.org/en/download/

__Test:__
```
$ node --version
> v8.9.4

$ npm --version
> 5.6.0
```

### Mongo

https://www.mongodb.com/download-center?jmp=nav#community

__Test:__
```
$ mongo
> 3.6.3
```

### Chapters

* ### [chapter-0](https://github.com/hvperdrive/node-mongo-gastles/tree/chapter-0) (_warm up_)
* ### [chapter-1](https://github.com/hvperdrive/node-mongo-gastles/tree/chapter-1) (_npm ecosystem_)
* ### [chapter-2](https://github.com/hvperdrive/node-mongo-gastles/tree/chapter-2) (_sync / async_)
* ### [chapter-3](https://github.com/hvperdrive/node-mongo-gastles/tree/chapter-3) (_express_)
    * #### [chapter-3.1](https://github.com/hvperdrive/node-mongo-gastles/tree/chapter-3.1) (_rest routes_)
    * #### [chapter-3.2](https://github.com/hvperdrive/node-mongo-gastles/tree/chapter-3.2) (_controllers and services_)
    * #### [chapter-3.3](https://github.com/hvperdrive/node-mongo-gastles/tree/chapter-3.3) (_mongo_)
