// // Mongoose code for later :P
// const mongoose = require('mongoose');
// const path = require('path');
// mongoose.connect('mongodb://localhost/userManagement', {useNewUrlParser: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => console.log('db connected'));

// const userSchema = new mongoose.Schema({
//     age: Number,
//     name: String,
//     gender: String,
//     phone: String,
//     address: String
// });

// const user = mongoose.model('userCollection', userSchema);

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'src/public')));
app.set('view engine', 'pug');

app.get('name/of/request', (req, res) => {});
app.post('name/of/request', (req, res) => {});

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`App Server listen on port: ${port}`);
});