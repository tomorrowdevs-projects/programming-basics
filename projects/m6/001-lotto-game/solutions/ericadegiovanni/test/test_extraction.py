import unittest

from lotto.extraction import Extraction
from lotto.ticket import Ticket
from lotto.bet import Bet

class TestExtraction(unittest.TestCase):
    
        
    def test_lotto_extraction(self):
        self.assertTrue('bari' in Extraction.lotto_extraction())
        self.assertTrue(len(Extraction.lotto_extraction()['bari']) == 5)
    
    
    
if __name__ == '__main__':
    unittest.main()