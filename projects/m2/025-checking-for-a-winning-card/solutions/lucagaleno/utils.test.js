const {checkHorizontal}  = require('./utils');

test('orizzontale ', () => {

    const bingoCard = [
        [1,2,4,5,10],
        [0, 0, 0, 0, 0],
        [31,35,38,41,42],
        [53,55,58,59,60],
        [61,62,64,65,75]
    ]

  expect(checkHorizontal(bingoCard, 0)).toBe(true);
});
