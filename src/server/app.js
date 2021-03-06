var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');

// read and pass the environment variables into reactjs application
const env = dotenv.config().parsed;

const romRouter = require('./routes/rom');

var app = express();
var compression = require('compression');
var helmet = require('helmet');

app.use(compression()); //Compress all routes
app.use(helmet());
app.set("port", env.SERVER_PORT);

app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Add headers
app.use((req, res, next) => {
  // console.log('Get a request');
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://mmt.box');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Log the request
  // console.log(`${req.method} ${req.protocol}://${req.hostname}${req.path} ${res.statusCode}`);
  // Pass to next layer of middleware
  next();
});

app.use('/api/roms', romRouter);
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
// start server

var server = app.listen(app.get('port'), env.SERVER_HOST, function () {
  console.log(`[SERVER] DigitBrain Exp2 server started on: http://${env.SERVER_HOST}:${env.SERVER_PORT}`);
});