import random

def ticket():
    ticket_numbers = []
    while len(ticket_numbers) < 6:
        num = random.randint(1, 49)
        if num in ticket_numbers:
            continue
        else:
            ticket_numbers.append(num)
    ticket_numbers.sort()
    return ticket_numbers

def lottery():
    extraction_numbers = []
    while len(extraction_numbers) < 6:
        num = random.randint(1, 49)
        if num in extraction_numbers:
            continue
        else:
            extraction_numbers.append(num)
    extraction_numbers.sort()
    return extraction_numbers

if __name__ == "__main__":
    count = 0
    while True:
        if lottery() != ticket():
            count += 1
        else:
            print(f"It takes {count} extraction to win")
            break

#Made two extraction: 
# 1--> "It takes 9850927 extraction to win" in 78.734 seconds
# 2--> "It takes 47429413 extraction to win" in 387.301 seconds
