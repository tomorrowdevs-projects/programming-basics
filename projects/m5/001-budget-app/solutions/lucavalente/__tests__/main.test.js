const Category = require("../budget")

test("SetUp", () => {
    const business = new Category("Business")
    const entertainment  = new Category("Entertainment ")
});

test("Deposit", () => {
    const food = new Category("Food");
    food.deposit(900, "deposit");
    actual = food.get_ladger()[0];
    expected = {"amount": 900, "description": "deposit"};

    expect(actual).toEqual(expected, 'Expected `deposit` method to create a specific object in the ledger instance variable.');
});

test("Transfer", () => {
    const food = new Category("Food");
    const entertainment = new Category("Entertainment");
    good_transfer = food.transfer(200, entertainment);
    expect(good_transfer).toEqual(false, 'Expected `transfer` method to return `False`.');
});

test("Test toString()", () => {
    const food = new Category("Food");
    const entertainment = new Category("Entertainment");

    food.deposit(900, "deposit")
    food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
    food.transfer(20, entertainment)

    actual = food.toString();
    expected = "*************Food*************\ndeposit                 900.00\nmilk, cereal, eggs, bac -45.67\nTransfer to Entertainme -20.00\nTotal: 834.33"
    expect(actual).toEqual(expected, 'Expected different string representation of object.');
})

