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

const Room = require('./Room.js');
const activeRooms = [];

server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err

    const host = server.address().address;
    const port = server.address().port;

    console.log('listening at http://' + host + ':' + port);
});

io.on('connection', (client) => {

    console.log('made socket connection', client.id);

    client.on('joinroom', (data) => {

      if (activeRooms.length == 0){

        makeNewRoom(data);

      } else {
        
        for (let i = 0; i < activeRooms.length; i++){

          if (activeRooms[i].room.occupants < 2){
            activeRooms[i].room.addUser();

            console.log(`user ${data} is joining room ${activeRooms[i].room.name}`)
            client.join(activeRooms[i].room.name);
            break;
          }

        }

        makeNewRoom(data);

      }
    });

    const makeNewRoom = (data) =>{
      let newRoom = new Room(data);
      newRoom.addUser();
      activeRooms.push({id: data, room: newRoom});

      console.log(`user ${data} is joining room ${data}`)
      client.join(data);
    }

    client.on('leaveroom', (data) => {

      client.leave(data);

      let prevRoom = activeRooms.find(room => room.id === data).room;
      prevRoom.removeUser();

      if(prevRoom.occupants === 0)
        activeRooms.splice(activeRooms.findIndex((room)=>room.id === data), 1);

    });

    io.on('disconnect', ()=> console.log('succesfully disconnected'));

});