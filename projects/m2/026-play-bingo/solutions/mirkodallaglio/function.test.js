const funct = require('./function');

//Shuffle Function
describe('Shuffle Function', () => {
  const arr = [1,2,3,4,5,6];
  const shuffleArr = funct.shuffle(arr);

  it('contain the same numbers mixed up', () => {
      expect(shuffleArr).toEqual(expect.arrayContaining(arr));

  });

  it('result has the same number of elements', () => {
    expect(shuffleArr).toHaveLength(arr.length);
  })
});

//genNumberExtraction Funcion
describe('genNumberExtraction Function', () => {
  const result = funct.genNumberExtraction(1,10)
 const arr = [1,2,3,4,5,6,7,8,9,10]
  it('it should be an array with 10 elements', () => {
    expect(result).toHaveLength(10)
  })
  it('there are all the elements of the starting array', () => {
    expect(result).toEqual(expect.arrayContaining(arr))
  })
});

//randmonNumInRange Function
describe('randmonNumInRange Function', () => {
  const [min, max] = [1,75];
  let qta = 6;
  const result = funct.randomNumInRange(min, max, qta);

  it('result has n elements equal to qta', () => {
    expect(result).toHaveLength(qta);
  })

  it('each element is between min and max', () => {
    expect.extend({
      toBeWithinRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
          return {
            message: () =>
              `${result}: expected ${received} to be within range ${floor} - ${ceiling}`,
            pass: true,
          };
        } else {
          return {
            message: () =>
              `${result}: expected ${received} not to be within range ${floor} - ${ceiling}`,
            pass: false,
          };
        }
      },
    });
    result.forEach(el => expect(el).toBeWithinRange(min, max));
  })

  it('qta is greater than max', () => {
    qta = 76;
    const result2 = funct.randomNumInRange(min, max, qta);
    expect(result2).toBeUndefined();
  })
});

//bingoCard Function
const [max, row, keyArr] = [75, 5, ['B','I','N','G','O']];

describe('bingoCard Function', () => {
  const keyArrClone = [...keyArr];
  const result = funct.bingoCard(max, row, keyArr);

  it('result has a object', () => {
    expect(typeof result).toBe('object')
  })

  it('the keys are those given in input', () => {
    expect(Object.keys(result).length).toBe(keyArrClone.length)
    expect(Object.keys(result)).toEqual(keyArrClone);
  })

  it('the object value are arrays with n elements equal to row and in the required range', () => {
    Object.values(result).forEach(el => {
      expect(Array.isArray(el)).toBeTruthy();
      expect(el).toHaveLength(row);
      el.forEach(num => expect(num).toBeWithinRange(1, max))
    });
  })
});

const arr = [
  {
    B: [ 2, 13, 3, 7, 15 ],
    I: [ 20, 16, 18, 23, 29 ],
    N: [ 44, 37, 34, 41, 39 ],
    G: [ 50, 49, 59, 52, 55 ],
    O: [ 75, 69, 70, 61, 73 ]
  },
  {
    B: [ 14, 15, 8, 11, 7 ],
    I: [ 26, 17, 20, 24, 27 ],
    N: [ 34, 32, 39, 31, 33 ],
    G: [ 47, 53, 46, 52, 55 ],
    O: [ 68, 61, 70, 74, 71 ]
  }];

//replaceValueInArrObj Function
describe('replaceValueInArrObj Function', () => {
    const arr2 = [
      {
        B: [ 2, 13, 3, 7, 15 ],
        I: [ 0, 16, 18, 23, 29 ],
        N: [ 44, 37, 34, 41, 39 ],
        G: [ 50, 49, 59, 52, 55 ],
        O: [ 75, 69, 70, 61, 73 ]
      },
      {
        B: [ 14, 15, 8, 11, 7 ],
        I: [ 26, 17, 0, 24, 27 ],
        N: [ 34, 32, 39, 31, 33 ],
        G: [ 47, 53, 46, 52, 55 ],
        O: [ 68, 61, 70, 74, 71 ]
      }];

  it('it should replace one value with another', () => {
    funct.replaceValueInArrObj(arr, 20, 0);
    expect(arr[0].I[0]).toBe(0);
    expect(arr[1].I[2]).toBe(0);
  })

  it('verify that other values have not changed', () => {
    expect(arr2).toEqual(arr)
  })
});

