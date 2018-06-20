var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const myFrom = 'rhb';
        const myText = 'yo mama';
        var message = generateMessage(myFrom, myText);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from: myFrom,
            text: myText
        });
    });
});
