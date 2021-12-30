import unittest
import lotto.bill
import lotto.numbers_generator
import lotto.cities
import lotto.bet_type


class UnitTests(unittest.TestCase):

    def setUp(self) -> None:
        self.bill_t = lotto.bill.Bill(2, 'ambo', 'milano', [2, 45, 35, 67, 88, 90, 1, 51])

    def test_bill_instance(self) -> None:
        actual: bool = isinstance(self.bill_t, lotto.bill.Bill)
        expected: bool = True
        self.assertEqual(actual, expected, "Expected bill object to be instance of the Bill class")

    def test_bill_string(self) -> None:
        actual: str = str(self.bill_t)
        expected: str = "Bill number 3|city: Milano|type: Ambo|numbers: [2, 45, 35, 67, 88, 90, 1, 51]."
        self.assertEqual(actual, expected, "Incorrect string representation")

    def test_numbers_generator(self) -> None:
        self.assertEqual(len(lotto.numbers_generator.NumberGenerator.num_gen(9)), 9)

    def test_unique_numbers_generator(self) -> None:
        self.assertEqual(len(set(lotto.numbers_generator.NumberGenerator.num_gen(7))), 7)

    def test_type_numbers_generator(self) -> None:
        self.assertEqual(type(lotto.numbers_generator.NumberGenerator.num_gen(7)[0]), int)

    def test_cities_validate_city(self) -> None:
        self.assertTrue(lotto.cities.Cities.validate_city('Torino'))
        self.assertFalse(lotto.cities.Cities.validate_city('Trento'))

    def test_bet_type_validate_bet(self) -> None:
        self.assertTrue(lotto.bet_type.BetType.validate_bet('Terno'))
        self.assertFalse(lotto.bet_type.BetType.validate_bet('Pera'))


if __name__ == "__main__":
    unittest.main()
