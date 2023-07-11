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


class TestDayOldBread(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.007-day-old-bread.python.main'

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok(self, mock_input):
        """
        Check if return the correct result
        """

        mock_input.return_value = 342

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = re.findall(r'\d+\.\d+', mock_print.getvalue())
            self.assertEqual(['1193.58', '716.15', '477.43'], result, 'The result is different from the expected')

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_0_input(self, mock_input):
        """
        Check if return the correct result
        """

        mock_input.return_value = 0

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = re.findall(r'\d+\.\d', mock_print.getvalue())
            self.assertEqual(['0.0', '0.0', '0.0'], result, 'The result is different from the expected')

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
