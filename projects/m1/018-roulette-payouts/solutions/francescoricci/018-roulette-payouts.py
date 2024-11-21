#exercise m1/018 by francesco Ricci
#subset single number, even/odd, red vs Black, 1to18 vs 19 to 36
# should display only single subset if is drown 0 or 00
import random

def isEven(number):
    return True if ((number % 2) == 0) else False

def getColor(number):
    if number >0 and number <11 and not isEven(number):
        result = "Red"
    elif number > 10 and number < 19 and isEven(number):
        result = "Red"
    elif number > 18 and number < 29 and not isEven(number):
        result = "Red"
    elif  number > 28 and number < 37 and isEven(number):
        result = "Red"
    else:
        result = "Black"
    return result

def getRange(number):
    return '1 to 18' if 0 < number < 19 else '19 to 36'

draw_number = random.randint(0, 38)

print("\n```")

if 0 == draw_number:
    print(f" The spin resulted in {draw_number}...\n Pay {str(draw_number)}")
elif 37 == draw_number:
    print(f" The spin resulted in 00...\n Pay 00")
else:
    print(f" The spin resulted in {draw_number}...\n Pay {str(draw_number)}\n Pay {getColor(draw_number)}\n Pay {getRange(draw_number)}")

print("\n```")

#LOOP for test with hard code
# for draw_number in range(0,38):
#     print("-"*45)
#     if 0 == draw_number:
#         print(f" Pay {str(draw_number)}")
#     elif 37 == draw_number:
#         print(f" Pay 00")
#     else:
#         print(f" Pay {str(draw_number)}\n Pay {getColor(draw_number)}\n Pay {getRange(draw_number)}")
