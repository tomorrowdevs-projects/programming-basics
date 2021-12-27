import unittest

import lotto.bill


class UnitTests(unittest.TestCase):
    def setUp(self) -> None:
        self.bill_t = lotto.bill.Bill(2, 'ambo', 'milano', [2, 45, 35, 67, 88, 90, 1, 51])

    def test_instance(self):
        actual = isinstance(self.bill_t, lotto.bill.Bill)
        expected = True
        self.assertEqual(actual, expected, "Expected bill object to be instance of the Bill class")

    def test_bill_string(self):
        actual = str(self.bill_t)
        expected = "Bill number 2| city: milano| type: ambo| numbers: [2, 45, 35, 67, 88, 90, 1, 51]."
        self.assertEqual(actual, expected, "Incorrect string representation")



if __name__ == "__main__":
    unittest.main()
