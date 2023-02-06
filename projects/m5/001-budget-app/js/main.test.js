const { Category} = require("./budget");
const createSpendChart = require("./functions");

describe("UnitTests", () => {
  let food, entertainment, business;

  beforeEach(() => {
    food = new Category("Food");
    entertainment = new Category("Entertainment");
    business = new Category("Business");
  });

  test("test name", () => {
    expect(food.name).toBe("Food");
    expect(entertainment.name).toBe("Entertainment");
    expect(business.name).toBe("Business");
  });

  test("test deposit", () => {
    food.deposit(900, "deposit");
    const actual = food.ledger[0];
    const expected = { amount: 900, description: "deposit" };
    expect(actual).toEqual(expected);
  });

  test("test deposit no description", () => {
    food.deposit(45.56);
    const actual = food.ledger[0];
    const expected = { amount: 45.56, description: "" };
    expect(actual).toEqual(expected);
  });

  test("test withdraw", () => {
    food.deposit(900, "deposit");
    food.withdraw(45.76, "milk, cereal, eggs, bacon, bread");
    const actual = food.ledger[1];
    const expected = {
      amount: -45.76,
      description: "milk, cereal, eggs, bacon, bread",
    };
    expect(actual).toEqual(expected);
  });

  test("test withdraw no description", () => {
    food.deposit(900, "deposit");
    const goodWithdraw = food.withdraw(45.67);
    const actual = food.ledger[1];
    const expected = { amount: -45.67, description: "" };
    expect(actual).toEqual(expected);
    expect(goodWithdraw).toBe(true);
  });

  test("test withdrawal no funds", () => {
    food.deposit(100, "deposit");
    const goodWithdraw = food.withdraw(100.1);
    expect(goodWithdraw).toBe(false);
  });

  test("test get Balance", () => {
    food.deposit(900, "deposit");
    food.withdraw(45.67, "milk, cereal, eggs, bacon, bread");
    const actual = food.getBalance();
    const expected = 854.33;
    expect(actual).toEqual(expected);
  });

  test("test transfer", () => {
    food.deposit(900, "deposit");
    food.withdraw(45.67, "milk, cereal, eggs, bacon, bread");
    const goodTransfer = food.transfer(20, entertainment);
    const actual = food.ledger[2];
    const expected = { amount: -20, description: "Transfer to Entertainment" };
    expect(actual).toEqual(expected);
    expect(goodTransfer).toBe(true);
    const actual2 = entertainment.ledger[0];
    const expected2 = { amount: 20, description: "Transfer from Food" };
    expect(actual2).toEqual(expected2);
  });

  test("test transfer no funds", () => {
    food.deposit(100, "deposit");
    const goodTransfer = food.transfer(200, entertainment);
    expect(goodTransfer).toBe(false);
  });

  test("test check funds", () => {
    food.deposit(10, "deposit");
    const actual = food.checkFunds(20);
    const expected = false;
    expect(actual).toEqual(expected);
    const actual2 = food.checkFunds(10);
    const expected2 = true;
    expect(actual2).toEqual(expected2);
  });

  test("test print", () => {
    food.deposit(900, "deposit");
    food.withdraw(45.67, "milk, cereal, eggs, bacon, bread");
    food.transfer(20, entertainment);
    const actual = food.print();
    const expected =
      "*************Food*************\ndeposit                 900.00\nmilk, cereal, eggs, bac -45.67\nTransfer to Entertainme -20.00\nTotal: 834.33";
    expect(actual).toEqual(expected);
  });

  test("test create spend chart", () => {
    food.deposit(900, "deposit");
    entertainment.deposit(900, "deposit");
    business.deposit(900, "deposit");
    food.withdraw(105.55);
    entertainment.withdraw(33.4);
    business.withdraw(10.99);
    const actual = createSpendChart([business, food, entertainment]);
    const expected = `
Percentage spent by category
100|
 90|
 80|
 70|    o
 60|    o
 50|    o
 40|    o
 30|    o
 20|    o  o
 10|    o  o
  0| o  o  o
    ----------
     B  F  E
     u  o  n
     s  o  t
     i  d  e
     n     r
     e     t
     s     a
     s     i
           n
           m
           e
           n
           t`;

            
    expect(actual).toEqual(expected);
  });
});
