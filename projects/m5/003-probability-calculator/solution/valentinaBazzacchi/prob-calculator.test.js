const probCalculator = require("./prob-calculator")

// test Hat class "contents"
test('Expected creation of hat object to add correct contents.', () => {
    const hat = new probCalculator.Hat({red:3, blue:2});
    expect(hat.contents).toStrictEqual(["red","red","red","blue","blue"]);
})

// test draw method of the class Hat
test('Expected hat draw to reduce number of items in contents.', () => {
    const hat = new probCalculator.Hat({red:5, blue:2});
    hat.draw(2);
    expect(hat.contents.length).toBe(5);
})

test('Expected hat draw to return all the items in contents if the number of balls to draw exceeds the available quantity.', () => {
    const hat = new probCalculator.Hat({red:3, green:1});
    hat.draw(5);
    expect(hat.contents).toStrictEqual(["red","red","red","green"]);
})

// test experiment function
test('Expected experiment method to return a different probability.', () => {
    const hat = new probCalculator.Hat({blue:3, red:2, green:6});
    const probability = probCalculator.experiment(hat, {blue:2, green:1}, 4, 1000);
    expect(probability).toBeGreaterThan(0.1);
})

test('Expected experiment method to return a probability equal to 1 if numBallsDrawn is greater than or equal the number of balls in contents.', () => {
    const hat = new probCalculator.Hat({yellow:3, red:1, green:3, blue:9, test:1});
    const probability = probCalculator.experiment(hat, {yellow:2, blue:3, test:1}, 20, 100);
    expect(probability).toEqual(1);
})
