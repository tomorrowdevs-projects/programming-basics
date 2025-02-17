#Roulette Payouts
#this program simulates a spin of a roulette wheel using a random number generator.
#display the number that was selected and all of the bets that must be payed.
import random
red_spaces = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36] 
selected_number = random.randrange(0, 38)
if selected_number == 37: selected_number = "00"
print("The spin resulted in", selected_number)
print("Pay", selected_number)
if selected_number != 0 and selected_number != "00":
    if selected_number in red_spaces: print("Pay Red")
    else: print ("Pay Black")
    if selected_number % 2 == 0: print ("Pay Even")
    else: print ("Pay Odd")
    if 1 <= selected_number <= 18: print("Pay 1 to 18")
    else: print("Pay 19 to 36")