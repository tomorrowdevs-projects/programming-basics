import importlib
import io
import os
import sys
from pathlib import Path
from unittest import TestCase, skipIf
from unittest.mock import patch

file_path = Path(__file__).absolute().parent / 'main.py'
is_file_empty = os.stat(file_path).st_size == 0


@skipIf(is_file_empty, 'Empty file. Test 012 Skipped')
class TestWhatColorIsThatSquare(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.012-what-color-is-that-square.python.main'

    @patch('builtins.input')
    def test_ok_white(self, mock_input):
        """
        Check if return 'white' in the output
        """

        squares = ['a2', 'a4', 'a6', 'a8',
                   'b1', 'b3', 'b5', 'b7',
                   'c2', 'c4', 'c6', 'c8',
                   'd1', 'd3', 'd5', 'd7',
                   'e2', 'e4', 'e6', 'e8',
                   'f1', 'f3', 'f5', 'f7',
                   'g2', 'g4', 'g6', 'g8',
                   'h1', 'h3', 'h5', 'h7']

        for square in squares:
            mock_input.return_value = square

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('white', result, f'The {square} is white.')

    @patch('builtins.input')
    def test_ok_black(self, mock_input):
        """
        Check if return 'black' in the output
        """

        squares = ['a1', 'a3', 'a5', 'a7',
                   'b2', 'b4', 'b6', 'b8',
                   'c1', 'c3', 'c5', 'c7',
                   'd2', 'd4', 'd6', 'd8',
                   'e1', 'e3', 'e5', 'e7',
                   'f2', 'f4', 'f6', 'f8',
                   'g1', 'g3', 'g5', 'g7',
                   'h2', 'h4', 'h6', 'h8']

        for square in squares:
            mock_input.return_value = square

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('black', result, f'The {square} is black.')