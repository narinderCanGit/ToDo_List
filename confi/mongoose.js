
// to require the library
const mongoose=require ('mongoose');

// to connect to the database
mongoose.connect("mongodb://localhost/todo_app", {useNewUrlParser: true, useUnifiedTopology: true, });

// to require the connection and check if it is successful
const db =mongoose.connection;

// if up and running and to print the message
db.once('open',function()
{
    console.log('connected to the database::MongoDB');
});

//to see if there is an error
db.on('error',console.error.bind(console,"error in connecting to the the database"));

