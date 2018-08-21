// ------DEPENDENCIES-------
//=======================================
var express =require('express');
var bodyParser = require('body-parser');
var path = require('path');

// ------SET UP EXPRESS APP------
//===================================
var app = express();
var PORT = process.env.PORT || 8080;

// Enables Express to serve Static Files
//======================================
app.use(express.static('app/public'));

// Sets Up Express APp to handle Data Parsing
//===============================================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Require additional routing files fot API & HTML routes
//=======================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start the Server to begin Listening
//=======================================================
app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`)
})



