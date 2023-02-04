import random


class GenerateNumber:
    """ The class that generate a numbers from 0 to 90"""
    @staticmethod
    def generate_number(number):
        list_generate = []
        for _ in range(number):
            list_generate.append(random.randrange(0, 91))

        return list_generate
