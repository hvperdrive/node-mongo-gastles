const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const config = {
    port: 3000,
};

// Body parser
app.use(bodyParser.json({ limit: "50mb", keepExtensions: true }));
 
// Init routes
require("./routes/")(app);

app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`); // eslint-disable-line no-console
});
