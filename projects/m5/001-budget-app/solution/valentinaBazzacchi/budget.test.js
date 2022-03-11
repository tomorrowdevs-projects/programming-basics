const Category = require("./category");
const createSpendChart = require("./create-spend-chart");

test("Expected `deposit` method to create a specific object in the ledger instance variable", () => {
    const food = new Category("Food");
    food.deposit(900, "deposit");
    expect(food.ledger[0]).toStrictEqual({"amount": 900, "description": "deposit"});
})

test("Expected `withdraw` method to create a specific object in the ledger instance variable", () => {
    const food = new Category("Food");
    food.deposit(900, "deposit");
    food.withdraw(45.67, "milk, cereal, eggs, bacon, bread");
    expect(food.ledger[1]).toStrictEqual({"amount": -45.67, "description": "milk, cereal, eggs, bacon, bread"});
})

test("Expected `withdraw` method with no description to create a blank description.", () => {
    const food = new Category("Food");
    food.deposit(900, "deposit");
    food.withdraw(45.67);
    expect(food.ledger[1]).toStrictEqual({"amount": -45.67, "description": ""});
})

test("Expected `withdraw` method to return `True`.", () => {
    const food = new Category("Food");
    food.deposit(900, "deposit");
    const goodWithdraw = food.withdraw(45.67);
    expect(goodWithdraw).toBe(true);
})

test("Expected balance to be 854.33", () => {
    const food = new Category("Food");
    food.deposit(900, "deposit");
    food.withdraw(45.67, "milk, cereal, eggs, bacon, bread");
    expect(food.getBalance()).toBe(854.33);
})

test("Expected `transfer` method to create a specific ledger item in food object.", () => {
    const food = new Category("Food");
    const entertainment = new Category("Entertainment");
    food.deposit(900, "deposit");
    food.withdraw(45.67, "milk, cereal, eggs, bacon, bread");
    food.transfer(20, entertainment);
    expect(food.ledger[2]).toStrictEqual({"amount": -20, "description": "Transfer to Entertainment"});
})

test("Expected `transfer` method to return `True`.", () => {
    const food = new Category("Food");
    const entertainment = new Category("Entertainment");
    food.deposit(900, "deposit");
    food.withdraw(45.67, "milk, cereal, eggs, bacon, bread");
    const goodTransfer = food.transfer(20, entertainment); 
    expect(goodTransfer).toBe(true);
})

test("transfer` method to create a specific ledger item in entertainment object.", () => {
    const food = new Category("Food");
    const entertainment = new Category("Entertainment");
    food.deposit(900, "deposit");
    food.withdraw(45.67, "milk, cereal, eggs, bacon, bread");
    food.transfer(20, entertainment); 
    expect(entertainment.ledger[0]).toStrictEqual({"amount": 20, "description": "Transfer from Food"});
})

test("Expected `checkFunds` method to be False", () => {
    const food = new Category("Food");
    food.deposit(10, "deposit");
    expect(food.checkFunds(20)).toBe(false);   
})

test("Expected `checkFunds` method to be True", () => {
    const food = new Category("Food");
    food.deposit(10, "deposit");
    expect(food.checkFunds(10)).toBe(true);
})

test("Expected `withdraw` method to return `False`", () => {
    const food = new Category("Food");
    food.deposit(100, "deposit");
    const goodWithdraw = food.withdraw(100.10);
    expect(goodWithdraw).toBe(false);
})

test("Expected `transfer` method to return `False`.", () => {
    const food = new Category("Food");
    const entertainment = new Category("Entertainment");
    food.deposit(100, "deposit");
    const goodTransfer = food.transfer(200, entertainment);
    expect(goodTransfer).toBe(false);
})

test("Expected different string representation of object.", () => {
    const food = new Category("Food");
    const entertainment = new Category("Entertainment");
    food.deposit(900, "deposit");
    food.withdraw(45.67, "milk, cereal, eggs, bacon, bread");
    food.transfer(20, entertainment);
    expect(food.display()).toStrictEqual("*************Food*************\ndeposit                 900.00\nmilk, cereal, eggs, bac -45.67\nTransfer to Entertainme -20.00\nTotal: 834.33");
})

test("Expected different chart representation. Check that all spacing is exact.", () => {
    const food = new Category("Food");
    const entertainment = new Category("Entertainment");
    const business = new Category("Business");
    food.deposit(900, "deposit");
    entertainment.deposit(900, "deposit");
    business.deposit(900, "deposit");
    food.withdraw(105.55);
    entertainment.withdraw(33.40);
    business.withdraw(10.99);
    expect(createSpendChart([business, food, entertainment])).toStrictEqual("Percentage spent by category\n100|          \n 90|          \n 80|          \n 70|    o     \n 60|    o     \n 50|    o     \n 40|    o     \n 30|    o     \n 20|    o  o  \n 10|    o  o  \n  0| o  o  o  \n    ----------\n     B  F  E  \n     u  o  n  \n     s  o  t  \n     i  d  e  \n     n     r  \n     e     t  \n     s     a  \n     s     i  \n           n  \n           m  \n           e  \n           n  \n           t  \n");
})