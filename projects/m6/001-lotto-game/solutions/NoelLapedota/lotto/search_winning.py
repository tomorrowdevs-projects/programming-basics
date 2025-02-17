from lotto import ticket_creator
from lotto import extraction
from lotto import type_bill
from lotto import printer


# represents the analyzer between the ticket and the extraction 
class Search_winning:

    winning_play = []

    #contains the winning numbers and is used to determine if there are any winnings
    tk_controll = {'Bari' : [], 'Cagliari': [], 'Firenze': [], 'Genova': [],
           'Milano': [], 'Napoli': [], 'Palermo': [], 'Roma': [], 'Torino': [], 'Venezia': []
           }

    wheel = ['ambata', 'ambo', 'terno', 'quaterna', 'cinquina'] 

    def __init__ (self, extraction, ticket):
        self.extraction = extraction
        self.ticket = ticket
        
        
# distinguishes the search from the single wheel or 'Tutte'
    def controll_wheel(self):
        if self.ticket.city  == 'Tutte':
            self.controll_wheel_tutte()
        else:
            self.controll_wheel_city()
                 
    # the combination is searched for in the single wheel    
    def controll_wheel_city(self):
          for n_played in (self.ticket.n_g):
              if n_played in self.extraction[self.ticket.city]:
                     self.tk_controll [self.ticket.city].append(n_played)
          self.check()
          return self.tk_controll        

    # the combination is searched for in the all wheels  
    def controll_wheel_tutte(self):
          for n_played in (self.ticket.n_g):
             for x, y in self.extraction.items():
                    if n_played in y :
                        self.tk_controll [x].append(n_played)               
          self.check() 
          return self.tk_controll  

    # determines if the ticket with the type of game  is a winner ticket, 
    # reporting the various data, for printing and for the sum.          
    def check(self):
       count = 0
       for x, y in self.tk_controll.items():
           index = self.wheel.index(self.ticket.type)
           number_of_tk = self.ticket.ticket_number

           # check if the chosen bet is equal to or less than the quantity of numbers drawn in the extraction
           if (index + 1) <= len(y) : 
               self.winning_play.append(len(y))
               count += 1
               # the type of win is entered in type_of_win
               type_of_win = (self.wheel[ len(y) - 1])
               number = (self.tk_controll[x])
               wheel = x
               printer.Printer.print_win(self ,True, number_of_tk, type_of_win, number, wheel)
               number.clear()
               
       if count == 0 : 
            printer.Printer.print_win(self, False, number_of_tk, type_of_win=None, number=None, wheel=None)
            
      