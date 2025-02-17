from lotto import ticket_creator
from lotto import extraction

class Printer:
    def __init__(self):
        self == self


    #it prints the Ticket
    def print(self):
         for ticket  in ticket_creator.Ticket.bill:
          print(ticket)


    #it prints  Extraction
    def print_extraction(self):
        print()
        for city, numbers in extraction.Extraction.extraction.items():
                 print(city, numbers)
        print()         
                 
     #shows on the screen if the ticket is winning or not      
    def print_win(self, status, number_of_tk, type_of_win, number, wheel):
        if status == True:
           print(f'Ticket n° {number_of_tk} is winning')
           print(f'{type_of_win} {number} on {wheel}')
           print()
           
        else:                  
            print(f'Ticket n° {number_of_tk} is  NOT  winning') 
            print()      
                
         
    #shows the winning amount on the screen
    def prize(self, win):
        print(f'Win : {win}')       