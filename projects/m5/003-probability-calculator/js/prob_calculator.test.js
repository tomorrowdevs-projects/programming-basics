const probCalculator = require("./prob_calculator");

describe("UnitTests", () => {
  test("test hat class contents", () => {
    const hat = new probCalculator.Hat({ red: 3, blue: 2 });
    const actual = hat.getContents();
    const expected = ["red", "red", "red", "blue", "blue"];
    expect(actual).toEqual(expected);
  });

  test("test hat draw", () => {
    const hat = new probCalculator.Hat({ red: 5, blue: 2 });
    const actual = hat.draw(2);
    // const expected = ["blue", "red"];
    // expect(actual).toEqual(expected);
    const actualLength = hat.contents.length;
    const expectedLength = 5;
    expect(actualLength).toEqual(expectedLength);
  });

  test("test hat draw", () => {
    let hat = new probCalculator.Hat({ blue: 3, red: 2, green: 6 });
    let probability = probCalculator.experiment(hat,{blue : 2, green: 1}, 4 , 1000);
    let actual = probability;
    let expected = 0.754;
    expect(actual).toBeCloseTo(expected, 1);

    hat = new probCalculator.Hat({yellow: 5, red: 1, green: 3, blue:9, test: 1});
    probability = probCalculator.experiment(hat,{"yellow":2,"blue":3,"test":1},20,100);
    actual = probability;
    expected = 1;
    expect(actual).toBeCloseTo(expected, 0.1);
  });
});
