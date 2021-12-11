#Class defining a lotto bill

import random

class Ticket:
    types = ("Ambata", "Ambo", "Terna", "Quaterna", "Cinquina")
    cities = ("Bari", "Cagliari", "Firenze", "Genova", "Milano", "Napoli", "Palermo", "Roma", "Torino", "Venezia", "Tutte")
    
    def __init__(self, type, city, numbers):
        self.type = type
        self.city = city
        self.numbers = []
        for n in range(numbers):
            self.numbers.append(random.randrange(1, 90+1))
    
    def __str__(self):
        pass