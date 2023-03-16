const probCalculator = require(`./index.js`);
const experiment = probCalculator.experiment;
const Hat = probCalculator.Hat;

describe(`UnitTests`, () => {
    test(`test_hat_class_contents`, () => {
    hat = new Hat(`red=3`,`blue=2`);
    actual = hat.contents;
    expected = ["red", "red", "red", "blue", "blue"];
    expect(actual).toStrictEqual(expected);
    })

    test(`test_hat_draw`, () => {
        hat = new Hat(`red=5`, `blue=2`);
        actual = hat.draw(2);
        expected = ['blue', 'red'];
        expect(actual.sort()).toEqual(expected.sort());
        actual = hat.contents.length;
        expected = 5;
        expect(actual).toBe(expected);
    })

    test(`test_prob_experiment`, () => {
        hat = new Hat(`blue=3`, `red=2`, `green=6`);
        probability = experiment(hat, {"blue":2,"green":1}, 4, 1000);
        actual = probability;
        expected = 0.272;
        expect(actual).toBeCloseTo(expected, 1);
        hat = new Hat(`yellow=5`, `red=1`, `green=3`, `blue=9`, `test=1`);
        probability = experiment(hat, {"yellow":2,"blue":3,"test":1}, 20, 100);
        actual = probability;
        expected = 1.0;
        expect(actual).toBeCloseTo(expected, 1);
    })
});
