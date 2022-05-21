'''
allows you to choose the type of city to play
for each city some numbers will be generated, if you choose Tutte the probability of winning
 increases because the numbers chosen earlier have more chances of being drawn
'''


class City:

    city = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano',
                'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia','Tutte'
                ]
    def __init__(self):
        self == self



    def city_of_bill(self, city):
       if city not in self.city:
                 city = input('Choose from those in the list please...')
                 self.str_city_of_bill()
       return city


    def str_city_of_bill(self):
        try:
            city_name = input('Which Wheel you want to play on?\n You can choose between: \n'+ str(City.city)+'\n' ).capitalize()
            self.city_of_bill(city_name)
            return city_name
        except ValueError:
            print('Value not allowed')
        
           



        