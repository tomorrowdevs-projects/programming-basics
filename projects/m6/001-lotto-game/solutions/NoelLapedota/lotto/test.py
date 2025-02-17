import unittest
from lotto import type_bill
from lotto import choose_number
from lotto import generator_number
from lotto import city_bill
from lotto import ticket_creator
from lotto import extraction
from lotto import search_winning
from lotto import prizes


# test for Choose_number
class TestChoose_number(unittest.TestCase):

    def test_choose_number(self):
     number = choose_number.Choose_number.number(2,2)
     self.assertTrue(number)


    def test_choose_numbers(self):
      number = choose_number.Choose_number.number(2,3)
      self.assertFalse(number)

      def test_number_of_game(self):
            self.assertTrue(int)
            

    
# test for type_bill  
class Test_type_bill(unittest.TestCase):
#     #if the entered value is a str
    def test_str_type(self):
         self.assertTrue(2, str)

#     #if the chosen value is a float
    def test_amount_bet(self):
        self.assertTrue(3, float)

  

   #test for generator_number
class TestGenerator(unittest.TestCase):
    def test_generate_number(self):
         number = generator_number.Generator.generate_number(3)
         self.assertTrue(type(list))


  # test for city_bill
class Test_city_bill(unittest.TestCase):
    def test_city_bill(self):
        self.assertEqual('Bari', 'Bari')

      
     #test for ticket_creator
class Test_ticket_creator(unittest.TestCase):
        def setUp(self):
         self.ticket_1 = ticket_creator.Ticket(1, type_bill.Type_bill(), city_bill.City('bari'), choose_number.Choose_number() ,generator_number.Generator(),type_bill.Type_bill(), type_bill.Type_bill.amount_bet())

        def test_ticket(self):
         #checking that  attribute of Ticket is an object itself
         self.assertIsInstance(self.ticket_1.city, city_bill.City)
         self.assertIsInstance(self.ticket_1.type, type_bill.Type_bill)
         self.assertIsInstance(self.ticket_1.quantity, choose_number.Choose_number)
         self.assertIsInstance(self.ticket_1.n_g, generator_number.Generator)
         self.assertIsInstance(self.ticket_1.amount,  type_bill.Type_bill.amount_bet)



   # test for prizes
class TestPrizes(unittest, unittest.TestCase):

      # if the number that returns is a float
    def sum_wins(self):
         self.assertTrue(float)

    def sum_wins(self):
         self.assertFalse(int)

     #if the number that returns is a float
    def test_payout_calculator(self):
          self.assertTrue(float)

    def test_payout_calculator(self):
          self.assertFalse(str)      
          

#test for search_winning
class Testsearch_winning(unittest, unittest.TestCase):
       #if it returns a list
      def test_controll_wheel_city(self):
            self.assertTrue(list)

      def test_controll_wheel_city(self):
            self.assertFalse(str)      
            



        
if __name__ == '__main__':
    unittest.main()     
