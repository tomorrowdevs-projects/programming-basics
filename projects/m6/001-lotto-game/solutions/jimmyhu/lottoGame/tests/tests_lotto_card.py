import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)
import unittest
from lotto_card import lotto_card
from bet_types import bet_types
from ruote import ruota

class UnitTests(unittest.TestCase):
    def setUp(self):
        self.lotto_bill = lotto_card('ambo',5,'milano')

    #check if the generator generate a number above a limit or below a min
    def test_randNumbers_edges(self):
        max_edge = 90
        min_edge = 0
        list_num = self.lotto_bill.randNumbers(90,90,1)
        msg = ''
        actual = True
        for x in list_num:
            if x > max_edge :
                actual = False
                msg = f'The Funcion generated a number grated than Max value {max_edge}'
            elif x < min_edge:
                actual = False
                msg = f'The Funcion generated a number lower than Min value {min_edge}'
        self.assertTrue(actual, msg)

    #check if the method generate the requested numbers
    def test_randNumbers_length(self):
        actual = len(self.lotto_bill.randNumbers(90,90,1))
        expected = 90
        self.assertEqual(actual, expected, f"The Function generated {actual} numbers, Expected = {expected}")

    #check if the function randNumbers raise the right error
    def test_randNumbers_type_errors(self):
        self.assertRaises(TypeError, self.lotto_bill.randNumbers, 'str_input_isted_of_integer',90,1) 
        self.assertRaises(TypeError, self.lotto_bill.randNumbers, 80,'str_input_isted_of_integer',1) 
        self.assertRaises(ValueError, self.lotto_bill.randNumbers, 80, 100, 'str_input_isted_of_integer') 
        
    #Test when is asked to generate more number than the max value
    def test_setUp_randNumbers(self):
        expected_msg = "Error, The max value can be greated than len_numbers_list"
        try:
            self.lotto_bill.randNumbers(91,90,1)
        except AssertionError as msg:
            self.assertEqual(msg.args[0], expected_msg , f"\nActual error message: {msg.args[0]}\nExpected message: {expected_msg}")

     #Test whan a boolen value is passed as first value
    def test_setUp_randNumbers2(self):
        expected_msg = "Error, The len_numbers_list can't be a boolean value"
        try:
            self.lotto_bill.randNumbers(True,90,1)
        except AssertionError as msg:
            self.assertEqual(msg.args[0], expected_msg , f"\nActual error message: {msg.args[0]}\nExpected message: {expected_msg}")
    
    
    #test when the class is created with wrong input data of bet type
    def test_setUp_bet_type(self):
        expected_msg = "Bet type 'tested' not valid"
        try:
            self.lotto_bill = lotto_card('tested',5,'milano')
        except AssertionError as msg:
            self.assertEqual(msg.args[0], expected_msg , f"\nActual error message: {msg.args[0]}\nExpected message: {expected_msg}")

    #test when the class is created with wrong input data of numbers
    def test_setUp_numbers_type(self):
        expected_msg = "the numbers must between 1 and 10"
        try:
            self.lotto_bill = lotto_card('tErno',50,'milano')
        except AssertionError as msg:
            self.assertEqual(msg.args[0], expected_msg , f"\nActual error message: {msg.args[0]}\nExpected message: {expected_msg}")
    
    #test when the class is created with wrong input data of city or ruota
    def test_setUp_city_type(self):
        expected_msg = "City 'tested' not valid"
        try:
            self.lotto_bill = lotto_card('cInqUIna',5,'tested')
        except AssertionError as msg:
            self.assertEqual(msg.args[0], expected_msg , f"\nActual error message: {msg.args[0]}\nExpected message: {expected_msg}")
    
    def test_setUp_types_errors(self):
        self.assertRaises(AttributeError, lotto_card, 1, 9,'milano')
        self.assertRaises(AttributeError, lotto_card, 'terno', 9, 1)

    #test the checker of bet types
    def test_check_bet_type(self):
        self.assertFalse(bet_types.check_bet_type('prOva'), f"The Bet Types Checker doesn't work")
        self.assertTrue(bet_types.check_bet_type('QuaTeRNa'), f"The Bet Types Checker doesn't work on Case sensitive")
        self.assertRaises(AttributeError, bet_types.check_bet_type, 2)
        self.assertRaises(AttributeError, bet_types.check_bet_type, False)

    #test the checker of ruote
    def test_checker_ruota(self):
        self.assertFalse(ruota.check_ruota('bergamo'), f"The Ruota Checker doesn't work")
        self.assertTrue(ruota.check_ruota('NaPoLI'), f"The Ruota Checker doesn't work on Case sensitive")
        self.assertRaises(AttributeError, ruota.check_ruota, 1)
        self.assertRaises(AttributeError, ruota.check_ruota, True)

if __name__ == '__main__':
    unittest.main()