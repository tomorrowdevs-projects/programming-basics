class BillPrinter:

    def print_tickets(self, tickets):
        for ticket in tickets:
            print(f"------------------ Ticket n°{ticket.bill_num+1} -----------------")
            print(f"TIPO GIOCATA: {ticket.type}")
            print(f"RUOTA: {ticket.city}")
            print(f"NUMERI GIOCATI: ", *ticket.numbers)
            print("-----------------------------------------------")