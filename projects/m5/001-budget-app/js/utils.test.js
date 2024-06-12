
//import {Category, createSpendChart} from './utils';
const {Category, createSpendChart}  = require('./utils');

describe('UnitTests', () => {
  let food;
  let entertainment;
  let business;

  beforeEach(() => {
    food = new Category('Food');
    entertainment = new Category('Entertainment');
    business = new Category('Business');
  });

  test('my test case', () => {
    expect(food.name).toBe('Food');
    expect(entertainment.name).toBe('Entertainment');
    expect(business.name).toBe('Business');
  });

  test('test deposit', () => {
    food.deposit(900, 'deposit');
    const actual = food.ledger[0];
    const expected = { amount: 900, description: 'deposit' };
    expect(actual).toEqual(expected);
  });

  test('test deposit no description', () => {
    food.deposit(45.56);
    const actual = food.ledger[0];
    const expected = { amount: 45.56, description: '' };
    expect(actual).toEqual(expected);
  });

  test('test withdraw', () => {
    food.deposit(900, 'deposit');
    food.withdraw(45.67, 'milk, cereal, eggs, bacon, bread');
    const actual = food.ledger[1];
    const expected = { amount: -45.67, description: 'milk, cereal, eggs, bacon, bread' };
    expect(actual).toEqual(expected);
  });

  test('test withdraw no description', () => {
    food.deposit(900, 'deposit');
    const goodWithdraw = food.withdraw(45.67);
    const actual = food.ledger[1];
    const expected = { amount: -45.67, description: '' };
    expect(actual).toEqual(expected);
    expect(goodWithdraw).toBe(true);
  });

  test('test get balance', () => {
    food.deposit(900, 'deposit');
    food.withdraw(45.67, 'milk, cereal, eggs, bacon, bread');
    const actual = food.getBalance();
    const expected = 854.33;
    expect(actual).toBe(expected);
  });

  test('test transfer', () => {
    food.deposit(900, 'deposit');
    food.withdraw(45.67, 'milk, cereal, eggs, bacon, bread');
    const goodTransfer = food.transfer(20, entertainment);
    const actual = food.ledger[2];
    const expected = { amount: -20, description: 'Transfer to Entertainment' };
    expect(actual).toEqual(expected);
    expect(goodTransfer).toBe(true);
    const actual2 = entertainment.ledger[0];
    const expected2 = { amount: 20, description: 'Transfer from Food' };
    expect(actual2).toEqual(expected2);
  });

  test('test withdraw no funds', () => {
    food.deposit(100, 'deposit');
    const goodWithdraw = food.withdraw(100.10);
    expect(goodWithdraw).toBe(false);
    expect(food.ledger.length).toBe(1);
  });
    
  test('test transfer no funds', () => {
    food.deposit(100, 'deposit')
    goodTransfer = food.transfer(200, entertainment)
    expect(goodTransfer).toBe(false);
    expect(food.ledger.length).toBe(1);
  })

  test('test print ledger balace sheet', () => {
    food.deposit(900,'deposit')
    food.withdraw(45.67,'milk, cereal, eggs, bacon, breag')
    food.transfer(20, entertainment)
    const actual = food.printResult()
    const expected = 
`*************Food*************
deposit                 900.00
milk, cereal, eggs, bac -45.67
Transfer to Entertainme -20.00
Total: 834.33`

    expect(actual).toEqual(expected)
  })

  test('test create spend chart', () => {
    food.deposit(900, 'deposit');
    entertainment.deposit(900, 'deposit');
    business.deposit(900,'deposit')
    food.withdraw(105.55);
    entertainment.withdraw(33.40);
    business.withdraw(10.99)
    const actual = createSpendChart([business, food, entertainment]);
    const expected = 
`Percentage spent by category
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
           t `
    
    expect(actual).toEqual(expected);
  });
});
