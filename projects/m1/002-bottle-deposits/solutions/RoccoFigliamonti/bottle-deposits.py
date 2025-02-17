

total_bottles_number = int(input("How many bottles do you want to deposit? "))
big_bottles_number = int(input("How many of them are bigger than one liter? "))
small_bottles_number = total_bottles_number - big_bottles_number

total_refund = format(small_bottles_number*0.1 + big_bottles_number*0.25, ".2f")
print(f"Your total refund is {total_refund} $" )