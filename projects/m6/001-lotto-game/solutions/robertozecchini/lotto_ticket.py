#Class defining a lotto ticket

import random
import fake_extraction
from ascii_table import ascii_table

class Ticket:
    bills = {"Ambata": 1, "Ambo": 2, "Terna": 3, "Quaterna": 4, "Cinquina": 5}
    cities = ("Bari", "Cagliari", "Firenze", "Genova", "Milano", "Napoli", "Palermo", "Roma", "Torino", "Venezia", "Tutte")
    
    def __init__(self, type, city, numbers):
        self.type = type
        self.city = city
        self.numbers = []
        while len(self.numbers) < numbers:
            n = random.randrange(1, 90+1)
            if n not in self.numbers:
                self.numbers.append(n)
        self.numbers.sort()
    
    def __str__(self):
        numbers_str = ' '.join(map(str,self.numbers))
        return ascii_table("Lotto ticket", type = self.type, city = self.city, numbers = numbers_str)

    def isValid(self, extraction):
        if not isinstance(extraction, fake_extraction.Extraction):
            return False
        elif self.city != "Tutte" and self.city not in extraction.results.keys():
            return False
        else:
            return True

    def isWinning(self, extraction):
        if not self.isValid(extraction):
            return False
        if self.city == "Tutte":
            for city in extraction.cities:
                if self.checkNumbers(extraction.results[city]):
                    return True
            else:
                return False
        else:
            return self.checkNumbers(extraction.results[self.city])
    
    def checkNumbers(self, extracted_numbers):
        played = set(self.numbers)
        extracted = set(extracted_numbers)
        winnings = played & extracted
        if len(winnings) >= self.bills[self.type]:
            return True
        else:
            return False
    
