'''
allows you to choose the type of city to play
for each city some numbers will be generated, if you choose Tutte the probability of winning
 increases because the numbers chosen earlier have more chances of being drawn
'''


class City:

    city = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano',
                'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia','Tutte'
                ]
    def __init__(self,  name_of_city):
        self.name_of_city = name_of_city

    def city_of_bill(self, city):
       if city not in City.city:
                 city = input('Choose from those in the list please...')
       return city


    def str_city_of_bill(self):
       city_name = input('Which Wheel you want to play on?\n You can choose between: \n'+ str(City.city)+'\n' ).capitalize()
       City.city_of_bill(self, city_name)  
       return city_name

        
           



        