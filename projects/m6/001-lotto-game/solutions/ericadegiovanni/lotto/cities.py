
'''
Handle the creation of the 'city' aka 'ruota' from the user.
Ask for a city to insert and if is correct return it.
'''
class Cities:
    
    total_cities = ['bari', 'cagliari', 'firenze', 'genova', 'milano', 'napoli', 'palermo','roma', 'torino', 'venezia', 'tutte']
    
    
    @staticmethod
    def get_city_input():

        city = input('Select a city name between BARI, CAGLIARI, FIRENZE, GENOVA, MILANO, NAPOLI, PALERMO, ROMA, TORINO, VENEZIA and TUTTE:\n').lower()          
        if city in Cities.total_cities:
            return city
        else:
            print(f'{city} is not valid.')
            raise ValueError

    @staticmethod
    def check_city() -> str:

        while True:
            try:
                city = Cities.get_city_input()
                return city.lower()
            except ValueError: pass
            
    