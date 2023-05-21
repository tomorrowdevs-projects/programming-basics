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


class TestDogYears(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.008-dog-years.python.main'

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_1(self, mock_input):
        """
        Check if return the correct result
        """

        mock_input.return_value = 1

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = float(re.findall(r'\d+\.\d+', mock_print.getvalue())[-1])
            self.assertEqual(10.5, result)

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_2(self, mock_input):
        """
        Check if return the correct result
        """

        mock_input.return_value = 2

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = float(re.findall(r'\d+\.\d+', mock_print.getvalue())[-1])
            self.assertEqual(21.0, result)

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_greater_than_2(self, mock_input):
        """
        Check if return the correct result
        """

        mock_input.return_value = 35

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = float(re.findall(r'\d+\.\d+', mock_print.getvalue())[-1])
            self.assertEqual(153.0, result)

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_negative(self, mock_input):
        """
        Check if return the correct result
        """

        mock_input.return_value = 0

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = re.findall(r'\d+\.\d+', mock_print.getvalue()[-1])
            self.assertEqual([], result)

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