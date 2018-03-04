var express = require('express');
var app = express();

const config = {
    port: 3000,
};
 
// Init routes
require("./routes/")(app);

app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`); // eslint-disable-line no-console
});
