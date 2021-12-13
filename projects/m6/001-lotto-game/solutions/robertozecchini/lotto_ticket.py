#Class defining a lotto bill

import random
import fake_extraction
from ascii_table import ascii_table

class Ticket:
    types = ("Ambata", "Ambo", "Terna", "Quaterna", "Cinquina")
    cities = ("Bari", "Cagliari", "Firenze", "Genova", "Milano", "Napoli", "Palermo", "Roma", "Torino", "Venezia", "Tutte")
    
    def __init__(self, type, city, numbers):
        self.type = type
        self.city = city
        self.numbers = []
        for n in range(numbers):
            self.numbers.append(random.randrange(1, 90+1))
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
        if self.type == "Ambata" and len(winnings) >= 1:
            return True
        elif self.type == "Ambo" and len(winnings) >= 2:
            return True
        elif self.type == "Terna" and len(winnings) >= 3:
            return True
        elif self.type == "Quaterna" and len(winnings) >= 4:
            return True
        elif self.type == "Cinquina" and len(winnings) >= 5:
            return True
        else:
            return False
    
