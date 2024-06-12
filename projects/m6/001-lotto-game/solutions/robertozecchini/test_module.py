import unittest
import lotto_ticket

class UnitTests(unittest.TestCase):
    def test_to_string(self):
        self.ticket = lotto_ticket.Ticket("Ambo", "Cagliari", 2, 1)
        actual = str(self.ticket)
        expected1 = f"+--------------------+\n| Lotto ticket       |\n+---------+----------+\n| type    | Ambo     |\n+---------+----------+\n| city    | Cagliari |\n+---------+----------+\n| bet     | 1.00 €   |\n+---------+----------+\n| numbers | "
        expected2 = f" |\n+---------+----------+\n"
        self.assertEqual(actual[:219], expected1, 'Expected different string representation of object.')
        self.assertEqual(actual[-26:], expected2, 'Expected different string representation of object.')
    
    def test_no_duplicated_numbers(self):
        #generates 90 numbers to improve error probability
        self.ticket = lotto_ticket.Ticket("Ambo", "Cagliari", 90)
        actual = len(self.ticket.numbers)
        expected = len(set(self.ticket.numbers)) #set automatically removes duplicates
        self.assertEqual(actual, expected, "Expected not to generate duplicated numbers")

if __name__ == "__main__":
    unittest.main()