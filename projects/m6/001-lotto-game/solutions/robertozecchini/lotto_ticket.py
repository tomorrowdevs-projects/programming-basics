#Class defining a lotto ticket

import random
import fake_extraction
from binomial import binomial
from ascii_table import ascii_table

class Ticket:
    bills = {"Ambata": 1, "Ambo": 2, "Terna": 3, "Quaterna": 4, "Cinquina": 5}
    cities = ("Bari", "Cagliari", "Firenze", "Genova", "Milano", "Napoli", "Palermo", "Roma", "Torino", "Venezia", "Tutte")
    gross_winnings = {
                     "Ambata": {1: 11.23, 2: 5.61, 3: 3.74, 4: 2.80, 5: 2.24, 6: 1.87, 7: 1.60, 8: 1.40, 9: 1.24, 10: 1.12},
                     "Ambo": {2: 250, 3: 83.33, 4: 41.66, 5: 25, 6: 16.66, 7: 11.90, 8: 8.92, 9: 6.94, 10: 5.55},
                     "Terna": {3: 4500, 4: 1125, 5: 450, 6: 225, 7: 128.57, 8: 80.35, 9: 53.57, 10: 37.50},
                     "Quaterna": {4: 120000, 5: 240000, 6: 8000, 7: 3428.57, 8: 1714.28, 9: 952.38, 10: 571.42},
                     "Cinquina": {5: 6000000, 6: 1000000, 7: 285714.28, 8: 107142.85, 9: 47619.04, 10: 23809.52}
                     }
    net_winnings = {
                    "Ambata": {1: 10.33, 2: 5.16, 3: 3.44, 4: 2.57, 5: 2.06, 6: 1.72, 7: 1.47, 8: 1.28, 9: 1.14, 10: 1.03},
                    "Ambo": {2: 230, 3: 76.66, 4: 38.32, 5: 23, 6: 15.32, 7: 10.94, 8: 8.20, 9: 6.38, 10: 5.10},
                    "Terna": {3: 4140, 4: 1035, 5: 414, 6: 207, 7: 118.28, 8: 73.92, 9: 49.28, 10: 34.50},
                    "Quaterna": {4: 110400, 5: 22080, 6: 7360, 7: 3154.28, 8: 1577.13, 9: 876.18, 10: 525.70},
                    "Cinquina": {5: 5520000, 6: 920000, 7: 262857.13, 8: 98571.42, 9: 43809.51, 10: 21904.75}
                    }

    def __init__(self, type, city, numbers, money = 1):
        self.type = type
        self.city = city
        self.numbers = []
        while len(self.numbers) < numbers:
            n = random.randrange(1, 90+1)
            if n not in self.numbers:
                self.numbers.append(n)
        self.numbers.sort()
        self.money = money
    
    def __str__(self):
        numbers_str = ' '.join(map(str,self.numbers))
        money_str = f"{self.money:3.2f} €"
        return ascii_table("Lotto ticket", type = self.type, city = self.city, bet = money_str, numbers = numbers_str)

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
    
    def winningAmountPerCity(self, extracted_numbers):
        played = set(self.numbers)
        extracted = set(extracted_numbers)
        winnings = played & extracted
        if len(winnings) > self.bills[self.type]:
            # more than 1 winning in this ticket
            multiplier = binomial(len(winnings), self.bills[self.type])
        elif len(winnings) == self.bills[self.type]:
            multiplier = 1
        else:
            multiplier = 0
        gross = self.gross_winnings[self.type][len(self.numbers)] * multiplier
        net = 0
        return gross, net
        
    def winningAmount(self, extraction):
        gross = 0
        net = 0
        if not self.isValid(extraction):
            pass
        elif self.city == "Tutte":
            for city in extraction.cities:
                g, n = self.winningAmountPerCity(extraction.results[city])
                gross += g
                net += n
            gross /= len(extraction.cities)
            net /= len(extraction.cities)
        else:
            gross, net = self.winningAmountPerCity(extraction.results[self.city])
        return gross, net
        
    
