//import all required packeges
const express = require("express");
const app = express();
const port = 9000;
const db = require('./config/mongoose')
//middleware 
app.use(express.urlencoded({extended:false}));
//handle route
const routes = require('./routes/contact');
app.use('/', routes);
//serve static files
app.use(express.static(__dirname + '/public'));
//set up view engine
app.set('view engine' , 'ejs');
app.set('views', './views');
//Start the server
app.listen(port, (err) => {
  if (err) {
    console.log("Server Error", err);
  }
  console.log(`Server is running on port : ${port}`);
});
