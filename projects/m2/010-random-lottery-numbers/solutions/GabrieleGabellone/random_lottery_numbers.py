from random import *

def ticket_generator():
    lottery_ticket = []
    while len(lottery_ticket) < 6:
        number = randint(1,49)
        if number not in lottery_ticket:
            lottery_ticket.append(number)
    lottery_ticket.sort()
    return lottery_ticket

def main():
    drawn_numbers = ticket_generator()
    print("Ticket generated:", drawn_numbers)

if __name__ == "__main__":
    main()