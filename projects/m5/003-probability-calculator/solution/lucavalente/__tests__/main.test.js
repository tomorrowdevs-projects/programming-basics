const Hat = require("../prob_calculator").Hat;
const experiment = require("../prob_calculator").experiment;


test("test_hat_class_contents", ()=>{
    hat = new Hat({"red" : 3, "blue" : 2});
    actual = hat.contents;
    expected = ["red","red","red","blue","blue"];
    expect(actual).toEqual(expected, 'Expected creation of hat object to add correct contents.')
})

test("test_hat_draw", ()=>{
    hat = new Hat({"red" : 5, "blue" : 2});
    actual = hat.draw(2);
    expected = 2;
    expect(actual.length).toBe(expected, "Expected hat draw to reduce number of items in contents.");
})

test("test_prob_experiment", ()=>{
    hat = new Hat({"blue" : 3, "red" : 2, "green" : 6});
    actual = experiment(hat, {"blue": 2, "green": 1}, 4, 1000)
    expected = 27;
    expect(actual).toBe(expected, 'Expected experiment method to return a different probability.'); // delta??

    hat = new Hat({"yellow" : 5, "red" : 1, "green" : 3, "blue": 9, "test": 1});
    actual = experiment(hat,{"yellow":2,"blue":3,"test":1}, 20, 100);
    expected = 100;
    expect(actual).toBe(expected, "Expected experiment method to return a different probability."); // delta??
})