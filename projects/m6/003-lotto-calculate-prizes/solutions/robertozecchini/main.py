import lotto_ticket
import fake_extraction
from unittest import main
from input import input_from_list
from input import input_int

def lotto():
    print("This program will generate lotto tickets.")
    num_tickets = -1
    tickets_list = []
    winning_tickets = []
    extraction = fake_extraction.Extraction()
    num_tickets = input_int("How many tickets do you want (1-5; 0 to exit)?", min=0, max=5)
    if num_tickets == 0:
        exit()
    for n in range(num_tickets):
        print(f"Ticket number {n}")
        ticket_type, ticket_type_txt = input_from_list(list(lotto_ticket.Ticket.bills), "Which type of bill do you want?")
        ticket_city, ticket_city_txt = input_from_list(lotto_ticket.Ticket.cities, "Which city do you want?")
        ticket_money = input_int("How much euros do you want to bet on this ticket (1€-200€)?", min=1, max=200)
        min_numbers = lotto_ticket.Ticket.bills[ticket_type_txt]
        ticket_numbers = input_int("How many numbers do you want (1-10 but the minimum is depending from your bill)?", min=min_numbers, max=10)
        t = lotto_ticket.Ticket(ticket_type_txt, ticket_city_txt, ticket_numbers, ticket_money)
        tickets_list.append(t)
    for t in tickets_list:
        print(t)
    print("Extraction results:")
    print(extraction)
    for t in tickets_list:
        if t.isWinning(extraction):
            winning_tickets.append(t)
    if len(winning_tickets) == 0:
        print("I'm sorry, no money for you.")
    elif len(winning_tickets) == 1:
        print(f"Many compliments, you have a winning ticket:")
        print(winning_tickets[0])
        gross, net = t.winningAmount(extraction)
        print(f"You win {gross:.2f}€ ({net:.2f}€ net of taxes)")
    else:
        print(f"Many compliments, you have {len(winning_tickets)} winning tickets.")
        for t in winning_tickets:
            print(t)

# Run unit tests automatically
main(module='test_module', exit=False)
lotto()