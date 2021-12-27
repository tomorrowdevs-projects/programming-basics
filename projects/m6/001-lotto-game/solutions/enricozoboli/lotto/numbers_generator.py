from random import sample
import typing


class NumberGenerator:

    @staticmethod
    def num_gen(k) -> typing.List[int]:
        numbers = sample(range(1, 91), k)
        return numbers

