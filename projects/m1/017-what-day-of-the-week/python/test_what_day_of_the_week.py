import importlib
import io
import os
import sys
from pathlib import Path
from unittest import TestCase, skipIf
from unittest.mock import patch

file_path = Path(__file__).absolute().parent / 'main.py'
is_file_empty = os.stat(file_path).st_size == 0


@skipIf(is_file_empty, 'Empty file. Test 017 Skipped')
class TestWhatColorIsThatSquare(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.017-what-day-of-the-week.python.main'

    @patch('builtins.input')
    def test_ok_sunday(self, mock_input):
        """
        Check if return the expected output
        """

        mock_input.return_value = 1984

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('sunday', result)

    @patch('builtins.input')
    def test_ok_monday(self, mock_input):
        """
        Check if return the expected output
        """

        mock_input.return_value = 1990

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('monday', result)

    @patch('builtins.input')
    def test_ok_tuesday(self, mock_input):
        """
        Check if return the expected output
        """

        mock_input.return_value = 1991

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('tuesday', result)

    @patch('builtins.input')
    def test_ok_wednesday(self, mock_input):
        """
        Check if return the expected output
        """

        mock_input.return_value = 1992

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('wednesday', result)

    @patch('builtins.input')
    def test_ok_thursday(self, mock_input):
        """
        Check if return the expected output
        """

        mock_input.return_value = 1998

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('thursday', result)

    @patch('builtins.input')
    def test_ok_friday(self, mock_input):
        """
        Check if return the expected output
        """

        mock_input.return_value = 1993

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('friday', result)

    @patch('builtins.input')
    def test_ok_saturday(self, mock_input):
        """
        Check if return the expected output
        """

        mock_input.return_value = 1994

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('saturday', result)
