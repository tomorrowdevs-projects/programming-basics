'''
creates the ticket with each element, 
takes care of the graphics, is ready to be printed
this is an example table:
+-------------------------------+----------+
|             lotto             | ticket 1 |
+-------------------------------+----------+
| terno on bari                            
|[28, 37, 73]                              
+------------------------------------------+
'''

class Ticket:
    bill = []

    def __init__(self, number_of_ticket, type, city, quantity_of_numbers, numbers_generetor):
        self.ticket_number = number_of_ticket
        self.type = type               
        self. city = city
        self.quantity = quantity_of_numbers
        self.n_g = numbers_generetor    #number_generetor

    def ticket_graphic(self):

        #create printable ticket
        ticket = ''
        ticket += '+-------------------------------+----------+\n'\
            f'|             LOTTO             | Ticket {self.ticket_number} |\n'\
             '+-------------------------------+----------+\n| '\
            f'{self.type}'.capitalize()+f' on {self.city}'.capitalize()+f'\n|'\
            f'{self.n_g}'+f'\n'\
             '+------------------------------------------+' 
        
        Ticket.bill.append(ticket)  
        return ticket
          

                  

    