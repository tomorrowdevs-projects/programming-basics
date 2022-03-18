
from random import sample

'''
Create a lotto extraction table
'''

class Extraction:

    
    def lotto_extraction():

        total_cities = ['bari', 'cagliari', 'firenze', 'genova', 'milano', 'napoli', 'palermo','roma', 'torino', 'venezia', 'tutte']
        extraction = {}
        
        for city in total_cities:
            if city != 'tutte':
                extraction[city] = sample(range(1,91), k=5)
           
        
        return extraction






        
