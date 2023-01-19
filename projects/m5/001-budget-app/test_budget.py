import unittest
import budget
from budget import create_spend_chart

class UnitTest(unittest.TestCase):
    def setUp(self):
        self.food = budget.Category("Food")
        self.auto = budget.Category("Auto")
        self.clothing = budget.Category("Clothing")
    
    def test_deposit(self):
        self.food.deposit(600, "deposit")
        actual = self.food.ledger[0]
        expected = {"amount": 600, "description": "deposit"}
        self.assertEqual(actual, expected, "Expected deposit method to create a specific object in the ledger instance variable.")
    
    def test_deposit_no_description(self):
        self.food.deposit(600)
        actual = self.food.ledger[0]
        expected = {"amount": 600, "description": ""}
        self.assertEqual(actual, expected, "Expected calling deposit method with no description to create a blank description.")
    
    def test_withdraw(self):
        bad_withdraw = self.food.withdraw(3, "bread")
        actual = self.food.ledger
        expected = []
        self.assertEqual(actual, expected, "Expected that nothing is added to the ledger instance variable if there are not enough funds.")
        self.assertEqual(bad_withdraw, False, "Expected withdraw method to return False.")
        self.food.deposit(20, "deposit")
        good_withdraw = self.food.withdraw(15.75, "coffee, bread, tomatoes, oranges, biscuits")
        actual = self.food.ledger[1]
        expected = {"amount": -15.75, "description": "coffee, bread, tomatoes, oranges, biscuits"}
        self.assertEqual(actual, expected, "Expected withdraw method to create a specific object in the ledger instance variable.")
        self.assertEqual(good_withdraw, True, "Expected withdraw method to return True.")
    
    def test_withdraw_no_description(self):
        bad_withdraw = self.food.withdraw(3)
        actual = self.food.ledger
        expected = []
        self.assertEqual(actual, expected, "Expected that nothing is added to the ledger instance variable if there are not enough funds.")
        self.assertEqual(bad_withdraw, False, "Expected withdraw method to return False.")        
        self.food.deposit(20, "deposit")
        good_withdraw = self.food.withdraw(15.75)
        actual = self.food.ledger[1]
        expected = {"amount": -15.75, "description": ""}
        self.assertEqual(actual, expected, "Expected withdraw method to create a specific object in the ledger instance variable.")
        self.assertEqual(good_withdraw, True, "Expected withdraw method to return True.")
    
    def test_get_balance(self):
        self.food.deposit(20, "deposit")
        self.food.withdraw(15.75, "coffee, bread, tomatoes, oranges, biscuits")
        actual = self.food.get_balance()
        expected = 4.25
        self.assertEqual(actual, expected, "Expected balance to be 4.25")
    
    def test_transfer(self):
        self.food.deposit(20, "deposit")
        self.food.withdraw(15.75, "coffee, bread, tomatoes, oranges, biscuits")
        good_transfer = self.food.transfer(3, self.clothing)
        actual = self.food.ledger[2]
        expected = {"amount": -3, "description": "Transfer to Clothing"}
        self.assertEqual(actual, expected, "Expected transfer method to create a specific ledger item in food object.")        
        self.assertEqual(good_transfer, True, "Expected transfer method to return True.")
        actual = self.clothing.ledger[0]
        expected = {"amount": 3, "description": "Transfer from Food"}
        self.assertEqual(actual, expected, "Expected transfer method to create a specific ledger item in clothing object.")
        bad_transfer = self.food.transfer(10, self.clothing)
        actual_f = self.food.ledger[-1]
        expected_f = {"amount": -3, "description": "Transfer to Clothing"}
        actual_c = self.clothing.ledger[-1]
        expected_c = {"amount": 3, "description": "Transfer from Food"}
        self.assertEqual(bad_transfer, False, "Expected transfer method to return False.")
        self.assertEqual(actual_f, expected_f, "Expected that nothing is added to the ledger instance variable if the transfer fails.")
        self.assertEqual(actual_c, expected_c, "Expected that nothing is added to the ledger instance variable if the transfer fails.")

    def test_check_founds(self):
        self.food.deposit(20, "deposit")
        actual = self.food.check_funds(25)
        expected = False
        self.assertEqual(actual, expected, "Expected the check_found method to return False.")
        actual = self.food.check_funds(15)
        expected  = True
        self.assertEqual(actual, expected, "Expected the check_found method to return True.")
    
    def test_to_string(self):
        self.food.deposit(20, "deposit")
        self.food.withdraw(15.75, "coffee, bread, tomatoes, oranges, biscuits")
        self.food.transfer(3, self.clothing)
        actual = str(self.food)
        expected = "*************Food*************\ndeposit                  20.00\ncoffee, bread, tomatoes -15.75\nTransfer to Clothing     -3.00\nTotal: 1.25"
        self.assertEqual(actual, expected, "Expected different string representation of object.")

    def test_create_spend_chart(self):
        self.food.deposit(600)
        self.clothing.deposit(500)
        self.auto.deposit(500)
        self.food.withdraw(15.75)
        self.clothing.withdraw(50)
        self.auto.withdraw(110)
        actual = create_spend_chart([self.food, self.clothing, self.auto])
        expected = "Percentage spent by category\n100|          \n 90|          \n 80|          \n 70|          \n 60|       o  \n 50|       o  \n 40|       o  \n 30|       o  \n 20|    o  o  \n 10|    o  o  \n  0| o  o  o  \n    ----------\n     F  C  A  \n     o  l  u  \n     o  o  t  \n     d  t  o  \n        h     \n        i     \n        n     \n        g     "  
        self.assertEqual(actual, expected, "Expected different chart representation. Check that all spacing is exact.")    

if __name__ == "__main__":
    unittest.main()
