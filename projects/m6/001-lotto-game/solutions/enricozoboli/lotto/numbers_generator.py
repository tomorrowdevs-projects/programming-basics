from random import sample
import typing


class NumberGenerator:
    """
    A class used to generate a random list of unique numbers,
    in a given range.
    :parameter: k,  a number of bills entered by the user
    """

    @staticmethod
    def num_gen(k: int) -> typing.List[int]:
        numbers = sample(range(1, 91), k)
        return numbers

