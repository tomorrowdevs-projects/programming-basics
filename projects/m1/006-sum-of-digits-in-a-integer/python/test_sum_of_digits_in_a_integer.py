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


class TestSumOfDigitsInAInteger(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.006-sum-of-digits-in-a-integer.python.main'

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok(self, mock_input):
        """
        Check if return the correct result
        """

        mock_input.return_value = '1234'

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = int(re.findall(r'\d+', mock_print.getvalue())[-1])
            self.assertEqual(10, result, 'The result is different from the expected')

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_2(self, mock_input):
        """
        Check if return the correct result
        """

        mock_input.return_value = '9999'

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = int(re.findall(r'\d+', mock_print.getvalue())[-1])
            self.assertEqual(36, result, 'The result is different from the expected')

    # --------------------------------------------------------------------------------------------------------------- #

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_invalid_input_str(self, mock_input):
        """
        Check if raise an ValueError with a string input value
        """

        mock_input.return_value = 'invalid input'

        with self.assertRaises(ValueError):
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')
