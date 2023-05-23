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


@skipIf(is_file_empty, 'Empty file. Test 011 Skipped')
class TestNoteToFrequency(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.011-note-to-frequency.python.main'

    @patch('builtins.input')
    def test_ok(self, mock_input):
        """
        Check if return the expected result
        """

        mock_input.return_value = 'C7'

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = float(re.findall(r'\d+\.\d', mock_print.getvalue())[-1])
            self.assertEqual(2093.0, result)

    @patch('builtins.input')
    def test_ok_2(self, mock_input):
        """
        Check if return the expected result
        """

        mock_input.return_value = 'A0'

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = float(re.findall(r'\d+\.\d', mock_print.getvalue())[-1])
            self.assertEqual(27.5, result)