//winnerSearch Function
describe('winnerSearch Function', () => {

  maxNumber = jest.fn().mockReturnValue(75)();
  numForRow = jest.fn().mockReturnValue(5)();
  numExtraction = jest.fn().mockReturnValue(funct.genNumberExtraction (1, 75).splice(0,65))
  tableWin = jest.fn().mockReturnValue({
    COLUMN: false,
    ROW: false,
    DIAGONAL: false,
    BINGO: false,
  })();

  it('find the winning rows', () => {
    const orizzontalWin = [
      {
        B: [ 2, 0, 3, 7, 15 ],
        I: [ 20, 0, 18, 23, 29 ],
        N: [ 44, 0, 34, 41, 39 ],
        G: [ 50, 0, 59, 52, 55 ],
        O: [ 75, 0, 70, 61, 73 ]
      },
      {
        B: [ 14, 15, 8, 11, 0 ],
        I: [ 26, 17, 20, 24, 0 ],
        N: [ 34, 32, 39, 31, 0 ],
        G: [ 47, 53, 46, 52, 0 ],
        O: [ 68, 61, 70, 74, 0 ]
      }];

      const result = funct.winnerSearch(arr, orizzontalWin, keyArr)
      expect(result).toEqual([
        [ 0, [ 13, 16, 37, 49, 69 ], '!! WIN !! Five- number ROW' ],
        [ 1, [ 7, 27, 33, 55, 71 ], '!! WIN !! Five- number ROW' ]
      ])
  })

  it('find the winning column', () => {
    const columnWin = [
      {
        B: [ 0, 0, 0, 0, 0 ],
        I: [ 20, 16, 18, 23, 29 ],
        N: [ 44, 37, 34, 41, 39 ],
        G: [ 50, 49, 59, 52, 55 ],
        O: [ 75, 69, 70, 61, 73 ]
      },
      {
        B: [ 14, 15, 8, 11, 7 ],
        I: [ 26, 17, 20, 24, 27 ],
        N: [ 34, 32, 39, 31, 33 ],
        G: [ 47, 53, 46, 52, 55 ],
        O: [ 0, 0, 0, 0, 0 ]
      }];

      const result = funct.winnerSearch(arr, columnWin, keyArr)
      expect(result).toEqual([
          [ 0, [ 2, 13, 3, 7, 15 ], '!! WIN !! Five-number COLUMN' ],
          [ 1, [ 68, 61, 70, 74, 71 ], '!! WIN !! Five-number COLUMN' ]
      ])
  })

  it('find the winning diagonal', () => {
    const diagonalWin = [
      {
        B: [ 2, 13, 3, 7, 0 ],
        I: [ 20, 16, 18, 0, 29 ],
        N: [ 44, 37, 0, 41, 39 ],
        G: [ 50, 0, 59, 52, 55 ],
        O: [ 0, 69, 70, 61, 73 ]
      },
      {
        B: [ 0, 15, 8, 11, 7 ],
        I: [ 26, 0, 20, 24, 27 ],
        N: [ 34, 32, 0, 31, 33 ],
        G: [ 47, 53, 46, 0, 55 ],
        O: [ 68, 61, 70, 74, 0 ]
      }];

      const result = funct.winnerSearch(arr, diagonalWin, keyArr)
      expect(result).toEqual([
        [ 0, [ 15, 23, 34, 49, 75 ], '!! WIN !! Five- number DIAGONAL' ],
        [ 1, [ 14, 17, 39, 52, 71 ], '!! WIN !! Five- number DIAGONAL' ]
      ])
  })
  it('find the winning bingo', () => {
    tableWin = jest.fn().mockReturnValue({
      COLUMN: true,
      ROW: true,
      DIAGONAL: true,
      BINGO: false,
    })();

    const bingoWin = [
      {
        B: [ 0, 0, 0, 0, 0 ],
        I: [ 0, 0, 0, 0, 0 ],
        N: [ 0, 0, 0, 0, 0 ],
        G: [ 0, 0, 0, 0, 0 ],
        O: [ 0, 0, 0, 0, 0 ]
      },
      {
        B: [ 0, 15, 8, 11, 7 ],
        I: [ 26, 0, 20, 24, 27 ],
        N: [ 34, 32, 0, 31, 33 ],
        G: [ 47, 53, 46, 0, 55 ],
        O: [ 68, 61, 70, 74, 0 ]
      }];

      const result = funct.winnerSearch(arr, bingoWin, keyArr)
      expect(result).toEqual([
        [ 0, 0, '!! WIN !! BINGO' ]
      ])
  })
});

//autoPlay Function
describe('autoPlay Function', () => {
   
  it('it should be an array with 2 arrays inside each with 10 elements', () => {
    bingoKeys = jest.fn().mockReturnValue(['B','I','N','G','O'])();
    maxNumber = jest.fn().mockReturnValue(75)();
    minNumber = jest.fn().mockReturnValue(1)();
    const result = funct.autoPlay(10);
    expect(result).toHaveLength(2);
    expect(result[0]).toHaveLength(10);
    expect(result[1]).toHaveLength(10);
  })
  
});


//minMaxAvrg Function
describe('minMaxAvrg Function', () => {
  const result = funct.minMaxAvrg([2,55,23,67,12,7,45,26,71,32])
  
  it('it should be an array with 3 elements', () => {
    expect(result).toHaveLength(3);
  })
  
  it('find the minimum value', () => {
    expect(result[0]).toEqual(2);
  })
  
  it('find the maximum value', () => {
    expect(result[1]).toEqual(71);
  })
  
  it('find the avarage value', () => {
    expect(result[2]).toEqual(34);
  })
});
