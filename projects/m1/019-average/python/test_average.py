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


@skipIf(is_file_empty, 'Empty file. Test 019 Skipped')
class TestNextDay(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.019-average.python.main'

    @patch('builtins.input')
    def test_ok(self, mock_inputs):
        """
        Check if return the correct result
        """

        mock_inputs.side_effect = [50, 2, 3, 10, 0]

        with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
            sys.modules.pop(self.module_name, None)
            importlib.import_module(name=self.module_name, package='files')

            result = float(re.findall(r'\d+\.\d+', mock_print.getvalue())[-1])
            self.assertEqual(16.25, result)

