
const sum = require('./utils');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


/*
const checkVertical = require('.utils');

test('vertical 0', () => {

    const bingoCard = [
        [1,2,4,5,10],
        [0, 0, 0, 0, 0],
        [31,35,38,41,42],
        [53,55,58,59,60],
        [61,62,64,65,75]
    ]

  expect(checkVertical(bingoCard, 0)).toBe(true);

});
*/