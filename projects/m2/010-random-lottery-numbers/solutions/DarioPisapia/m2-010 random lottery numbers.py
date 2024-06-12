import random

def lottery_ticket():
    numbers = []
    while len(numbers) < 6:
        num = random.randint(1, 49)
        if num not in numbers:
            numbers.append(num)
    
    numbers = sorted(numbers)
    numbers = [str(n) for n in numbers]
    return " ".join(numbers)

if __name__ == "__main__":
    input("Press ENTER to generate your ticket!")
    print(lottery_ticket())
    print("Good luck!")
