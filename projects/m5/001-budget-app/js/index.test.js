
const budgetApp = require(`./index`);
const Category = budgetApp.Category;
const create_spend_chart =  budgetApp.create_spend_chart;


describe(`UnitTests`, () => {

    beforeEach(() => {
        food = new Category("Food");
        entertainment = new Category("Entertainment");
        business = new Category("Business");
    })

    test(`test_deposit`, () => {
        food.deposit(900, `deposit`);
        actual = food.ledger[0];
        expect(actual).toStrictEqual({"amount": 900, "description": "deposit"});
        expect(actual).toHaveProperty("amount", 900);
        expect(actual).toHaveProperty("description", "deposit");
    })

    test(`test_deposit_no_description`, () => {
        food.deposit(45.56);
        actual = food.ledger[0];
        expect(actual).toStrictEqual({"amount": 45.56, "description": ""});
        expect(actual).toHaveProperty("amount", 45.56);
        expect(actual).toHaveProperty("description", "");
    })

    test(`test_withdraw`, () => {
        food.deposit(900, "deposit");
        food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
        actual = food.ledger[1];
        expect(actual).toStrictEqual({"amount": -45.67, "description": "milk, cereal, eggs, bacon, bread"});
        expect(actual).toHaveProperty("amount", -45.67);
        expect(actual).toHaveProperty("description", "milk, cereal, eggs, bacon, bread");
    })

    test(`test_withdraw_no_description`, () => {
        food.deposit(900, "deposit");
        good_withdraw = food.withdraw(45.67);
        actual = food.ledger[1];
        expect(actual).toStrictEqual({"amount": -45.67, "description": ""});
        expect(actual).toHaveProperty("amount", -45.67);
        expect(actual).toHaveProperty("description", "");
        expect(good_withdraw).toBe(true);
    })

    test(`test_get_balance`, () => {
        food.deposit(900, "deposit");
        food.withdraw(45.67, "milk, cereal, eggs, bacon, bread");
        actual = food.get_balance();
        expected = 854.33;
        expect(actual).toBeCloseTo(expected);
    })

    test(`test_transfer`, () => {
        food.deposit(900, "deposit");
        food.withdraw(45.67, "milk, cereal, eggs, bacon, bread");
        good_transfer = food.transfer(20, entertainment);
        actual = food.ledger[2];
        expect(actual).toStrictEqual({"amount": -20, "description": "Transfer to Entertainment"});
        expect(actual).toHaveProperty("amount",  -20);
        expect(actual).toHaveProperty("description", "Transfer to Entertainment");
        expect(good_transfer).toBe(true);
        actual = entertainment.ledger[0];
        expect(actual).toStrictEqual({"amount": 20, "description": "Transfer from Food"});
        expect(actual).toHaveProperty("amount",  20);
        expect(actual).toHaveProperty("description", "Transfer from Food");
    })

    test(`test_check_funds`, () => {
        food.deposit(10, "deposit");
        actual = food.check_funds(20);
        expect(actual).toBe(false);
        food.deposit(10, "deposit");
        actual = food.check_funds(10);
        expect(actual).toBe(true);
    })

    test(`test_withdraw_no_funds`, () => {
        food.deposit(100, "deposit");
        good_withdraw = food.withdraw(100.10);
        expect(good_withdraw).toBe(false);
    })

    test(`test_transfer_no_funds`, () => {
        food.deposit(100, "deposit");
        good_transfer = food.transfer(200, entertainment);
        expect(good_transfer).toBe(false);
    })

    test(`test_to_string`, () => {
        food.deposit(900, "deposit")
        food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
        food.transfer(20, entertainment)
        actual = food.print();
        expected = "*************Food*************\ndeposit                 900.00\nmilk, cereal, eggs, bac -45.67\nTransfer to Entertainme -20.00\nTotal: 834.33";
        expect(actual).toBe(expected);
    })

    test(`test_create_spend_chart`, () => {
        food.deposit(900, "deposit");
        entertainment.deposit(900, "deposit");
        business.deposit(900, "deposit");
        food.withdraw(105.55);
        entertainment.withdraw(33.40);
        business.withdraw(10.99);
        actual = create_spend_chart(business, food, entertainment);
        expected = "Percentage spent by category\n100|          \n 90|          \n 80|          \n 70|    o     \n 60|    o     \n 50|    o     \n 40|    o     \n 30|    o     \n 20|    o  o  \n 10|    o  o  \n  0| o  o  o  \n    ----------\n     B  F  E  \n     u  o  n  \n     s  o  t  \n     i  d  e  \n     n     r  \n     e     t  \n     s     a  \n     s     i  \n           n  \n           m  \n           e  \n           n  \n           t  "
        expect(actual).toBe(expected);
    })
});
