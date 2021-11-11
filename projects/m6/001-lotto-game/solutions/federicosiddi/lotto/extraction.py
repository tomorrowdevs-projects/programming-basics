import random

class Extraction:
    def extract_number(self):
        """
        Function used to return a random generated number between 1 and 90 both ends included

        :return: type int, random number between 1 and 90
        """
        return random.randint(1, 90)