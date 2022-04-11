import lotto_ticket
from unittest import main
from input import input_from_list
from input import input_int

print("This program will generate lotto tickets.")
num_tickets = -1
tickets_list = []
num_tickets = input_int("How many tickets do you want (1-5; 0 to exit)?", min=0, max=5)
if num_tickets == 0:
    exit()
for n in range(num_tickets):
    print(f"Ticket number {n}")
    ticket_type, ticket_type_txt = input_from_list(lotto_ticket.Ticket.types, "Which type of bill do you want?")
    ticket_city, ticket_city_txt = input_from_list(lotto_ticket.Ticket.cities, "Which city do you want?")
    if ticket_type_txt == "Ambata":
        min_numbers = 1
    elif ticket_type_txt == "Ambo":
        min_numbers = 2
    elif ticket_type_txt == "Terna":
        min_numbers = 3
    elif ticket_type_txt == "Quaterna":
        min_numbers = 4
    elif ticket_type_txt == "Cinquina":
        min_numbers = 5
    else:
        min_numbers = 1
    ticket_numbers = input_int("How many numbers do you want (1-10 but the minimum is depending from your bill)?", min=min_numbers, max=10)
    t = lotto_ticket.Ticket(ticket_type_txt, ticket_city_txt, ticket_numbers)
    tickets_list.append(t)
for t in tickets_list:
    print(t)

# Run unit tests automatically
main(module='test_module', exit=False)