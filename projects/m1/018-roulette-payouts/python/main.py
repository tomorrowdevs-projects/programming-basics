import random 

red_numbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
black_numbers = list(set(range(1, 37)).difference(set(red_numbers)))
green_numbers = [0, 00]

spin_result = random.choice(red_numbers + black_numbers + green_numbers)

print(f"The spin resulted in {spin_result} . . .")

if spin_result in red_numbers:
    print("Pay Red")
elif spin_result in black_numbers:
    print("Play Black")

if spin_result % 2 == 0 and spin_result != 0 and spin_result != 00:
    print("Pay Even")
elif spin_result % 2 == 1 and spin_result != 0 and spin_result != 00:
    print("Pay Odd")

if spin_result >= 1 and spin_result <= 18:
    print("Pay 1 to 18")
elif spin_result >= 19 and spin_result <= 36:
    print("Pay 19 to 36")

if spin_result in range(1, 37):
    print(f"Pay {spin_result}") 
elif spin_result in green_numbers:
    print(f"Pay {spin_result}")