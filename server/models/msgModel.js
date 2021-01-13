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

// sets a schema for the 'species' collection
const messageSchema = new Schema({
  sessionID: String,
  message: String,
  location: String,
  date: String,
});

// creats a model for the 'species' collection that will be part of the export
const Message = mongoose.model('message', messageSchema);

module.exports = {
  Message
};
