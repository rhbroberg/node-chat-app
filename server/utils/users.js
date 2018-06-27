// addUser (id, name, room)
// removeUser (id)
// getUser(id)
// getUserList(name)

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old`;
//     }
// }

// var me = new Person('rhb', 25);
// var description = me.getUserDescription();

// console.log(description);

class Users { // eslint-disable-line no-unused-vars
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = { id, name, room };
        this.users.push(user);

        return user;
    }

    removeUser(id) {
        var toRemove = this.getUser(id);
        if (toRemove) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return toRemove;
    }

    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList(room) {
        // ['foo', 'bar', 'baz']
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = { Users };
