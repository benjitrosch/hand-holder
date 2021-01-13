const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

const messageRouter = require('./routes/msg');

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use('/msg', messageRouter);

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

const server= require('http').Server(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err

    const host = server.address().address;
    const port = server.address().port;

    console.log('listening at http://' + host + ':' + port);
});

io.on('connection', (client) => {
    console.log('made socket connection', client.id);
    io.on('disconnect', ()=> console.log('succesfully disconnected'));
});