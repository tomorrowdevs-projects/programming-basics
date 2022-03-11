from .lotto import Lotto

'''
Print the ticket with nice ascii art table decoration.

example:
+-------------------------------+----------+
|             LOTTO             | Ticket 5 |
+-------------------------------+----------+
| Cinquina on Milano                       |
| 22 55 66 45 34 23 67 34 56 45            |
| (Giocata: 12,50)                         |
+-------------------------------+----------+

'''
class Printer:

    def print_ticket(ticket) -> str:

        numbers = ''
        # find bet and city line length
        line1 = len(f'| {ticket.bet_type} on {ticket.city}')
        
        # find the numbers line length
        for n in ticket.nums: numbers += f'{n} '   
        line2 = len(f'| {numbers}')
        
        #create printable ticket
        res = ''
        res += '+-------------------------------+----------+\n'\
            f'|             LOTTO             | Ticket {ticket.ticket_number} |\n'\
             '+-------------------------------+----------+\n| '\
            f'{ticket.bet_type.capitalize()} on {ticket.city.capitalize()}{"|".rjust(44 - line1 )}\n| '\
            f'{numbers}{"|".rjust(44 - line2 )}\n'\
             '+------------------------------------------+'  
        return res               

    
    def print_all_tickets():   
        for ticket in Lotto.all_tickets:
            print(Printer.print_ticket(ticket))

