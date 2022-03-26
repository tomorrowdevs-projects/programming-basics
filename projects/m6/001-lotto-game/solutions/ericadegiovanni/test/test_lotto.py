import unittest
import argparse
from lotto.extraction import Extraction
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
                           'roma':[1, 78, 54, 9, 12],
                           'torino': [23, 44, 9, 16, 5],
                           'venezia': [1, 37, 55, 5, 6]

                           }
        
        self.bets_list = [Bet('ambo', 2.00)]
        self.bets_list2 = [Bet('ambo', 2.00), Bet('terno', 2.00)]
        self.nums = [12, 78, 43, 9, 8]
        self.losing_nums = [71, 13, 17, 7, 10]
        self.tutte = 'tutte'
        self.city = 'bari'

        self.ticket_city = Ticket(self.bets_list, self.nums, self.city, 1, {'ambo': 1}) # ambo on bari
        self.ticket_tutte = Ticket(self.bets_list, self.nums, self.tutte, 2, {'ambo': 7}) # ambo on bari(1 comb), terno on napoli, ambo on roma(3 comb)
        self.ticket_tutte2 = Ticket(self.bets_list2, self.nums, self.tutte, 2, {'ambo': 7, 'terno': 1}) # ambo on bari(1 comb), terno on napoli, ambo on roma(3 comb)
        self.ticket_losing = Ticket(self.bets_list, self.losing_nums, self.city, 3) # losing ticket

        

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
    """
    def test_matching_numbers(self):

        res1 = Extraction.matching_numbers('bari', self.ticket_city) # ambo on bari
        res2 = Extraction.matching_numbers('torino', self.ticket_tutte) # ambata on bari, napoli, roma
        self.assertTrue(len(res1) == 2)
        self.assertTrue(len(res2) == 1)
        self.assertTrue(type(res1) == list)
        
    def test_is_correct_bet(self):
        self.assertTrue(Lotto.is_correct_bet('ambo', self.nums))
        self.assertFalse(Lotto.is_correct_bet('terno', [22, 4]))



    def test_check_bet(self):
       res1 = Extraction.check_bet_combinations(self.extraction, self.ticket_city) #ambo on bari 1 combination 5 numbers
       res2 = Extraction.check_bet_combinations(self.extraction,self.ticket_tutte) # ambo on tutte: bari(1 comb), napoli(3 comb), roma(3 comb)
       res3 = Extraction.check_bet_combinations(self.extraction,self.ticket_losing) # losing ticket
       self.assertTrue('ambo' in res1)
       self.assertTrue(len(res1) == 1)
       self.assertTrue(res1['ambo'] == 1)
       self.assertTrue(res2['ambo'] == 7)
       self.assertFalse(res3)
    """   

    def test_calc_prize(self):
        res1 = Lotto.calc_prize(self.ticket_city)
        res2 = Lotto.calc_prize(self.ticket_tutte)
        res3 = Lotto.calc_prize(self.ticket_tutte2)
        self.assertEqual(res3, 125)
        self.assertEqual(res1, 50)
        self.assertEqual(res2, 35)
        

        
if __name__ == '__main__':
    unittest.main()