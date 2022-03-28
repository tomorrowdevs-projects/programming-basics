import unittest
from lotto.bet import Bet
from lotto.check_victory import CheckVictory
from lotto.ticket import Ticket

class TestCheckVictory(unittest.TestCase):
        
        
    def setUp(self) -> None:

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
        self.nums = self.nums = [12, 78, 43, 9, 8]
        self.losing_nums = [71, 13, 17, 7, 10]
        
        self.ticket_city = Ticket([Bet('ambo', 2.00)], self.nums, 'bari', 1) # ambo on bari
        self.ticket_tutte = Ticket([Bet('ambo', 2.00),  Bet('terno', 2.00)], self.nums, 'tutte', 2) # ambo on bari(1 comb), terno on napoli, ambo on roma(3 comb)
        self.ticket_losing = Ticket([Bet('ambo', 2.00)], self.losing_nums, 'bari', 3) # losing ticket
        

    def test_matching_numbers(self):
        
       res = CheckVictory.matching_numbers(self.extraction, 'bari', self.ticket_city)
       self.assertTrue(len(res) == 2)

    def test_check_bet_combinations(self):
        res1 = CheckVictory.check_bet_combinations(self.extraction, self.ticket_city ) # ambo on bari 1 combination 5 numbers
        res2 = CheckVictory.check_bet_combinations(self.extraction,self.ticket_tutte) # ambo on tutte: bari(1 comb), napoli(3 comb), roma(3 comb) = 7
        res3 = CheckVictory.check_bet_combinations(self.extraction,self.ticket_losing) # losing ticket
        self.assertTrue('ambo' in res1)
        self.assertTrue(len(res1) == 1)
        self.assertTrue(res1['ambo'] == 1)
        self.assertTrue(res2['ambo'] == 7)
        self.assertFalse(res3)
        

    