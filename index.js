var express = require('express');
var app = express();

const fileUpload = require('express-fileupload');
const neatCsv = require('neat-csv');
const cors = require('cors');
const bodyParser = require('body-parser');
const mainRoutes = require('./routes');
app.use(cors());
app.use(fileUpload());
app.use('/', express.static('public'));
app.use('/', mainRoutes);

app.listen(8080, function () {
  console.log('Visit http://localhost:8080');
  console.log('Server listening on port 8080!');
});
