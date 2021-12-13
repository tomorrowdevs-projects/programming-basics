import random
    
class Extraction:
    cities = ("Bari", "Cagliari", "Firenze", "Genova", "Milano", "Napoli", "Palermo", "Roma", "Torino", "Venezia", "Tutte")
    
    def __init__(self):
        self.results = {}
        for city in self.cities:
            if city != "Tutte":
                self.results[city] = self.extraction()
    
    def __str__(self):
        output_string = ""
        for city, numbers in self.results:
            output_string += f"{city} - {' '.join(map(str, numbers))}"
        return output_string
    
    def extraction(self):
        numbers = []
        for i in range(6):
            numbers.append(random.randint(1, 90+1))
        numbers.sort()
        return numbers
