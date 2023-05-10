from random import randint

number = int(randint(0,37))
if number == 37:
    number = "00"
    print(f"The spin resulted in {number}...\n"
      f"Pay {number}")

if number == 0:
    print(f"The spin resulted in {number}...\n"
    f"Pay {number}")
def color():
    red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
    if number in red:
        return "red"
    else:
        return "black"
def odd_even():
    if number % 2 == 0:
        return "even"
    else:
        return "odd"

def n_to_n():
    if number < 19:
        return "1 to 18"
    else:
        return "19 to 36"

print(f"The spin resulted in {number}...\n"
      f"Pay {number}\n"
      f"Pay {color()}\n"
      f"Pay {odd_even()}\n"
      f"Pay {n_to_n()}")


