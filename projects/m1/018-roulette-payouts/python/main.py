import random


a = str(random.randint(0, 3))
b = str(random.randint(0, 6))

spin_result_str = a + b
spin_result_int=int(spin_result_str)


def is_even(number):
    if number % 2 == 0:
        return True
    else:
        return False

def black_or_red(number):
    if (1<=number<=10) or (19<=number<=28):
        if is_even(number):
            space_color = "Black"
        else:
            space_color = "Red"

    elif (11<=number<=18) or (29<=number<=36):
        if is_even(number):
            space_color = "Red"
        else:
            space_color = "Black"
    return space_color

def number_range(number):
    if 1 <= number <= 18:
        return "1 to 18"
    else:
        return "19 to 36"

print("----")
print("The spin resulted in {}...".format(spin_result_str))
print("----")
print("Pay {}".format(spin_result_str))

if spin_result_int != 0:
    print("Pay {}".format(black_or_red(spin_result_int)))
    if is_even(spin_result_int):
        print("Pay Even")
    else:
        print("Pay Odd")
    print("Pay {}".format(number_range(spin_result_int)))
    
print("----")


