// =========================================================================
// ============================== Require ==================================
// =========================================================================
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('colors');


// =========================================================================
// =============================== Setup ===================================
// =========================================================================
var app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './client/static')));



// =========================================================================
// ============================= Database ==================================
// =========================================================================
// require('./server/config/mongoose.js');


// =========================================================================
// =============================== Routes ==================================
// =========================================================================
require('./server/config/routes.js')(app);


// =========================================================================
// =============================== Listen ==================================
// =========================================================================
app.listen(9000, function(){
  console.log('Listening on 9000'.yellow);
})
