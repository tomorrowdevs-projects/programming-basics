import unittest
import argparse
from lotto.ticket import Ticket
from lotto.lotto import Lotto
from lotto.bet import Bet

class TestLotto(unittest.TestCase):

    def setUp(self):
        self.parser=argparse.ArgumentParser()
        self.parser.add_argument(
            "-n",
            type=int,
            choices=range(1, 6),
            default=0)

        self.extraction = {'bari': [12, 6, 78, 44, 32],
                           'cagliari': [11, 33, 20, 90, 54],
                           'firenze': [1, 87, 4, 36, 21],
                           'genova': [12, 76, 50, 3, 19],
                           'milano':[1, 3, 6, 77, 65],
                           'napoli': [3, 67, 43, 9, 12],
                           'palermo': [2, 77, 59, 14, 9],
                           'roma':[1, 78, 54, 9, 47],
                           'torino': [23, 44, 9, 16, 8],
                           'venezia': [1, 37, 55, 5, 6]

                           }
        
        self.bet_type = 'ambo'
        self.nums = [12, 78, 43, 9, 8]
        self.losing_nums = [71, 4, 17, 11, 8]
        self.tutte = 'tutte'
        self.city = 'bari'

        self.ticket_city = Ticket(self.bet_type, self.nums, self.city, 1)
        self.ticket_tutte = Ticket(self.bet_type, self.nums, self.tutte, 2)
        self.ticket_losing = Ticket(self.bet_type, self.losing_nums, self.city, 3)

    def test_arg_parser_wrong(self):
        args = ['-n', '111']
        args2 = ['-n', 'dhcduc']
        with self.assertRaises(SystemExit):
            self.parser.parse_args(args)
        with self.assertRaises(SystemExit):
            self.parser.parse_args(args2)

    def test_arg_parser_correct(self):
        args = ['-n', '2']
        res = self.parser.parse_args(args)
        tot_bills = res.n
        self.assertEqual(tot_bills, 2)

    def test_check_winning_numbers(self):
        self.assertTrue(type(Lotto.check_winning_numbers(self.ticket_city, self.extraction) is int))
        self.assertEqual(Lotto.check_winning_numbers(self.ticket_city, self.extraction), 2)
        self.assertTrue(type(Lotto.check_winning_numbers(self.ticket_tutte, self.extraction) is dict))
        self.assertEqual(Lotto.check_winning_numbers(self.ticket_losing, self.extraction), 0)

    def test_check_winning_ticket(self):
        res_tk_city = Lotto.check_winning_numbers(self.ticket_city, self.extraction)
        res_tk_tutte = Lotto.check_winning_numbers(self.ticket_tutte, self.extraction)
        bet_city = Bet.bet_types.index(self.ticket_city.bet_type) + 1 
        self.assertTrue(res_tk_city >= bet_city)
        self.assertTrue(len(res_tk_tutte) > 0)


        
if __name__ == '__main__':
    unittest.main()