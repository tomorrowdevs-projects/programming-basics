import unittest
from lotto.generate_numbers import TicketNumbers
from unittest.mock import patch

class TestGenerateNumbers(unittest.TestCase):


    def test_get_number_wrong_input(self):

        with patch('builtins.input', return_value=1111):
            with self.assertRaises(AttributeError):
                TicketNumbers.get_number_input() 
        
        with patch('builtins.input', return_value='ssss'):
            with self.assertRaises(ValueError):
                TicketNumbers.get_number_input() 

    def test_get_number_correct_input(self):

        self.assertTrue('4'.isdigit())
        self.assertTrue( 0 < int('4') < 11 )

        with patch('builtins.input', return_value='4'):
            self.assertEqual(len(TicketNumbers.get_number_input()),4)

if __name__ == '__main__':
    unittest.main()