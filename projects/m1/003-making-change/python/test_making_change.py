import importlib
import io
import os
import re
import sys
from pathlib import Path
from unittest import TestCase, skipIf
from unittest.mock import patch

file_path = Path(__file__).absolute().parent / 'main.py'
is_file_empty = os.stat(file_path).st_size == 0


class TestMakingChange(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.003-making-change.python.main'

    @staticmethod
    def format_output(output: str) -> set:
        """
        Method that format the return output in a dict
        with the coins name key to be more readable and comparable

        :param output: The script return
        :return: The script output formatted as a set
        """
        output_formatted = re.sub(r'[^\w]', ' ', output).split()

        coins_name = ['toonies', 'loonies', 'nickels', 'quarters', 'dimes', 'pennies']

        output_coins_name = []
        output_values = []

        for i in output_formatted:
            if i.isdigit():
                output_values.append(i)
            else:
                if i in coins_name:
                    output_coins_name.append(i)

        output = set(zip(output_coins_name, output_values))
        return output

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok(self, mock_input):
        """
        Check if return a correct result
        """
        mock_input.return_value = 742

        good_result = {('toonies', '3'), ('loonies', '1'), ('quarters', '1'),
                       ('dimes', '1'), ('nickels', '1'), ('pennies', '2')}

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            output = self.format_output(mock_print.getvalue())
            self.assertEqual(output, good_result, 'The result is different from the expected')

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_invalid_input(self, mock_input):
        """
        Check if return a correct result
        """
        mock_input.return_value = 'invalid_input'

        with self.assertRaises(ValueError):
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')
