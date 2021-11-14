import random

def extraction():
    extraction_numbers = []
    while len(extraction_numbers) < 6:
        extraction_number = random.randint(1, 49)
        if extraction_number not in extraction_numbers:
            extraction_numbers.append(extraction_number)
    extraction_numbers.sort()
    return  extraction_numbers

def main(): 
    count = 1
    while True:
        ticket_numbers = extraction()
        extraction_numbers =  extraction()
        if sorted(ticket_numbers) == sorted(extraction_numbers):
            print(f"You win with {ticket_numbers}")
            print(f"It takes {count} extraction to win")
            break
        else:
            count += 1
    print(ticket_numbers)
    print(extraction_numbers)
       
if __name__ == "__main__":
    main()