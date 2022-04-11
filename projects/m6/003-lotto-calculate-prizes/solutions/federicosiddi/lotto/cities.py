class Cities:
    """
    Class used to store cities aka ruota names and includes methods to validate user city choice

    """
    CITIES = ["Bari", "Cagliari", "Firenze", "Genova", "Milano", "Napoli", "Palermo", "Roma", "Torino", "Venezia",
              "Tutte"]

    @staticmethod
    def city_choice_info():
        print("Type the corresponding city name to select the bill city")
        print(*Cities.CITIES)

    @staticmethod
    def is_city_valid():
        """
        Function used to validate user city choice

        :return: type str, returns a valid city name that is present in CITIES list variable
        """
        while True:
            try:
                city_choice = input("Enter value here -->: ")
                while city_choice.capitalize() not in Cities.CITIES:
                    print("Please enter a valid city")
                    city_choice = input("Enter city name here -->: ")
                return city_choice.capitalize()
            except ValueError as err:
                print(err)
                