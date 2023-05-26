// Adding Express and Path Module Dependencies Here. 
const express = require('express');
const path = require('path');
const port = 5000;
const host = '127.0.0.1';
const db = require('./config/mongoose.js');
const Contact = require('./models/contact.js');
const app = express();


// Set the 'view engine' setting to 'ejs'
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware for parsing URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// Serve Static Files
app.use(express.static(__dirname + '/Public'));

// Route handler.
app.get('/', (req, res) => {
    const query = Contact.find({});
    query.exec()
    .then(contacts =>{
        return res.render('index',{
                    title:"Contact  List",
                    contact_List : contacts
                 });
        }).catch(err =>{
            console.log(err);
        });
        
});

// Route handler.
app.post('/create-contact', (req,res)=>{

    // Access form data
    const contacts = {
        name: req.body.name,
        phone: req.body.phone
    };

    // Process the data...
    Contact.create(contacts)
    .then(createContact => {
        return res.redirect('back');
    })
    .catch(err => {
        console.log(err);
    });

});

// Route handler.
app.get('/delete-contact', (req,res)=>{
    
    //Access phone id 
    let id = req.query.id
    Contact.findByIdAndRemove(id)
    .then().catch(err=>{
        console.log(err);
    });
    return res.redirect('/');

});

// Start the server
app.listen(port,host, (error)=>{
    if(error){
        console.log(error);

    }
    console.log(`server running at http://${host}:${port}`);

});