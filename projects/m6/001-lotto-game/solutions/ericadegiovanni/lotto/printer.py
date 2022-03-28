from lotto.prizes import Prizes
from .lotto import Lotto

'''
Print the ticket with nice ascii art table decoration.
print the extraction table and the victory

example:
+-------------------------------+----------+
|             LOTTO             | Ticket 5 |
+-------------------------------+----------+
| Wheel: Milano                            |
| 22 55 66 45 34 23 67 34 56 45            |
| (Giocata: 12,50)                         |
+-------------------------------+----------+

'''
class Printer:

    def print_ticket(ticket) -> str:

        numbers = ''
        # find bet and city line length
        line1 = len(f'| Wheel: {ticket.city}')
        
        # find the numbers line length
        for n in ticket.nums: numbers += f'{n} '   
        line2 = len(f'| {numbers}')

        #add bets
        line3 = ''
        for b in ticket.bets_list:
            line = f'| {b.bet_type.capitalize()}: {b.money:.2f}€'
            line_len = len(line)
            
            line3 += f'{line}{"|".rjust(44 - line_len )}\n'
        
        
        #create printable ticket
        res = ''
        res += '+-------------------------------+----------+\n'\
            f'|             LOTTO             | Ticket {ticket.ticket_number} |\n'\
             '+-------------------------------+----------+\n| '\
            f'Wheel: {ticket.city.capitalize()}{"|".rjust(44 - line1 )}\n| '\
            f'{numbers}{"|".rjust(44 - line2 )}\n{line3}'\
             '+------------------------------------------+'  
        return res               

    
    def print_all_tickets():   
        for ticket in Lotto.all_tickets:
            print(Printer.print_ticket(ticket))


    def print_extraction(extraction):

        """Print the extraction table"""

        extr = Lotto.extraction
        city_column_len = max([len(city) for city in extr.extraction.keys()])

        table = '\nEXTRACTION:\n+------------------------------+\n'  
        for city, n_extr in extr.extraction.items():
            r_city = city.capitalize().rjust(city_column_len)
            
            table += f'| {r_city} '
            for n in n_extr: table += f' {n:02d} '
            table += '|\n'

        table += '+------------------------------+\n'  
        
        print(table)
        

    def print_winning_tickets():

        """ Print the winning ticket and a message containing the amount of the victory"""
        
        print('Results:')
              
        for tk in Lotto.all_tickets:

            print(tk.victory)
            if tk.victory:

                print(f'\n- TICKET {tk.ticket_number} WINS - ')
                print(Printer.print_ticket(tk))

                print(f'Gross prize: {tk.prize_gross:.2f}€')
                print(f'Net prize: {tk.prize_net:.2f}€')
                
            else:
                print(f'- Ticket {tk.ticket_number} lost :( -')

              
        
        
    
   
