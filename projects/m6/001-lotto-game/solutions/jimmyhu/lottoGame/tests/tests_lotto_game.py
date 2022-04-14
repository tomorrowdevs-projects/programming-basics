import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)
import unittest
from lotto_game import lotto_game
from unittest.mock import patch
from lotto_card import lotto_card

class UnitTests(unittest.TestCase):    
    @patch('builtins.input', side_effect=['ambo', 2, 'milano'])
    def test_generate_bill(self, mock_input):
        actual = lotto_game.generate_bill()
        self.assertTrue(isinstance(actual, lotto_card))
    
    @patch('builtins.input', side_effect=['ambo', 2, 'milano','terno', 5, 'Torino','cinquina', 8, 'NaPOli'])
    def test_generate_bill_length(self, mock_input):
        actual = len(lotto_game(3).bills)
        expected = 3
        self.assertEqual(actual,expected, f"Expected {expected} bills, But {actual} Bills found")

    @patch('builtins.input', side_effect=['ambo', 2, 'milano','terno', 5, 'Torino','cinquina', 8, 'NaPOli'])
    def test_get_bill(self, mock_input):
        actual_base = lotto_game(3)
        actual = actual_base.get_bill(2)
        expected = f"\n+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        expected += f"|{'Bill Number'.center(13)}|{'Bet Type'.center(10)}|{'Ruota'.center(11)}|{'Numbers'.center(41)}|\n"
        expected += f"+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        expected += f"|{'2'.center(13)}|{('terno').center(10)}|{('torino').center(11)}|{', '.join([str(x) for x in actual_base.bills[1].numbers]).center(41)}|\n"
        expected += f"+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        self.assertEqual(actual,expected, f"Expected {expected} , But {actual} found")
    
    @patch('builtins.input', side_effect=['ambo', 2, 'milano','terno', 5, 'Torino','cinquina', 8, 'NaPOli','quaterna', 8, 'NaPOli'])
    def test_get_bill_output(self, mock_input):
        actual = lotto_game(4)
        expected = f"\n+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        expected += f"|{'Bill Number'.center(13)}|{'Bet Type'.center(10)}|{'Ruota'.center(11)}|{'Numbers'.center(41)}|"
        expected += f"\n+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        expected += f"|{'1'.center(13)}|{('ambo').center(10)}|{('milano').center(11)}|{', '.join([str(x) for x in actual.bills[0].numbers]).center(41)}|\n"
        expected += f"|{'2'.center(13)}|{('terno').center(10)}|{('torino').center(11)}|{', '.join([str(x) for x in actual.bills[1].numbers]).center(41)}|\n"
        expected += f"|{'3'.center(13)}|{('cinquina').center(10)}|{('napoli').center(11)}|{', '.join([str(x) for x in actual.bills[2].numbers]).center(41)}|\n"
        expected += f"|{'4'.center(13)}|{('quaterna').center(10)}|{('napoli').center(11)}|{', '.join([str(x) for x in actual.bills[3].numbers]).center(41)}|\n"
        # expected += f"|{'1'.center(13)}|{('ambo').center(10)}|{('milano').center(11)}|{'{}, {}'.format('12', '12').center(41)}|\n"
        # expected += f"|{'2'.center(13)}|{('terno').center(10)}|{('torino').center(11)}|{'{}, {}, {}, {}, {}'.format('12', '12','12', '12','12').center(41)}|\n"
        # expected += f"|{'3'.center(13)}|{('cinquina').center(10)}|{('napoli').center(11)}|{'{}, {}, {}, {}, {}, {}, {}, {}'.format('12', '12','12', '12','12', '12','12', '12').center(41)}|\n"
        # expected += f"|{'4'.center(13)}|{('quaterna').center(10)}|{('napoli').center(11)}|{'{}, {}, {}, {}, {}, {}, {}, {}'.format('12', '12','12', '12','12', '12','12', '12').center(41)}|\n"
        expected += f"+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        self.assertEqual(actual.__repr__(),expected, f"Expected \n{expected} , But \n{actual} found")
if __name__ == '__main__':
    unittest.main()