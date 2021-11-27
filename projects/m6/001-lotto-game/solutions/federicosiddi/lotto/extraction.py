import random


class Extraction:

    @staticmethod
    def extract_numbers(amount):
        """
        Function used to return a random generated numbers between 1 and 90 both ends included

        :param amount: type int, amount of random numbers to generate
        :return: type list, list of specified amount of random integer numbers between 1 and 90
        """
        random_extraction = random.sample(range(1, 91), int(amount))
        return random_extraction
