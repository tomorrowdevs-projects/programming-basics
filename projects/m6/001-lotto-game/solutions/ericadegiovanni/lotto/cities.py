
'''
Handle the creation of the 'city' aka 'ruota' from the user.
Ask for a city to insert and if is correct return it.
'''
class Cities:
    
    total_cities = ['bari', 'cagliari', 'firenze', 'genova', 'milano', 'napoli', 'palermo','roma', 'torino', 'venezia', 'tutte']

    @staticmethod
    def get_city() -> str:
        while True:
            try:
                city_name = input('Select a city name between BARI, CAGLIARI, FIRENZE, GENOVA, MILANO, NAPOLI, PALERMO, ROMA, TORINO, VENEZIA and TUTTE:\n')   
                if city_name.lower() in Cities.total_cities:
                    return city_name.lower()
                else:
                    raise ValueError
            except ValueError:
                    print(f'{city_name} is not valid.')
    