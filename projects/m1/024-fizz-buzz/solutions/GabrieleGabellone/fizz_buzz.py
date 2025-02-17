# Fizz-Buzz
# this program displays the answers for the first 100 numbers in the Fizz-Buzz game
# if the player's number is divisible by 3, fizz is displayed instead of its number
# if the player's number is divisible by 5, buzz is displayed instead of its number
# for number divisible by both 3 and 5, fizz-buzz is displayed
n = 1
while n < 101:
    if (n % 3 == 0) and (n % 5 == 0): print("fizz-buzz")
    elif n % 3 == 0: print("fizz")
    elif n % 5 == 0: print("buzz")
    else: print(n)
    n += 1