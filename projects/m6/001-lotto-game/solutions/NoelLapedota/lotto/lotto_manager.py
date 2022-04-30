from lotto import type_bill
from lotto import choose_number
from lotto import generator_number
from lotto import city_bill
from lotto import ticket_creator
from lotto import printer

'''
after receiving the input from the user in the main,
 all the parameters will be asked until the ticket is printed
'''
class Lotto:

 def __init__(self, ticket):
     self.ticket = ticket
     for b in range(1, self.ticket + 1):
         print(f'Ticket n° {b} \n')

         #allows you to choose the type of bet
         type_of_game = type_bill.Type_bill.type(self)

         #allows you to choose the amount of numbers to play
         number_of_game = choose_number.Choose_number.number_of_game(self)
         type_bills = type_bill.Type_bill.played[-1]

         #compare number_of_game width number_choose
         number_choose = choose_number.Choose_number.number(number_of_game, type_bills)

         #check width True or False  that the amount of numbers chosen is correct with the bet chosen
         controll = choose_number.Choose_number(number_choose)

         #random number generator from 1 to 90
         number_generators = generator_number.Generator.generate_number(number_of_game)

         #allows you to choose the city
         city = city_bill.City.str_city_of_bill(self)

         #builds the ticket
         ticket = ticket_creator.Ticket(self.ticket, type_of_game, city, number_choose, number_generators)

         #create the ticket
         ticket_maker = ticket.ticket_graphic()

         #print the ticket
         print_on_screen = printer.Printer.print(self)
 
