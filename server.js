const express = require("express");
const bodyParser = require('body-parser');
require("dotenv").config();

const  app = express();
const PORT = process.env.port || 5000
app.use(bodyParser.json())

const  router = require('./routes/crud');

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`)
})