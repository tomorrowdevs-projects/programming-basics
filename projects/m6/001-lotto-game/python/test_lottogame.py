import unittest
from unittest.mock import patch

from main import *
import bill

bill.random.seed(10)

class TestLottoGame(unittest.TestCase):
    
    @patch("builtins.input")
    def setUp(self, mock_inputs):
        mock_inputs.side_effect = ["1", "ambo", "2", "Roma"]
        self.new_game = Game.start_game()

    @patch("builtins.input")
    def test_start_game(self, mock_inputs):
        mock_inputs.side_effect = ["1", "terno", "4", "Firenze"]
        new_match = Game.start_game()
        actual = new_match.number_of_bills
        expected = 1
        self.assertEqual(actual, expected, "Expected the number_of_bills attribute to be 1.")
        actual = len(new_match.bills_generated)
        expected = 1
        self.assertEqual(actual, expected, "Expected the length of the bills_generated attribute to be 1.")

    def test_is_a_valid_number_true(self):
        valid_number = ["1", "2", "3", "4", "5"]
        expected = True
        for number in valid_number:
            actual = Game.is_a_valid_number(number)
            self.assertEqual(actual, expected, "Expected the function to return True.")
    
    def test_is_not_a_valid_number(self):
        actual = Game.is_a_valid_number("one")
        expected = False
        self.assertEqual(actual, expected, "Expected the function to return False.")
        with self.assertRaises(ValueError):
            Game.is_a_valid_number(None)
            Game.is_a_valid_number(1)
            Game.is_a_valid_number(True)           

    def test_generate_bills(self):
        actual = self.new_game.bills_generated[0].bet_type
        expected = "ambo"
        self.assertEqual(actual, expected, "Expected bet_type attribute to be 'ambo'.")
        actual = self.new_game.bills_generated[0].numbers_to_generate
        expected = 2
        self.assertEqual(actual, expected, "Expected numbers_to_generate attribute to be 2.")
        actual = self.new_game.bills_generated[0].city
        expected = "Roma"
        self.assertEqual(actual, expected, "Expected city attribute to be 'Roma'.")

    @patch("builtins.input")
    def test_choose_bet_type(self, mock_inputs):
        mock_inputs.side_effect = ["ambo"]
        actual = Game.choose_bet_type()
        expected = "ambo"
        self.assertEqual(actual, expected, "Expected the function return 'ambo'.")

    @patch("builtins.input")
    def test_choose_numbers(self, mock_inputs):
        mock_inputs.side_effect = ["1", "2"]
        actual = Game.choose_numbers("ambo")
        expected = 2
        self.assertEqual(actual, expected, "Expected the function return 2.")

    @patch("builtins.input")
    def test_choose_city(self, mock_inputs):
        mock_inputs.side_effect = ["rom", "roma"]
        actual = Game.choose_city()
        expected = "Roma"
        self.assertEqual(actual, expected, "Expected the function return Roma.")


# module bill.py

    def test_generate_numbers(self):
        actual = Bill.generate_numbers(self.new_game.bills_generated[0])
        expected = [21, 84]
        self.assertEqual(actual, expected, "Expected the function return [21, 84].")

    def test_to_str(self):
        actual = str(self.new_game.bills_generated[0])
        numbers = self.new_game.bills_generated[0].generated_numbers
        expected = "+------------------------------+\n|         Lotto Ticket         |\n+------------------------------+\n|  CITY       |      Roma      |\n|  BET TYPE   |      ambo      |\n+------------------------------+\n|{:^6}{:^6}                  |\n|                              |\n+------------------------------+\n".format(numbers[0], numbers[1])                  
        self.assertEqual(actual, expected, "Expected a different representation of the bill.")


# module city.py

    def test_is_a_valid_city(self):
        actual = City.is_a_valid_city("Bari")
        expected = True
        self.assertEqual(actual, expected, "Expected the method to return True.")
        actual = City.is_a_valid_city("Bergamo")
        expected = False
        self.assertEqual(actual, expected, "Expected the method to return False.")


# module bet_type.py

    def test_is_a_valid_type(self):
        actual = BetType.is_a_valid_type("ambata")
        expected = True
        self.assertEqual(actual, expected, "Expected the method to return True.")
        actual = BetType.is_a_valid_type("estratto determinato")
        expected = False
        self.assertEqual(actual, expected, "Expected method to return False.")

    def test_is_a_valid_bet(self):
        actual = BetType.is_a_valid_bet("quaterna", "4")
        expected = True
        self.assertEqual(actual, expected, "Expected the method to return True.")
        actual = BetType.is_a_valid_bet("quaterna", "3")
        expected = False
        self.assertEqual(actual, expected, "Expected the method to return False.")
        with self.assertRaises(ValueError):
            BetType.is_a_valid_bet("quaterna", None)
            BetType.is_a_valid_bet("quaterna", True)
            BetType.is_a_valid_bet("quaterna", 4)


if __name__ == "__main__":
    unittest.main()
