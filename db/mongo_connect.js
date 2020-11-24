const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/lion', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://cortez:031078@cluster0.p7wdh.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo connected")
  // we're connected!
});

module.exports = db;