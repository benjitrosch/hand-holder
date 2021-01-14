class Room {
    constructor(name){
        this.name = name;
        this.occupants = 0;
    }

    addUser(){
        this.occupants++;
    }

    removeUser(){
        this.occupants--;
    }

}

module.exports = Room;