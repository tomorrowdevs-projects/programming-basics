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


class TestUnitsOfTime(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.004-units-of-time.python.main'

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok(self, mock_inputs):
        """
        Check if return the correct result
        """

        mock_inputs.side_effect = [0, 1, 4, 89]  # 01:04:89

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result_digit = int(re.findall(r'\d+', mock_print.getvalue())[-1])
            self.assertEqual(3929, result_digit, 'The result is different from the expected')

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_complete(self, mock_inputs):
        """
        Check if return the correct result
        """

        mock_inputs.side_effect = [1, 10, 12, 32]  # 1 day 10:12:32

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result_digit = int(re.findall(r'\d+', mock_print.getvalue())[-1])
            self.assertEqual(123152, result_digit, 'The result is different from the expected')

    # --------------------------------------------------------------------------------------------------------------- #

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_invalid_input_str(self, mock_inputs):
        """
        Check if return the correct result
        """

        mock_inputs.side_effect = ['aaa', 'bbb', 'ccc', 'ddd']

        with self.assertRaises(ValueError):
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')