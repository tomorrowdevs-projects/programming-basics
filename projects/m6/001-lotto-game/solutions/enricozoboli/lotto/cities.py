class Cities:

    cities: list[str] = ['Bari', 'Cagliari', 'Firenze', 'Genova',
                         'Milano', 'Napoli', 'Palermo', 'Roma',
                         'Torino', 'Venezia', 'Tutte']

    @staticmethod
    def print_cities() -> None:
        print("Choose a city(aka 'Routa'): ")
        for city in Cities.cities:
            print(city)

    @staticmethod
    def validate_city(city: str) -> bool:
        if city.capitalize() in Cities.cities:
            return True
        return False

