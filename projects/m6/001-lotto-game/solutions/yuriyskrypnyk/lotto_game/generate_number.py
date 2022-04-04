import random


class GenerateNumber:
    @staticmethod
    def generate_number(number):
        list_generate = []
        for _ in range(number):
            list_generate.append(random.randrange(0, 90))

        return list_generate
