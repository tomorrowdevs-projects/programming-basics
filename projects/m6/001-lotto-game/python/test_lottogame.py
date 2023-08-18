import unittest
from unittest.mock import patch

import lotto_game
from lotto import bill
from lotto.bill import Bill
from lotto.game import Game
from lotto.bet_type import BetType
from lotto.city import City

bill.random.seed(10)

class TestLottoGame(unittest.TestCase):
    @patch("builtins.input")
    def test_enter_bill_number(self, mock_inputs):
        mock_inputs.side_effect = [5]
        actual = lotto_game.enter_bill_number()
        expected = 5
        self.assertEqual(actual, expected, "Expected the function to return 5.")

    def test_is_valid_input(self):
        valid_input = [0, 1, 2, 3, 4, 5]
        for value in valid_input:
            actual = lotto_game.is_valid_input(value)
            expected = True
            self.assertEqual(actual, expected, "Expected the function to return True.")
        actual = lotto_game.is_valid_input(6)
        expected = False
        self.assertEqual(actual, expected, "Expected the function to return False.")

    def test_is_a_valid_type(self):
        valid_type = ["ambata", "ambo", "terno", "quaterna", "cinquina"]
        for value in valid_type:
            actual = BetType.is_a_valid_type(value)
            expected = True
            self.assertEqual(actual, expected, "Expected the method to return True.")
        actual = BetType.is_a_valid_type("estratto determinato")
        expected = False
        self.assertEqual(actual, expected, "Expected the method to return False.")

    def test_is_a_valid_bet(self):
        actual = BetType.is_a_valid_bet("quaterna", 4)
        expected = True
        self.assertEqual(actual, expected, "Expected the method to return True.")
        actual = BetType.is_a_valid_bet("quaterna", 3)
        expected = False
        self.assertEqual(actual, expected, "Expected the method to return False.")

    def test_is_a_valid_city(self):
        actual = City.is_a_valid_city("Bari")
        expected = True
        self.assertEqual(actual, expected, "Expected the method to return True.")
        actual = City.is_a_valid_city("Bergamo")
        expected = False
        self.assertEqual(actual, expected, "Expected the method to return False.")

    @patch("builtins.input")
    def test_choose_bet_type(self, mock_inputs):
        mock_inputs.side_effect = ["ambo"]
        actual = Bill.choose_bet_type()
        expected = "ambo"
        self.assertEqual(actual, expected, "Expected the function return 'ambo'.")

    @patch("builtins.input")
    def test_choose_numbers(self, mock_inputs):
        mock_inputs.side_effect = [2]
        actual = Bill.choose_numbers("ambo")
        expected = 2
        self.assertEqual(actual, expected, "Expected the function return 2.")

    @patch("builtins.input")
    def test_choose_city(self, mock_inputs):
        mock_inputs.side_effect = ["Roma"]
        actual = Bill.choose_city()
        expected = "Roma"
        self.assertEqual(actual, expected, "Expected the function return Roma.")

    @patch("builtins.input")
    def test_generate_bills(self, mock_inputs):
        new_game = Game(1)
        mock_inputs.side_effect = ["ambo", 2, "Roma"]
        Game.generate_bills(new_game)
        actual = new_game.bills_generated[0].bet_type
        expected = "ambo"
        self.assertEqual(actual, expected, "Expected bet_type attribute to be 'ambo'.")
        actual = new_game.bills_generated[0].numbers_to_generate
        expected = 2
        self.assertEqual(actual, expected, "Expected numbers_to_generate attribute to be 2.")
        actual = new_game.bills_generated[0].city
        expected = "Roma"
        self.assertEqual(actual, expected, "Expected city attribute to be 'Roma'.")

    def test_generate_numbers(self):
        new_bill = Bill("terno", 5, "Firenze")
        actual = new_bill.generated_numbers
        expected = [2, 27, 55, 62, 74]
        self.assertEqual(actual, expected, "Expected the function return [2, 27, 55, 62, 74].")

    def test_print_bill(self):
        new_bill = Bill("ambo", 2, "Roma")
        actual = str(new_bill)
        numbers = new_bill.generated_numbers
        expected = "+------------------------------+\n|         Lotto Ticket         |\n+------------------------------+\n|  CITY       |      Roma      |\n|  BET TYPE   |      ambo      |\n+------------------------------+\n|{:^6}{:^6}                  |\n|                              |\n+------------------------------+\n".format(numbers[0], numbers[1])                  
        self.assertEqual(actual, expected, "Expected a different representation of the bill.")

if __name__ == "__main__":
    unittest.main()
