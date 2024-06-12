const {checkRepeatedWords}  = require('./utils')

describe('UnitTests', () => {
    test('two words in the first sentece', () => {

        const input = ['hi how are are you?','I am very good']
        const expected = `"are" is repeated at line: 1`
        const actual = checkRepeatedWords(input)
        expect(actual).toEqual(expected);
    });
    test('two words in the first and second senteces', () => {

        const input = ['hi how are you today','today I am very good']
        const expected = `"today" is repeated on end of line 1 and beginning of line 2`
        const actual = checkRepeatedWords(input)
        expect(actual).toEqual(expected);
    });

    test('two repeated words in the first sentece', () => {

        const input = ['hi hi how are are you?','I am very good']
        const expected = `"hi" is repeated at line: 1\n"are" is repeated at line: 1`
        const actual = checkRepeatedWords(input)
        expect(actual).toEqual(expected);
    });
    test('two repeated words in the first sentece and one repeated word at end of first and begining of second', () => {

        const input = ['hi hi how are are you? So','So, I am very good']
        const expected = `"hi" is repeated at line: 1\n"are" is repeated at line: 1\n"So" is repeated on end of line 1 and beginning of line 2`
        const actual = checkRepeatedWords(input)
        expect(actual).toEqual(expected);
    });


})