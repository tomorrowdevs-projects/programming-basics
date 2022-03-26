import unittest

from lotto.extraction import Extraction
from lotto.ticket import Ticket
from lotto.bet import Bet

class TestExtraction(unittest.TestCase):
    
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

        self.ticket_city = Ticket([Bet('ambo', 2.00)], [12, 78, 43, 9, 8], 'bari', 1, {'ambo': 1}) # ambo on bari
        
    def test_lotto_extraction(self):
        self.assertTrue('bari' in Extraction.lotto_extraction())
        self.assertTrue(len(Extraction.lotto_extraction()['bari']) == 5)
    
   
    

        

if __name__ == '__main__':
    unittest.main()