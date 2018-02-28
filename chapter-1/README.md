# Chapter 1 - NPM eco system

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
```
$ npm install chalk
```

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
> (git) Always commit this file

4. Check the `node_modules` folder
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
