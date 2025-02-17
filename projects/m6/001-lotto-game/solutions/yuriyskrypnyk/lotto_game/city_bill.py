class CityBill:
    """ The class that ask user to choose the city between: Bari, Cagliari, Firenze, Genova, Milano, Napoli,
                     Palermo, Roma, Torino, Venezia, Tutte """
    @staticmethod
    def choose_city():
        city_list = ''
        list_city = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli',
                     'Palermo', 'Roma', 'Torino', 'Venezia', 'Tutte']
        while True:
            city = input(f"Chose the city between: Bari, Cagliari, Firenze, Genova, Milano, "
                         "Napoli, Palermo, Roma, Torino, Venezia and Tutte\n")
            if city in list_city:
                city_list += city
                break
            else:
                print("You chose wrong city! Try again.\n")
        return city_list
