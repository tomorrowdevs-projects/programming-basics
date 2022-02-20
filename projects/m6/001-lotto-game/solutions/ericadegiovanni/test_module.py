import unittest
from  unittest import TestCase
from lotto.bet import Bet
from lotto.cities import Cities
from lotto.ticket import Ticket
import argparse
from random import choice


class TestLotto(TestCase):
     
    def setUp(self):
        self.parser=argparse.ArgumentParser()
        self.parser.add_argument(
            "-n",
            type=int,
            choices=range(1, 6),
            default=0)

        self.bet_type = 'ambo'
        self.nums = [1, 66, 43, 9]
        self.city = 'bari'
        
    def test_arg_parser(self):
        args = ['-n', '111']
        args2 = ['-n', 'dhcduc']
        with self.assertRaises(SystemExit):
            self.parser.parse_args(args)
        with self.assertRaises(SystemExit):
            self.parser.parse_args(args2)
                                                                                                                                                       
    def test_get_bet(self):
        self.assertIn(self.bet_type, Bet.bet_types) 
        self.assertNotIn('gkjhk', Bet.bet_types)
        self.assertNotIn(1, Bet.bet_types)

    def test_get_numbers(self):
        self.assertTrue('4'.isdigit())
        self.assertTrue( 0 < int('4') < 11 )
        expected = [choice(range(1,91)) for _ in range(int('4'))]
        self.assertEqual(len(expected), 4)

    def test_get_city(self):
        self.assertIn('BaRI'.lower() ,Cities.total_cities) 
        self.assertNotIn('gkjhk', Cities.total_cities)
        self.assertNotIn(1, Cities.total_cities)

    def test_ticket_class(self):
        ticket = Ticket(self.bet_type, self.nums, self.city, 1)
        actual = ticket.ticket_info()
        expected = {'bet': self.bet_type,
                'numbers': self.nums, 
                'city': self.city,
                'ticket N': 1}
        self.assertEqual(actual['bet'], expected['bet'])
        
        
if __name__ == '__main__':
    unittest.main()