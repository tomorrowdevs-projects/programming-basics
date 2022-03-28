import unittest
from test.test_bet import TestBet
from test.test_check_victory import TestCheckVictory
from test.test_cities import TestCities
from test.test_generate_numbers import TestGenerateNumbers
from test.test_prizes import TestPrizes
from test.test_ticket import TestTicket
from test.test_lotto import TestLotto
from test.test_extraction import TestExtraction

def suite():
    suite = unittest.TestSuite()
    suite.addTest(TestBet('test_get_bet_correct_input'))
    suite.addTest(TestBet('test_get_bet_wrong_input'))
    suite.addTest(TestBet('test_get_money_input'))

    suite.addTest(TestCities('test_get_city_correct_input'))
    suite.addTest(TestCities('test_get_city_wrong_input'))

    suite.addTest(TestGenerateNumbers('test_get_number_wrong_input'))
    suite.addTest(TestGenerateNumbers('test_get_number_correct_input'))

    suite.addTest(TestTicket('test_ticket'))

    suite.addTest(TestLotto('test_arg_parser_wrong'))
    suite.addTest(TestLotto('test_arg_parser_correct'))

    suite.addTest(TestExtraction('test_lotto_extraction'))

    suite.addTest(TestCheckVictory('test_matching_numbers'))
    suite.addTest(TestCheckVictory('test_check_bet_combinations'))

    suite.addTest(TestPrizes('test_calc_prize'))
    return suite

if __name__ == '__main__':
    runner = unittest.TextTestRunner()
    runner.run(suite())
