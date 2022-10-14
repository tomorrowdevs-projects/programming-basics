import random

def random_lottery():
    winning_ticket = []
    list_number = []
    for number in range(1, 50):
        list_number.append(number)  

    while len(winning_ticket) < 7:
        winning_number = random.choice(list_number)
        winning_ticket.append(winning_number)
        list_number.remove(winning_number)

    return winning_ticket

