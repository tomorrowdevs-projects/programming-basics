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


class TestBottleDeposits(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.002-bottle-deposits.python.main'

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok(self, mock_inputs):
        """
        Check correctly result with inputs int
        """

        mock_inputs.side_effect = [1, 2]  # small, big

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            try:
                result_digit = float(re.findall(r'\d+\.\d+', mock_print.getvalue())[-1])
                self.assertEqual(0.6, result_digit,
                                 'The result is different from the expected')
            except IndexError:
                raise IndexError(' ▶ The are not float type value in your final print')

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_only_small(self, mock_inputs):
        """
        Check correctly result only the first input value
        """

        mock_inputs.side_effect = [1, 0]  # small, big

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            try:
                result_digit = float(re.findall(r'\d+\.\d+', mock_print.getvalue())[-1])
                self.assertEqual(0.1, result_digit,
                                 'The result is different from the expected')
            except IndexError:
                raise IndexError(' ▶ The are not float type value in your final print')

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_only_big(self, mock_inputs):
        """
        Check correctly result only the second input value
        """

        mock_inputs.side_effect = [0, 4]  # small, big

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            try:
                result_digit = float(re.findall(r'\d+\.\d+', mock_print.getvalue())[-1])
                self.assertEqual(1.0, result_digit,
                                 'The result is different from the expected')
            except IndexError:
                raise IndexError(' ▶ The are not float type value in your final print')

