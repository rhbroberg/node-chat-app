var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'rhb';
        const latitude = 1;
        const longitude = 2;
        const url = `https://www.google.com/maps?q${latitude},${longitude}`;

        const message = generateLocationMessage(from, latitude, longitude);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, url });
    });
});
