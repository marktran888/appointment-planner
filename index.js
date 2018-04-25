const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.plugin(require('mongoose-unique-validator'));
mongoose.Promise = require('bluebird');


const app = express();
const port = 4000;
app.use(express.static(`${__dirname}/public`));

app.listen(port, () => console.log(`Express running on port ${port}`));

module.exports = app;
