recycled_big = input('How many bottles that hold one liter or less do you have?')
recycled_little = input('how many bottles that hold more than a liter do you have?')

big_ones = float(recycled_big)
little_ones = float(recycled_little)

def refund(recycled_big, recycled_little):
    big = big_ones * 0.25
    little = little_ones * 0.10
    return round(big * little, 2)

print("if you will refund this containers you'll get " + str(refund(recycled_big, recycled_big)) +" $")