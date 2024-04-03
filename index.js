const express = require('express');
const db = require('./database/db');
const passport = require('passport');
const localPassport = require('passport-local').Strategy;

const app = express();

// creating a global middleware of passport
passport.use(
    new localPassport((username, password, done) => {
        try{
            if(username === 'abhay' && password === '123'){
                return done(null, {});
            }
            else{
                return done(null, false, {message: 'Invalid Credentials'})
            }
        }
        catch(err){
            return done(err);
        }
    })
)

const localAuthMiddleware = passport.authenticate('local', {session: false});


const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send("Pet Consultant Application");
})

const petRoutes = require('./Routes/pet.route');
app.use('/pet', localAuthMiddleware, petRoutes);

const doctorRoutes = require('./Routes/doctor.route');
app.use('/doctor', localAuthMiddleware, doctorRoutes);

const ngoRoutes = require('./Routes/ngo.route');
app.use('/ngo', localAuthMiddleware, ngoRoutes);

app.listen(3000);
