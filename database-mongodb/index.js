const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/mykea';

const db = mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 45000,
    autoIndex: false,
    connectTimeoutMS: 45000
});

module.exports = db;