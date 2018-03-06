const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const config = {
    port: 3000,
};

// Mongo DB
mongoose.connect('mongodb://localhost/imd-demo-app', (err) => {
    if (err) {
        console.log(err);
    }
});

// set the view engine to ejs
app.set('view engine', 'ejs');

// Body parser
app.use(bodyParser.json({ limit: "50mb", keepExtensions: true }));
 
// Init routes
require("./routes/")(app);

app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`); // eslint-disable-line no-console
});
