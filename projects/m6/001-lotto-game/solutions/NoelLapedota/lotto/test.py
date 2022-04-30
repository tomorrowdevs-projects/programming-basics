import unittest
import choose_number
import type_bill
import generator_number
import city_bill
import ticket_creator


# test for Choose_number

class TestChoose_number(unittest.TestCase):

    def test_choose_number(self):
     number =choose_number.Choose_number.number(2,2)
     self.assertTrue(number)


    def test_choose_number(self):
     number = choose_number.Choose_number.number(2,3)
     self.assertFalse(number)

# test for type_bill     

class Test_type_bill(unittest.TestCase):
    def test_str_type(self):
         number = type_bill.Type_bill.str_type(2)
         self.assertEqual(2, 2)

    def test_type(self):
         number = type_bill.Type_bill.type(2)
         self.assertEqual(2,'ambata')

# test for generator_number

class Test_generator_number(unittest.TestCase):
    def test_generate_number(self):
        number = generator_number.Generator.generate_number(3)
        self.assertLess(3, 91)

# test for city_bill

class Test_city_bill(unittest.TestCase):
    def test_city_bill(self):
        city = city_bill.City.city_of_bill(self,'Bari')
        self.assertEqual('Bari', 'Bari')

# test for ticket_creator    

class Test_ticket_creator(unittest.TestCase):
    def setUp(self):
        self.ticket_1 = ticket_creator.Ticket(1, type_bill.Type_bill(), city_bill.City('bari'), choose_number.Choose_number() ,generator_number.Generetor())

    def test_ticket(self):
        # checking that  attribute of Ticket is an object itself
        self.assertIsInstance(self.ticket_1.city, city_bill.City )
        self.assertIsInstance(self.ticket_1.type, type_bill.Type_bill)
        self.assertIsInstance(self.ticket_1.quantity, choose_number.Choose_number)
        self.assertIsInstance(self.ticket_1.n_g, generator_number.Generator)
        



if __name__ == '__main__':
    unittest.main()     
