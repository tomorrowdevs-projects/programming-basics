import importlib
import io
import os
import sys
from pathlib import Path
from unittest import TestCase, skipIf
from unittest.mock import patch

file_path = Path(__file__).absolute().parent / 'main.py'
is_file_empty = os.stat(file_path).st_size == 0


@skipIf(is_file_empty, 'Empty file. Test 014 Skipped')
class TestCellPhoneBill(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.014-cell-phone-bill.python.main'

    @patch('builtins.input')
    def test_ok_base(self, mock_inputs):
        """
        Check if correctly return the expected output
        """

        mock_inputs.side_effect = [40, 50]

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('base charge: 15.00€\n'
                          '911 fee: 0.44€\n'
                          'tax: 0.77€\n'
                          'total bill amount: 16.21€', result, 'Output different that the expected.')

    @patch('builtins.input')
    def test_ok_extra_min(self, mock_inputs):
        """
        Check if correctly return the expected output with extra minutes
        """

        mock_inputs.side_effect = [100, 50]

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('base charge: 15.00€\n'
                          'extra minutes charge: 12.50€\n'
                          '911 fee: 0.44€\n'
                          'tax: 1.40€\n'
                          'total bill amount: 29.34€', result, 'Output different that the expected.')

    @patch('builtins.input')
    def test_ok_extra_mess(self, mock_inputs):
        """
        Check if correctly return the expected output with extra messages
        """

        mock_inputs.side_effect = [50, 100]

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('base charge: 15.00€\n'
                          'extra messages charge: 7.50€\n'
                          '911 fee: 0.44€\n'
                          'tax: 1.15€\n'
                          'total bill amount: 24.09€', result, 'Output different that the expected.')

    @patch('builtins.input')
    def test_ok_extras(self, mock_inputs):
        """
        Check if correctly return the expected output with all extras
        """

        mock_inputs.side_effect = [10000, 10000]

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('base charge: 15.00€\n'
                          'extra minutes charge: 2487.50€\n'
                          'extra messages charge: 1492.50€\n'
                          '911 fee: 0.44€\n'
                          'tax: 199.77€\n'
                          'total bill amount: 4195.21€', result, 'Output different that the expected.')