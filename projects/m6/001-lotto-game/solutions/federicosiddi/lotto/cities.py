class Cities:
    CITIES = ["Bari", "Cagliari", "Firenze", "Genova", "Milano", "Napoli", "Palermo", "Roma", "Torino", "Venezia",
              "Tutte"]

    def print(self):
        print("Type the corresponding city name to select the bill city:")
        print(*self.CITIES)