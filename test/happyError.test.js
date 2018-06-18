import HappyError from '../src/happyError';

describe('HappyError', () => {
    it('should be defined');
    describe('.toString', () => {
        it('should be defined');
        it('should return a string with a line number');
        it('should return a string with a message');
        it('should return a string with the file name');
    });
});
