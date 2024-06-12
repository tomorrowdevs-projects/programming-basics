import random

def main():
    ticket = []
    while len(ticket) < 6:
        number = random.randint(1,49)
        if number not in ticket:
            ticket.append(number)
    ticket.sort()
    print(ticket)
if __name__ == '__main__':
    main()