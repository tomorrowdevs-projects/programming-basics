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


@skipIf(is_file_empty, 'Empty file. Test 022 Skipped')
class TestNextDay(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.022-admission-price.python.main'

    @patch('builtins.input')
    def test_ok(self, mock_inputs):
        """
        Check if return the correct result
        """

        mock_inputs.side_effect = [1.5, 2, 3, 50, '']

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = re.findall(r'\d+\.\d+\d+', mock_print.getvalue())[-1]
            self.assertEqual('37.00', result, 'Total cost not correct')

    @patch('builtins.input')
    def test_ok_2(self, mock_inputs):
        """
        Check if return the correct result
        """

        mock_inputs.side_effect = [0, 78, 3, 45, '']

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = re.findall(r'\d+\.\d+\d+', mock_print.getvalue())[-1]
            self.assertEqual('55.00', result, 'Total cost not correct')

    @patch('builtins.input')
    def test_ok_3(self, mock_inputs):
        """
        Check if return the correct result
        """

        mock_inputs.side_effect = [0, '']

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = re.findall(r'\d+\.\d+\d+', mock_print.getvalue())[-1]
            self.assertEqual('0.00', result, 'Total cost not correct')

    @patch('builtins.input')
    def test_ok_no_inputs(self, mock_inputs):
        """
        Check if return the correct result
        """

        mock_inputs.side_effect = ['']

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = re.findall(r'\d+\.\d+\d+', mock_print.getvalue())[-1]
            self.assertEqual('0.00', result, 'Total cost not correct')