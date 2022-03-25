from .lotto import Lotto

'''
Print the ticket with nice ascii art table decoration.
Pint the extraction table

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
            #f'{ticket.bet_type.capitalize()} on {ticket.city.capitalize()}{"|".rjust(44 - line1 )}\n| '\

    
    def print_all_tickets():   
        for ticket in Lotto.all_tickets:
            print(Printer.print_ticket(ticket))


    def print_extraction(extraction):

        # Create the extraction table

        extr = Lotto.extraction
        city_column_len = max([len(city) for city in extr.keys()])

        table = '\nEXTRACTION:\n+------------------------------+\n'  
        for city, n_extr in extr.items():
            r_city = city.capitalize().rjust(city_column_len)
            
            table += f'| {r_city} '
            for n in n_extr: table += f' {n:02d} '
            table += '|\n'

        table += '+------------------------------+\n'  
        
        print(table)
        

    def print_winning_tickets():

        """ Print the winning ticket and a message countaining the name of the city"""
        
        print('Results:')
              
        for tk in Lotto.all_tickets:


            print(tk.victory)
            if tk.victory:

                print(f'\n- TICKET {tk.ticket_number} WINS - ')
                print(Printer.print_ticket(tk))

                for _ in tk.victory:
                    print(f'Gross prize: {tk.prize:.2f}€')
                    print(f'Net prize: {Lotto.calc_net_prize(tk.prize):.2f}€')
            else:
                print(f'- Ticket {tk.ticket_number} lost :( -')

              
        
        
    
   
