import importlib
import io
import os
import sys
from pathlib import Path
from unittest import TestCase, skipIf
from unittest.mock import patch
from datetime import date, timedelta

file_path = Path(__file__).absolute().parent / 'main.py'
is_file_empty = os.stat(file_path).st_size == 0


@skipIf(is_file_empty, 'Empty file. Test 013 Skipped')
class TestWhatColorIsThatSquare(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.013-birth-date-to-astrological-sign.python.main'

    @patch('builtins.input')
    def test_ok_capricorn(self, mock_inputs):
        """
        Check if return 'capricorn' in the output
        """

        min_date = date(2022, 12, 22)
        max_date = date(2023, 1, 19)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('capricorn', result, f'{month_}{day_} sign is capricorn.')

    @patch('builtins.input')
    def test_ok_aquarius(self, mock_inputs):
        """
        Check if return 'aquarius' in the output
        """

        min_date = date(2023, 1, 20)
        max_date = date(2023, 2, 18)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('aquarius', result, f'The sign of {month_} {day_} is aquarius.')

    @patch('builtins.input')
    def test_ok_pisces(self, mock_inputs):
        """
        Check if return 'pisces' in the output
        """

        min_date = date(2023, 2, 19)
        max_date = date(2023, 3, 20)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('pisces', result, f'The sign of {month_} {day_} is pisces.')

    @patch('builtins.input')
    def test_ok_aries(self, mock_inputs):
        """
        Check if return 'aries' in the output
        """

        min_date = date(2023, 3, 21)
        max_date = date(2023, 4, 19)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('aries', result, f'The sign of {month_} {day_} is aries.')

    @patch('builtins.input')
    def test_ok_taurus(self, mock_inputs):
        """
        Check if return 'taurus' in the output
        """

        min_date = date(2023, 4, 20)
        max_date = date(2023, 5, 20)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('taurus', result, f'The sign of {month_} {day_} is taurus.')

    @patch('builtins.input')
    def test_ok_gemini(self, mock_inputs):
        """
        Check if return 'gemini' in the output
        """

        min_date = date(2023, 5, 21)
        max_date = date(2023, 6, 20)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('gemini', result, f'The sign of {month_} {day_} is gemini.')

    @patch('builtins.input')
    def test_ok_cancer(self, mock_inputs):
        """
        Check if return 'cancer' in the output
        """

        min_date = date(2023, 6, 21)
        max_date = date(2023, 7, 22)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('cancer', result, f'The sign of {month_} {day_} is cancer.')

    @patch('builtins.input')
    def test_ok_leo(self, mock_inputs):
        """
        Check if return 'leo' in the output
        """

        min_date = date(2023, 7, 23)
        max_date = date(2023, 8, 22)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('leo', result, f'The sign of {month_} {day_} is leo.')

    @patch('builtins.input')
    def test_ok_virgo(self, mock_inputs):
        """
        Check if return 'virgo' in the output
        """

        min_date = date(2023, 8, 23)
        max_date = date(2023, 9, 22)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('virgo', result, f'The sign of {month_} {day_} is virgo.')

    @patch('builtins.input')
    def test_ok_libra(self, mock_inputs):
        """
        Check if return 'libra' in the output
        """

        min_date = date(2023, 9, 23)
        max_date = date(2023, 10, 22)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('libra', result, f'The sign of {month_} {day_} is libra.')

    @patch('builtins.input')
    def test_ok_scorpio(self, mock_inputs):
        """
        Check if return 'scorpio' in the output
        """

        min_date = date(2023, 10, 23)
        max_date = date(2023, 11, 21)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('scorpio', result, f'The sign of {month_} {day_} is scorpio.')

    @patch('builtins.input')
    def test_ok_sagittarius(self, mock_inputs):
        """
        Check if return 'sagittarius' in the output
        """

        min_date = date(2023, 11, 22)
        max_date = date(2023, 12, 21)

        delta = max_date - min_date

        for i in range(delta.days + 1):
            next_date = min_date + timedelta(days=i)
            month_ = next_date.strftime('%B')   # return the name of the month
            day_ = next_date.day

            mock_inputs.side_effect = [month_, day_]

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('sagittarius', result, f'The sign of {month_} {day_} is sagittarius.')