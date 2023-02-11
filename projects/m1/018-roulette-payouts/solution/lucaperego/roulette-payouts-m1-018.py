

# Starting with Enter

input("This is a Bot's Roulette - press ENTER to play ---> ")

#------------------------------------------------------------------

# 3 Dictionaries for ensamble Numbers & Colors

numbers_black = {1: "black", 3: "black", 5: "black", 7:  "black", 9: "black", 12:"black" , 14:"black" , 16: "black", 18: "black", 19: "black", 21: "black", 23: "black", 25: "black", 27: "black", 30: "black", 32: "black", 34: "black", 36: "black"}

numbers_red = {2: "red", 4: "red", 6: "red", 8: "red", 10: "red", 11: "red", 13: "red", 15: "red", 17: "red", 20: "red", 22: "red", 24: "red", 26: "red", 28: "red", 29: "red", 31: "red", 33: "red", 35:"red"}

numbers_green = {0: "green", 00: "green"}


#-----------------------------------------------------------------


import random

# alternative by creating a numbers list

# draw_elements_more_ethic_version_with_no_trick = [00, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

# print(random.choice(draw_elements))


draw_elements = list(range(0, 37))


#-----------------------------------------------------------------

# printing a single Winning Number + a trick, where 37 stands for "00"

winning_number = random.choice(draw_elements)

if winning_number != 37:
    print(f"Pay: {winning_number}")
else:
    print(f"Pay: 00")
    
#------------------------------------------------------------------
    
# printing the winning Color, playing with Dictionaries-keys

black_elements = numbers_black.keys()

red_elements = numbers_red.keys()


if winning_number in black_elements:
    print("Pay: black")

elif winning_number in red_elements:
    print("Pay: red")

else:
    print("Pay: green")
    
#-------------------------------------------------------------------

# Deciding: Odd or Even ---> but Remember: 0 and 00 (aka 37!) must be escluded by this payment round!

if (random.choice(draw_elements) != 0 or random.choice(draw_elements) != 37) and random.choice(draw_elements)%2 == 0:
    print(f"Pay: even")
else:
    print(f"Pay: odd")
    
#-------------------------------------------------------------------
    
# Deciding: Major or Minior elements-List?

if 0<winning_number<19:
    print(f"Pay: 1 to 18")

elif 18<winning_number<37:
    print(f"Pay: 19 to 36")

elif winning_number == 0:
    print(f"Pay: 0")

else:
    print(f"Pay: 00")
    
#----------------------------------------------------------------------