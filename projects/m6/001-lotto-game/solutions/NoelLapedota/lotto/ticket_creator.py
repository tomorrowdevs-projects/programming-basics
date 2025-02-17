from lotto import type_bill
'''
creates the ticket with each element, 
takes care of the graphics, is ready to be printed
this is an example table:
+-------------------------------+----------+
|             Lotto             | Ticket 1 |
+-------------------------------+----------+
| terno on bari                            
|[28, 37, 73]                 3.0€             
+------------------------------------------+
'''

class Ticket:
    bill = []
    ticket = []

    def __init__(self, number_of_ticket, type, city, quantity_of_numbers, numbers_generator, amount):
        self.ticket_number = number_of_ticket
        self.type = type               
        self. city = city
        self.quantity = quantity_of_numbers
        self.n_g = numbers_generator    #number_generator
        self.amount = amount

    def ticket_graphic(self):

        #create printable ticket
        amount = type_bill.Type_bill.amount_played 
        ticket = ''
        ticket += '+-------------------------------+-----------------------+\n'\
            f'|             LOTTO             | Ticket {self.ticket_number}              |\n'\
             '+-------------------------------+-----------------------+\n| '\
            f'{self.type}'+f' on {self.city}'+f'\n|'\
            f'{self.n_g}' + f'          {amount}€'       +f'\n'\
             '+-------------------------------------------------------+' 
         # this is for obj    
        ticket_obj = Ticket( self.ticket_number, self.type, self.city, self.quantity, self.n_g, self.amount)
        self.ticket.append(ticket_obj)
        # this is for tiket_print
        self.bill.append(ticket) 
        return ticket
          

                  

    