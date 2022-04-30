from lotto import ticket_creator

class Printer:

# it prints the Ticket

    def print(self):
         for ticket  in ticket_creator.Ticket.bill:
          print(ticket)