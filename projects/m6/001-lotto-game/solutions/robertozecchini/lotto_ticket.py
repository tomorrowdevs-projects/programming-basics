#Class defining a lotto bill

import random
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