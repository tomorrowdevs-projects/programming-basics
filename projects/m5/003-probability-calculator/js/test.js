const { Hat, experiment } = require("./index.js");

/*
describe("description", () => {
  test("description.", () => {
    const actual = ;
    const expected = ;
    expect(actual).toEqual(expected);
  });
});


*/

describe("Hat and experiment", () => {
  describe(".contents", () => {
    test("Expected creation of hat object to add correct contents.", () => {
      const hat = new Hat("red=3", "blue=2");
      const actual = hat.contents;
      const expected = ["red", "red", "red", "blue", "blue"];
      expect(actual).toEqual(expected);
    });
  });

  describe(".draw()", () => {
    test("Expected hat draw to return two items from hat contents.", () => {
      const hat = new Hat("red=5");
      const actual = hat.draw(2);
      const expected = ["red", "red"];
      expect(actual).toEqual(expected);
    });

    test("Expected hat draw to return all items from hat contents.", () => {
      const hat = new Hat("red=2");
      const actual = hat.draw(2);
      const expected = ["red", "red"];
      expect(actual).toEqual(expected);

      const actual2 = hat.contents.length;
      const expected2 = 0;
      expect(actual2).toEqual(expected2);
    });

    test("Expected hat draw to reduce number of items in contents.", () => {
      const hat = new Hat("red=5", "blue=2");
      hat.draw(2);
      const actual = hat.contents.length;
      const expected = 5;
      expect(actual).toEqual(expected);
    });
  });

  describe("experiment()", () => {
    test("Expected experiment method to return a different probability.", () => {
      const hat = new Hat("blue=3", "red=2", "green=6");
      const actual = experiment(hat, { blue: 2, green: 1 }, 4, 1000);
      const expected = 0.272;
      expect(actual).toBeCloseTo(expected, 0.01);

      const hat2 = new Hat("yellow=5", "red=1", "green=3", "blue=9", "test=1");
      const actual2 = experiment(
        hat2,
        { yellow: 2, blue: 3, test: 1 },
        20,
        100
      );
      const expected2 = 1.0;
      expect(actual2).toBeCloseTo(expected2, 0.01);
    });
  });
});
