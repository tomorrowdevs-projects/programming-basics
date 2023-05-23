import importlib
import io
import os
import sys
from pathlib import Path
from unittest import TestCase, skipIf
from unittest.mock import patch

file_path = Path(__file__).absolute().parent / 'main.py'
is_file_empty = os.stat(file_path).st_size == 0


@skipIf(is_file_empty, 'Empty file. Test 009 Skipped')
class TestVowelOrConsonant(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.009-vowel-or-consonant.python.main'

    @patch('builtins.input')
    def test_ok_vowel(self, mock_input):
        """
        Check if correctly return 'vowel' in the output
        """
        vowels = ['a', 'e', 'i', 'o', 'u']

        for vowel in vowels:
            mock_input.return_value = vowel

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('vowel', result)

    @patch('builtins.input')
    def test_ok_consonant(self, mock_input):
        """
        Check if correctly return 'consonant' in the output
        """

        mock_input.return_value = 'd'

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('consonant', result)

    @patch('builtins.input')
    def test_ok_y(self, mock_input):
        """
        Check if correctly return 'sometimes y is a vowel, and sometimes y is a consonant' in the output
        """

        mock_input.return_value = 'y'

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = mock_print.getvalue().lower()
            self.assertIn('sometimes y is a vowel, and sometimes y is a consonant', result)
