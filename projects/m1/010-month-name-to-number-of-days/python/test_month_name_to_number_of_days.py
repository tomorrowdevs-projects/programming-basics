import importlib
import io
import os
import sys
from pathlib import Path
from unittest import TestCase, skipIf
from unittest.mock import patch

file_path = Path(__file__).absolute().parent / 'main.py'
is_file_empty = os.stat(file_path).st_size == 0


@skipIf(is_file_empty, 'Empty file. Test 010 Skipped')
class TestMonthNameToNumberOfDays(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.010-month-name-to-number-of-days.python.main'

    @patch('builtins.input')
    def test_ok_30(self, mock_input):
        """
        Check if correctly return 30 in the output
        """

        months = ['april', 'june', 'september', 'november']

        for month in months:
            mock_input.return_value = month

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('30', result, f'{month} consists of 30 days.')

    @patch('builtins.input')
    def test_ok_31(self, mock_input):
        """
        Check if correctly return 30 in the output
        """

        months = ['january', 'march', 'may', 'july', 'august', 'october', 'december']

        for month in months:
            mock_input.return_value = month

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('31', result, f'{month} consists of 31 days.')

    @patch('builtins.input')
    def test_ok_feb(self, mock_input):
        """
        Check if correctly return 30 in the output
        """

        month = 'february'
        mock_input.return_value = month

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('28 or 29', result, f'{month} consists of 28 or 29 days.')

