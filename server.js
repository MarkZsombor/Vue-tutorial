const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => { console.log('Database is connected')},
  err => { console.log('Cannot connect to DB' + err)}
);

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

const server = app.listen(function(){
  console.log('Listening on port ' + port);
});