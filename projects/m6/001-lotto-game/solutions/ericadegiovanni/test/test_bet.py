import unittest
from unittest.mock import patch
from lotto.bet import Bet

class TestBet(unittest.TestCase):


    def test_get_bet_wrong_input(self):

        self.assertNotIn('gkjhk', Bet.bet_types)
        self.assertNotIn(1, Bet.bet_types)              
        with patch('builtins.input', return_value='Tom'):
            with self.assertRaises(ValueError):
               Bet.get_bet_input() 
            

    def test_get_bet_correct_input(self):

        self.assertIn('ambo', Bet.bet_types)    
        with patch('builtins.input', return_value='ambo'):
            self.assertEqual(Bet.get_bet_input(),'ambo')
                
        
if __name__ == '__main__':
    unittest.main()