class Room {
    constructor(name){
        this.name = name;
        this.occupants = 0;
        this.users = [];
    }

    addUser(user){
        this.occupants++;
        this.users.push(user);
    }

    removeUser(user){
        this.occupants--;
        this.users.splice(this.users.indexOf(user), 1);
    }

}

module.exports = Room;