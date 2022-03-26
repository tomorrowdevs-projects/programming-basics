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
   
        
if __name__ == '__main__':
    unittest.main()