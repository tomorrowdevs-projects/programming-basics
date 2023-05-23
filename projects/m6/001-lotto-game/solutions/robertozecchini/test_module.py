import unittest
import lotto_ticket

class UnitTests(unittest.TestCase):
    def test_to_string(self):
        self.ticket = lotto_ticket.Ticket("Ambo", "Cagliari", 2)
        actual = str(self.ticket)
        expected1 = f"+--------------------+\n| Lotto ticket       |\n+---------+----------+\n| type    | Ambo     |\n+---------+----------+\n| city    | Cagliari |\n+---------+----------+\n| numbers | "
        expected2 = f" |\n+---------+----------+\n"
        self.assertEqual(actual[:173], expected1, 'Expected different string representation of object.')
        self.assertEqual(actual[-26:], expected2, 'Expected different string representation of object.')

if __name__ == "__main__":
    unittest.main()