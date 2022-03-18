import unittest
from test.test_bet import TestBet
from test.test_cities import TestCities
from test.test_generate_numbers import TestGenerateNumbers
from test.test_ticket import TestTicket
from test.test_lotto import TestLotto
from test.test_extraction import TestExtraction

def suite():
    suite = unittest.TestSuite()
    suite.addTest(TestBet('test_get_bet_correct_input'))
    suite.addTest(TestBet('test_get_bet_wrong_input'))
    suite.addTest(TestCities('test_get_city_correct_input'))
    suite.addTest(TestCities('test_get_city_wrong_input'))
    suite.addTest(TestGenerateNumbers('test_get_number_wrong_input'))
    suite.addTest(TestGenerateNumbers('test_get_number_correct_input'))
    suite.addTest(TestTicket('test_ticket'))
    suite.addTest(TestLotto('test_arg_parser_wrong'))
    suite.addTest(TestLotto('test_arg_parser_correct'))
    suite.addTest(TestLotto('test_check_bet'))
    suite.addTest(TestLotto('test_matching_numbers'))
    suite.addTest(TestExtraction('test_lotto_extraction'))
    return suite

if __name__ == '__main__':
    runner = unittest.TextTestRunner()
    runner.run(suite())
