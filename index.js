var express = require('express');
var app = express();

const fileUpload = require('express-fileupload');
const neatCsv = require('neat-csv');
const cors = require('cors');
const bodyParser = require('body-parser');
const mainRoutes = require('./routes');
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.use(fileUpload());
app.use('/', express.static('public'));
app.use('/', mainRoutes);

app.listen(8080, function () {
  console.log('Visit http://localhost:8080');
  console.log('Server listening on port 8080!');
});
