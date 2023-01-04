const { createBingoCard, changeNumberExtract, checkHorizontalBingo, checkVerticalBingo, checkDiagonalBingo, getSumArray }  = require('./utils');

describe('Test Function Bingo Win', () => {

  test(`should generate a random array of numbers between min and max with a maximum length of maxlength`, () => {
      
    const min = 1;
    const max = 15;
    const maxLenght = 5;
    const regex = /[1-15]/;

    expect(regex.test(createBingoCard(min, max, maxLenght))).toBe(true);
    expect(createBingoCard(min, max, maxLenght)).toHaveLength(maxLenght);
  
  })

  test(`should replace the extracted number with zero in the specified object`, () => {
      
    const objBingo =  {
      B: [ 1, 3, 5, 6, 9 ],
      I: [ 20, 22, 25, 9, 29 ],
      N: [ 10, 37, 40, 41, 45 ],
      G: [ 90, 20, 52, 56, 58 ],
      O: [ 34, 64, 67, 74, 75 ]
    }

    const objBingoExpected = {
      B: [ 0, 3, 5, 6, 9 ],
      I: [ 20, 22, 25, 9, 29 ],
      N: [ 10, 37, 40, 41, 45 ],
      G: [ 90, 20, 52, 56, 58 ],
      O: [ 34, 64, 67, 74, 75 ]
    }
    // in this case min max = 1 to replace the specific number
    expect(changeNumberExtract(1, 1, objBingo)).toEqual(objBingoExpected)
  
  })
  
  test(`should return the sum of the values in the array`, () => {

    const array = [1, 2, 3, 4, 5];
    
    expect(getSumArray(array)).toBe(15);
  
  })
  
  
  test(`should return true if there is a horizontal line of zero in objBingo`, () => {

    const objbingo = {
        B: [ 0, 0, 0, 0, 0 ],
        I: [ 17, 20, 21, 26, 28 ],
        N: [ 34, 36, 37, 42, 44 ],
        G: [ 48, 52, 53, 57, 60 ],
        O: [ 62, 63, 66, 68, 71 ]
      }

    expect(checkHorizontalBingo(objbingo)).toBe(true);

  })

  test(`should return false if there is no horizontal line of zero in objBingo`, () => {

    const objbingo = {
        B: [ 0, 8, 0, 9, 0 ],
        I: [ 17, 20, 21, 26, 28 ],
        N: [ 34, 36, 37, 42, 44 ],
        G: [ 48, 52, 53, 57, 60 ],
        O: [ 62, 63, 66, 68, 71 ]
      }

    expect(checkHorizontalBingo(objbingo)).toBe(false);

  })
  
  
  test(`should return true if there is a vertical line of zero in objBingo`, () => {
      
    const objbingo = {
        B: [ 0, 3, 5, 6, 13 ],
        I: [ 0, 22, 25, 26, 29 ],
        N: [ 0, 37, 39, 41, 45 ],
        G: [ 0, 48, 52, 56, 58 ],
        O: [ 0, 64, 67, 74, 75 ]
      }

    expect(checkVerticalBingo(objbingo)).toBe(true);

  })
  
  test(`should return false if there is a vertical line of zero in objBingo`, () => {
      
    const objbingo = {
        B: [ 0, 3, 5, 6, 13 ],
        I: [ 0, 22, 25, 26, 29 ],
        N: [ 9, 37, 39, 41, 45 ],
        G: [ 0, 48, 52, 56, 58 ],
        O: [ 8, 64, 67, 74, 75 ]
      }

    expect(checkVerticalBingo(objbingo)).toBe(false);

  })

  test(`should return true if there is a diagonale line of zero in objBingo`, () => {

    const diagonaleRightbingo = {
        B: [ 40, 3, 5, 6, 0 ],
        I: [ 20, 22, 25, 0, 29 ],
        N: [ 10, 37, 0, 41, 45 ],
        G: [ 90, 0, 52, 56, 58 ],
        O: [ 0, 64, 67, 74, 75 ]
      }

      const diagonaleLeftbingo = {
        B: [ 0, 9, 8, 6, 13 ],
        I: [ 9, 0, 33, 26, 29 ],
        N: [ 8, 8,0, 41, 45 ],
        G: [ 7, 9, 30, 0, 58 ],
        O: [ 1, 8, 0, 74, 0]
      }

    expect(checkDiagonalBingo(diagonaleRightbingo)).toBe(true);
    expect(checkDiagonalBingo(diagonaleLeftbingo)).toBe(true);

  })

  test(`should return false if there is a diagonale line of zero in objBingo`, () => {

    const diagonaleRightbingo = {
        B: [ 40, 3, 5, 6, 0 ],
        I: [ 20, 22, 25, 0, 29 ],
        N: [ 10, 37, 40, 41, 45 ],
        G: [ 90, 20, 52, 56, 58 ],
        O: [ 0, 64, 67, 74, 75 ]
      }
  
    expect(checkDiagonalBingo(diagonaleRightbingo)).toBe(false);

  })

})