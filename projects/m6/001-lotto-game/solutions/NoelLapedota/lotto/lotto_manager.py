from lotto import type_bill
from lotto import choose_number
from lotto import generator_number
from lotto import city_bill
from lotto import ticket_creator
from lotto import printer
from lotto import extraction
from lotto import search_winning
from lotto import prizes

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
         type = type_bill.Type_bill()
         type_of_game = type.type()

         #allows you to choose the amount of numbers to play
         choose =  choose_number.Choose_number()
         
         number_of_game = choose_number.Choose_number.number_of_game(self)
         
         type_bills = type.played[-1]

         #compare number_of_game width number_choose
         number_choose = choose_number.Choose_number.number(number_of_game, type_bills)

         #quantity of number choose
         quantity_numbers = choose_number.Choose_number.quantity_of_number

         #check width True or False  that the amount of numbers chosen is correct with the bet chosen
         controll = choose_number.Choose_number(number_choose)

         #random number generator from 1 to 90
         generator = generator_number.Generator()
         number_generators = generator.generate_number(number_of_game)

         #it requires the amount to be bet
         amount = type.amount_bet()
         amount_bet = type_bill.Type_bill.amount_played

         #generate the lottery 
         extraction_lotto = extraction.Extraction(5)
        
         #allows you to choose the city
         city_of_bill = city_bill.City()
         city = city_of_bill.str_city_of_bill()

         #print lottery
         the_printer = printer.Printer()
         print_lottery = the_printer.print_extraction()

         #builds the ticket
         ticket = ticket_creator.Ticket(b, type_of_game, city, number_choose, number_generators, amount_bet)

         #create the ticket
         ticket_maker = ticket.ticket_graphic()

         #print the ticket
         print_on_screen = the_printer.print()
         
        #check if the ticket object is winning or not
        
         for tk in ticket_creator.Ticket.ticket:
             search_win = search_winning.Search_winning(extraction.Extraction.extraction, tk)
             search_win.controll_wheel()
         
             #calculates the prize of the win
             #each win is calculated, because there can be more than one win in a ticket
             #the Prizes class is created only if the ticket is a winner
             for win in search_win.winning_play:
                 money = prizes.Prizes(type_bill.Type_bill.amount_played, win, quantity_numbers)
                 money.payout_calculator()
                  
        #clears the data lists
         search_win.winning_play.clear()
         prizes.Prizes.single_win.clear()
         
         
 
