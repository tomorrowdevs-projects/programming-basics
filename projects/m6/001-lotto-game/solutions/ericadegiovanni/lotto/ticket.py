'''
A ticket object with all the informations inserted by the user (bill_type, nums, city).
Print the ticket with nice ascii art table decoration.
Return a dict with the ticket informations with ticket_info()

example:
+-------------------------------+----------+
|             LOTTO             | Ticket 5 |
+-------------------------------+----------+
| Cinquina on Milano                       |
| 22 55 66 45 34 23 67 34 56 45            |
| (Giocata: 12,50)                         |
+-------------------------------+----------+

'''

class Ticket:
    
    def __init__(self, bet_type, nums: list, city, ticket_number):
        self.bet_type = bet_type
        self.nums = nums
        self.city = city
        self.ticket_number = ticket_number
        
    def create_printable_ticket(self) -> str:

        numbers = ''
        # find bet and city line length
        line1 = len(f'| {self.bet_type} on {self.city}')
        
        # find the numbers line length
        for n in self.nums: numbers += f'{n} '   
        line2 = len(f'| {numbers}')
        
        #create printable ticket
        res = ''
        res += '+-------------------------------+----------+\n'\
            f'|             LOTTO             | Ticket {self.ticket_number} |\n'\
             '+-------------------------------+----------+\n| '\
            f'{self.bet_type.capitalize()} on {self.city.capitalize()}{"|".rjust(44 - line1 )}\n| '\
            f'{numbers}{"|".rjust(44 - line2 )}\n'\
             '+------------------------------------------+'  
        return res               

    def __str__(self) -> str:
        return self.create_printable_ticket()
    
    
    def ticket_info(self) -> dict:
        return {'bet': self.bet_type,
                'numbers': self.nums, 
                'city': self.city,
                'ticket N': self.ticket_number}
    

    
        
        


