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


class TestAreaOfARoom(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.001-area-of-a-room.python.main'

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_int_input(self, mock_inputs):
        """
        Check correctly result with inputs int
        """
        mock_inputs.side_effect = [2, 2]  # width, length

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            try:
                result_digit = float(re.findall(r'\d+\.\d+', mock_print.getvalue())[-1])
                self.assertEqual(4.0, result_digit,
                                 'The result is different from the expected')

            except IndexError:
                raise IndexError(' ▶ The are not float type value in your final print')

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_float_input(self, mock_inputs):
        """
        Check correctly result with inputs float
        """
        mock_inputs.side_effect = [2.0, 2.0]  # width, length

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            try:
                result_digit = float(re.findall(r'\d+\.\d+', mock_print.getvalue())[-1])
                self.assertEqual(4.0, result_digit,
                                 'The result is different from the expected')
            except IndexError:
                raise IndexError(' ▶ The are not float type value in your final print')

    # ---------------------------------------------------------------------------------------------------------------- #

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_str_input(self, mock_inputs):
        """
        Check if correctly assert a ValueError with inputs str
        """
        mock_inputs.side_effect = ['str_width', 'str_length']

        with self.assertRaises(ValueError):
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')
