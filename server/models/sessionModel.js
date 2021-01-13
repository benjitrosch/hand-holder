const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://benjitrosch:csunit10@happythoughts.cxxb6.mongodb.net/hh?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'hh'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now }
});

module.exports = mongoose.model('session', sessionSchema);