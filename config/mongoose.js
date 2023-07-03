//import required packages 
const mongoose = require('mongoose');
//connect to db 
const mongoDb = "mongodb+srv://<yourusername>:<yourpassword>@contactlist.6zvbstw.mongodb.net/?retryWrites=true&w=majority"

mongoose
.connect(mongoDb)
.then(()=>console.log("mongoDb connected succesfully "))
.catch((err)=> console.log("connection error to connect mongoDb ",err));
