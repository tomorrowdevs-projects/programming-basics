from lotto import generator_number
from lotto import printer

# extract 5 numbers out of 10 cities, using the class generator_number

class  Extraction:

    cities = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia']
    extraction = {}

    def __init__ (self, number):

        self.number = number
        for city in self.cities:
            self.extraction[city] = generator_number.Generator.generate_number(self.number)
            
        
        
def __str__(self):
    printer.Printer.print_extraction()
    return ''

