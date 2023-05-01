
import unittest

import bottle_deposits as bd


class TestBottleDeposit(unittest.TestCase):

     def test_calc_deposit(self):
          
          self.assertEqual(bd.calc_deposit(0, 0), 0)
          self.assertEqual(bd.calc_deposit(0, 1), bd.REFUND_MORE_1L)
          self.assertEqual(bd.calc_deposit(1, 0), bd.REFUND_UPTO_1L)
          self.assertEqual(bd.calc_deposit(1, 1), bd.REFUND_UPTO_1L+bd.REFUND_MORE_1L)
          self.assertEqual(bd.calc_deposit(10, 10), (bd.REFUND_UPTO_1L+bd.REFUND_MORE_1L)*10)


if __name__ == '__main__':
    unittest.main()
