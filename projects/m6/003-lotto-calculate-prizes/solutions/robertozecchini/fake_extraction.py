import random
    
class Extraction:
    cities = ("Bari", "Cagliari", "Firenze", "Genova", "Milano", "Napoli", "Palermo", "Roma", "Torino", "Venezia")
    
    def __init__(self):
        self.results = {}
        for city in self.cities:
            if city != "Tutte":
                self.results[city] = self.extraction()
    
    def __str__(self):
        output_string = ""
        for city, numbers in self.results.items():
            num_str = ""
            for n in numbers:
                num_str += str(n).rjust(3)
            output_string += f"{city:10s}{num_str}\n"
        return output_string
    
    def extraction(self):
        numbers = []
        while len(numbers) < 6:
            n = random.randrange(1, 90+1)
            if n not in numbers:
                numbers.append(n)
        numbers.sort()
        return numbers

if __name__ == "__main__":
    e = Extraction()
    print(e)
