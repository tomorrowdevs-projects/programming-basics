import importlib
import io
import os
import sys
from pathlib import Path
from unittest import TestCase, skipIf
from unittest.mock import patch

file_path = Path(__file__).absolute().parent / 'main.py'
is_file_empty = os.stat(file_path).st_size == 0


@skipIf(is_file_empty, 'Empty file. Test 015 Skipped')
class TestWhatColorIsThatSquare(TestCase):

    def setUp(self) -> None:
        self.module_name = 'projects.m1.015-is-it-a-leap-year.python.main'

    @patch('builtins.input')
    def test_ok_leap(self, mock_input):
        """
        Check if return 'is a leap year' in the output
        """

        leap = [1804, 1808, 1812, 1816, 1820, 1824, 1828, 1832, 1836, 1840, 1844, 1848, 1852, 1856, 1860, 1864, 1868,
                1872, 1876, 1880, 1884, 1888, 1892, 1896, 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940,
                1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008,
                2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076,
                2080, 2084, 2088, 2092, 2096, 2104, 2108, 2112, 2116, 2120, 2124, 2128, 2132, 2136, 2140, 2144, 2148,
                2152, 2156, 2160, 2164, 2168, 2172, 2176, 2180, 2184, 2188, 2192, 2196, 2204, 2208, 2212, 2216, 2220,
                2224, 2228, 2232, 2236, 2240, 2244, 2248, 2252, 2256, 2260, 2264, 2268,  2272, 2276, 2280, 2284, 2288,
                2292, 2296, 2304, 2308, 2312, 2316, 2320, 2324, 2328, 2332, 2336, 2340, 2344, 2348,  2352, 2356, 2360,
                2364, 2368, 2372, 2376, 2380, 2384, 2388, 2392, 2396, 2400]

        for year in leap:

            mock_input.return_value = year

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('is a leap year', result, f'{year} is a leap year.')

    @patch('builtins.input')
    def test_ok_not_leap(self, mock_input):
        """
        Check if return 'is not a leap year' in the output
        """

        not_leap = [1805, 1806, 1807, 1809, 1810, 1811, 1813, 1814, 1815, 1817, 1818, 1819, 1821, 1822, 1823, 1825,
                    1826, 1827, 1829, 1830, 1831, 1833, 1834, 1835, 1837, 1838, 1839, 1841, 1842, 1843, 1845, 1846,
                    1847, 1849, 1850, 1851, 1853, 1854, 1855, 1857, 1858, 1859, 1861, 1862, 1863, 1865, 1866, 1867,
                    1869, 1870, 1871, 1873, 1874, 1875, 1877, 1878, 1879, 1881, 1882, 1883, 1885, 1886, 1887, 1889,
                    1890, 1891, 1893, 1894, 1895, 1897, 1898, 1899, 1921, 1922, 1923, 1925, 1926, 1927, 1929, 1930,
                    1931, 1933, 1934, 1935, 1937, 1938, 1939, 1941, 1942, 1943, 1945, 1946, 1947, 1949, 1950, 1951,
                    1953, 1954, 1955, 1957, 1958, 1959, 1961, 1962, 1963, 1965, 1966, 1967, 1969, 1970, 1971, 1973,
                    1974, 1975, 1977, 1978, 1979, 1981, 1982, 1983, 1985, 1986, 1987, 1989, 1990, 1991, 1993, 1994,
                    1995, 1997, 1998, 1999, 2001, 2002, 2003, 2005, 2006, 2007, 2009, 2010, 2011, 2013, 2014, 2015,
                    2017, 2018, 2019, 2021, 2022, 2023, 2025, 2026, 2027, 2029, 2030, 2031, 2033, 2034, 2035, 2037]

        for year in not_leap:

            mock_input.return_value = year

            with patch('sys.stdout', new_callable=io.StringIO) as mock_print:
                sys.modules.pop(self.module_name, None)
                importlib.import_module(name=self.module_name, package='files')

                result = mock_print.getvalue().lower()
                self.assertIn('is not a leap year', result, f'{year} is not a leap year.')
