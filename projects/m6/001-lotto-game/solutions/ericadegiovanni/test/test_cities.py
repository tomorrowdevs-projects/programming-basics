import unittest
from unittest.mock import patch
from lotto.cities import Cities

class TestCities(unittest.TestCase):


    def test_get_city_wrong_input(self):

        self.assertNotIn('vxvx', Cities.total_cities)
        self.assertNotIn(1, Cities.total_cities)              
        with patch('builtins.input', return_value='Tom'):
            with self.assertRaises(ValueError):
                Cities.get_city_input()

    def test_get_city_correct_input(self):

        self.assertIn('bari', Cities.total_cities)    
        with patch('builtins.input', return_value='BAri'):
            self.assertEqual(Cities.get_city_input(), 'bari')

if __name__ == '__main__':
    unittest.main()