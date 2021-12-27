import unittest
import lotto.bill
import lotto.numbers_generator
import lotto.cities

class UnitTests(unittest.TestCase):
    def setUp(self) -> None:
        self.bill_t = lotto.bill.Bill(2, 'ambo', 'milano', [2, 45, 35, 67, 88, 90, 1, 51])

    def test_bill_instance(self):
        actual = isinstance(self.bill_t, lotto.bill.Bill)
        expected = True
        self.assertEqual(actual, expected, "Expected bill object to be instance of the Bill class")

    def test_bill_string(self):
        actual = str(self.bill_t)
        expected = "Bill number 2| city: milano| type: ambo| numbers: [2, 45, 35, 67, 88, 90, 1, 51]."
        self.assertEqual(actual, expected, "Incorrect string representation")

    def test_numbers_generator(self):
        self.assertEqual(len(lotto.numbers_generator.NumberGenerator.num_gen(9)), 9)

    def test_unique_numbers_generator(self):
        self.assertEqual(len(set(lotto.numbers_generator.NumberGenerator.num_gen(7))), 7)

    def test_type_numbers_generator(self):
        self.assertEqual(type(lotto.numbers_generator.NumberGenerator.num_gen(7)[0]), int)

    def test_cities_validate(self):
        self.assertTrue(lotto.cities.Cities.validate_city('Torino'))
        self.assertFalse(lotto.cities.Cities.validate_city('Trento'))


if __name__ == "__main__":
    unittest.main()
