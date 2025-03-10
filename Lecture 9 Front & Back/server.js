var cors = require('cors');
var mongoose = require(mongoose);

var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

port = process.env.PORT || 3000

User = require('./api/models/userListModel');

mongoose.Promise= global.Promise;
mongoose.connect('mongodb', function(err) {
  if (err) {
    console.log('Error in Mongoose connection');
    throw err;
  }
  console.log('Successfully connected');
})

var routes = require('./api/routes/userListRoutes');
routes(app);
app.listen(port, "0.0.0.0",() => {
  console.log('Server started on port ' + port);
});