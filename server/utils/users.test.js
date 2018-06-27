const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'rhb',
            room: 'office'
        };
        users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);

    });

    it('should remove a user', () => {
        var original = users.users[0];
        var removed = users.removeUser(users.users[0].id);

        expect(removed).toEqual(original);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var notRemoved = users.removeUser(42);

        expect(notRemoved).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var found = users.getUser(users.users[0].id);

        expect(found).toEqual(users.users[0]);
    });

    it('should not find user', () => {
        var notFound = users.getUser(42);

        expect(notFound).toNotExist();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });
    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });
});
