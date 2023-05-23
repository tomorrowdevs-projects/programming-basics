import typing


class Cities:
    """
    A class representing the city (aka 'Ruota') that user can choose.
    Choices : Bari, Cagliari, Firenze, Genova, Milano, Napoli, Palermo,
    Roma, Torino, Venezia, Tutte.
    """
    cities: typing.List[str] = ['Bari', 'Cagliari', 'Firenze', 'Genova',
                                'Milano', 'Napoli', 'Palermo', 'Roma',
                                'Torino', 'Venezia', 'Tutte']

    @staticmethod
    def print_cities() -> None:
        for city in Cities.cities:
            print('-' + city)

    @staticmethod
    def validate_city(city: str) -> bool:
        if city.capitalize() in Cities.cities:
            return True
        return False
