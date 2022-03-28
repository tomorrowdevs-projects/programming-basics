import unittest
from lotto.ticket import Ticket
from lotto.bet import Bet

class TestTicket(unittest.TestCase):

    def setUp(self):

        self.bets_list = [Bet('ambo', 2.00)]
        self.nums = [1, 66, 43, 9, 8]
        self.city = 'bari'

    def test_ticket(self):
        ticket = Ticket(self.bets_list, self.nums, self.city, 1)
        self.assertTrue(type(ticket.bets_list) is list)
        self.assertTrue(type(ticket.nums) is list )
        

       

    