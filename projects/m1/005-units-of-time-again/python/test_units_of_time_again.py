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


class TestUnitsOfTimeAgain(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.005-units-of-time-again.python.main'

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok(self, mock_input):
        """
        Check if return the correct result
        """

        mock_input.return_value = 3849830

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().split()[-1]
            self.assertEqual('44:13:23:50', result, 'The result is different from the expected')

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_ok_empty(self, mock_input):
        """
        Check if return the correct result
        """

        mock_input.return_value = 0

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().split()[-1]
            self.assertEqual('0:00:00:00', result, 'The result is different from the expected')

    # --------------------------------------------------------------------------------------------------------------- #

    @skipIf(is_file_empty, 'Empty file')
    @patch('builtins.input')
    def test_invalid_input_str(self, mock_input):
        """
        Check if raise an ValueError with a string input value
        """

        mock_input.return_value = 'input value'

        with self.assertRaises(ValueError):
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

