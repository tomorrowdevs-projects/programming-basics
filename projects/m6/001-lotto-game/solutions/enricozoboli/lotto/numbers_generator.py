from random import sample


class NumberGenerator:

    @staticmethod
    def num_gen(k) -> list[int]:
        numbers = sample(range(1, 91), k)
        return numbers

