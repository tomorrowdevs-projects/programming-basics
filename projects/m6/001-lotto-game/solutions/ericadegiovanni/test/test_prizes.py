import unittest
from lotto.bet import Bet
from lotto.prizes import Prizes 
from lotto.ticket import Ticket

class TestPrizes(unittest.TestCase):

    def setUp(self) -> None:
        self.nums = self.nums = [12, 78, 43, 9, 8]
        
        self.ticket_city = Ticket([Bet('ambo', 2.00)], self.nums, 'bari', 1, {'ambo': 1}) # ambo on bari
        self.ticket_tutte = Ticket([Bet('ambo', 2.00),  Bet('terno', 2.00)], self.nums, 'tutte', 2, {'ambo': 7}) # ambo on bari(1 comb), terno on napoli, ambo on roma(3 comb)
        self.ticket_tutte2 = Ticket([Bet('ambo', 2.00), Bet('terno', 2.00)], self.nums, 'tutte', 2, {'ambo': 7, 'terno': 1}) # ambo on bari(1 comb), terno on napoli, ambo on roma(3 comb)
    
    
    def test_calc_prize(self):
        res1 = Prizes.calc_prize(self.ticket_city)
        res2 = Prizes.calc_prize(self.ticket_tutte)
        res3 = Prizes.calc_prize(self.ticket_tutte2)

        self.assertEqual(res3, 125)
        self.assertEqual(res1, 50)
        self.assertEqual(res2, 35)

