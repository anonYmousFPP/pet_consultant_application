const mongoose = require('mongoose');
const mongooseURL = 'mongodb://localhost:27017'

mongoose.connect(mongooseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connection', () => {
    console.log(`Connected to MongoDB`);
})

db.on('disconnection', () => {
    console.log(`disconnected to MongoDB`);
})

db.on('err', () => {
    console.log(`error in MongoDB`);
})

module.exports = db;