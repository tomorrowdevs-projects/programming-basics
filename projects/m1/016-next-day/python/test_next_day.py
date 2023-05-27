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


@skipIf(is_file_empty, 'Empty file')
class TestNextDay(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.016-next-day.python.main'

    @patch('builtins.input')
    def test_ok(self, mock_inputs):
        """
        Check if return the correct result
        """

        mock_inputs.side_effect = ['2023', '10', '25']

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            # check for match yyyy-mm-dd
            result = re.findall('\d{4}-\d{2}-\d{2}', mock_print.getvalue())[0]
            self.assertEqual('2023-10-26', result)

    @patch('builtins.input')
    def test_ok_leap(self, mock_inputs):
        """
        Check if return the correct result for a leap year
        """

        mock_inputs.side_effect = ['2024', '2', '28']

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            # check for match yyyy-mm-dd or yyyy-m-dd
            result = re.findall('\d{4}-\d{1}-\d{2}|\d{4}-\d{2}-\d{2}', mock_print.getvalue())[0]

            good_results = ['2024-2-29', '2024-02-29']
            self.assertIn(result, good_results)

    @patch('builtins.input')
    def test_ok_no_leap(self, mock_inputs):
        """
        Check if return the correct result
        """

        mock_inputs.side_effect = ['2023', '2', '28']

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            # check for match yyyy-mm-dd or yyyy-m-d
            result = re.findall('\d{4}-\d{2}-\d{2}|\d{4}-\d{1}-\d{1}', mock_print.getvalue())[0]

            good_results = ['2023-3-1', '2023-03-01']
            self.assertIn(result, good_results)
