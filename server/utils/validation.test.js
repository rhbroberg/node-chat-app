const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', () => {
        expect(isRealString(42)).toBeFalsy();
    });

    it('should reject strings with only spaces', () => {
        expect(isRealString('   ')).toBeFalsy();
    });

    it('should allow string with non-spacecharacters', () => {
        expect(isRealString('abc  ')).toBeTruthy();
    });
});
