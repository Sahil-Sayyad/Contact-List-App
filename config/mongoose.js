//Adding Mongoose Module Dependencies
const mongoose = require('mongoose');

//Cathing Error Here.
main().catch(err => console.log("Connection Error",err));

//Connecting to Database.
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contact_List');
  console.log("Connected to MongoDB");
}