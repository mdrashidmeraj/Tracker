require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');


const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const  mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.bumkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUri, async(err)=>{
    if(err) throw err;
    console.log("conncted to db")

});
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongo instance');
})
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});


app.get('/',requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});


app.listen(3000, () => {
    console.log("listening on 3000")
})