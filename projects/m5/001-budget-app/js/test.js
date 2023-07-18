const Category = require("./class.js");
const createSpendChart = require("./function.js");

describe(Category, () => {
  const food = new Category("Food");
  const business = new Category("Business");
  const entertainment = new Category("Enternainment");
  const clothes = new Category("Clothes");

  describe(".deposit()", () => {
    test("Expected `deposit` method to create a specific object in the ledger instance variable.", () => {
      food.deposit(900, "deposit");
      const actual = food.ledger[0];
      const expected = { amount: 900, description: "deposit" };
      expect(actual).toEqual(expected);
    });

    test("Expected calling `deposit` method with no description to create a blank description.", () => {
      business.deposit(500);
      const actual = business.ledger[0];
      const expected = { amount: 500, description: "" };
      expect(actual).toEqual(expected);
    });
  });

  describe(".withdraw()", () => {
    test("Expected `withdraw` method to create a specific object in the ledger instance variable.", () => {
      food.withdraw(40.0, "milk, cereal, eggs, bacon, bread");
      const actual = food.ledger[1];
      const expected = {
        amount: -40.0,
        description: "milk, cereal, eggs, bacon, bread",
      };
      expect(actual).toEqual(expected);
    });

    test("Expected `withdraw` method with no description to create a blank description.", () => {
      business.withdraw(50);
      const actual = business.ledger[1];
      const expected = {
        amount: -50,
        description: "",
      };
      expect(actual).toEqual(expected);
    });

    test("Expected `withdraw` method to return `True`.", () => {
      const actual = business.withdraw(60);
      const expected = true;
      expect(actual).toEqual(expected);
    });

    test("Expected `withdraw` method to return `False` when there are not enough funds available.", () => {
      const actual = clothes.withdraw(100);
      const expected = false;
      expect(actual).toEqual(expected);
    });
  });

  describe(".getBalance()", () => {
    test("Expect the correct balance.", () => {
      clothes.deposit(1000, "budget");
      clothes.withdraw(450, "New jacket");
      const actual = clothes.getBalance();
      const expected = "550.00";
      expect(actual).toEqual(expected);
    });
  });

  describe(".transfer()", () => {
    test("Expected `transfer` method to create specific ledger items in objects.", () => {
      clothes.transfer(150, entertainment);

      const actualClothes = clothes.ledger[2];
      const expectedClothes = {
        amount: -150,
        description: "Transfer to Enternainment",
      };
      expect(actualClothes).toEqual(expectedClothes);

      const actualEntertainment = entertainment.ledger[0];
      const expectedEntertainment = {
        amount: 150,
        description: "Transfer from Clothes",
      };
      expect(actualEntertainment).toEqual(expectedEntertainment);
    });

    test("Expected `transfer` method to return `True`.", () => {
      const actual = clothes.transfer(20, entertainment);
      const expected = true;
      expect(actual).toEqual(expected);
    });

    test("Expected `transfer` method to return `False` when there are not enough funds available.", () => {
      const actual = clothes.transfer(5000, entertainment);
      const expected = false;
      expect(actual).toEqual(expected);
    });
  });

  describe(".checkFunds()", () => {
    test("Expected `checkFunds` method to be False", () => {
      const actual = business.checkFunds(1000);
      const expected = false;
      expect(actual).toEqual(expected);
    });

    test("Expected `checkFunds` method to be True", () => {
      const actual = entertainment.checkFunds(10);
      const expected = true;
      expect(actual).toEqual(expected);
    });
  });

  describe(".checkAmount()", () => {
    test("Expected `checkAmount` method to be True.", () => {
      const actual = food.checkAmount(70);
      const expected = true;
      expect(actual).toEqual(expected);
    });

    test("Expected `checkAmount` method to be False.", () => {
      const actual = food.checkAmount(7000000);
      const expected = false;
      expect(actual).toEqual(expected);
    });
  });

  describe(".printBudget()", () => {
    test("Expected different string representation of object.", () => {
      const actual = food.printBudget();
      const expected =
        "*************Food*************\ndeposit                 900.00\nmilk, cereal, eggs, bac -40.00\nTotal: 860.00";
      expect(actual).toEqual(expected);
    });
  });

  describe("createSpendChart()", () => {
    test("Expected different chart representation. Check that all spacing is exact.", () => {
      const actual = createSpendChart([food, clothes, entertainment, business]);
      const expected = `Percentage spent by category
100|            
 90|            
 80| o          
 70| o          
 60| o          
 50| o          
 40| o          
 30| o          
 20| o          
 10| o  o       
  0| o  o  o  o 
    -------------
     C  B  F  E 
     l  u  o  n 
     o  s  o  t 
     t  i  d  e 
     h  n     r 
     e  e     n 
     s  s     a 
        s     i 
              n 
              m 
              e 
              n 
              t 
`;

      expect(actual).toEqual(expected);
    });
  });
});
