class Room {
    constructor(name){
        this.name = name;
        this.occupants = 0;
        this.users = [];
    }

    addUser(user, ssid){
        this.occupants++;
        this.users.push({name: user, ssid});
    }

    removeUser(user){
        this.occupants--;
        this.users.splice(this.users.findIndex((target)=>target.name === user), 1);
    }

}

module.exports = Room;