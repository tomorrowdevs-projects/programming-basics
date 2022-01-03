# A bakery sells loaves of bread for €3.49 each. 
# Day old bread is discounted by 60 percent. 
# Write a program that begins by reading the number of loaves of day old bread being purchased from the user. 
# Then your program should display the regular price for the bread,
# the discount because it is a day old, and the total price.
# Each of these amounts should be displayed on its own line with an appropriate label. 
# All of the values should be displayed using two decimal places, 
# and the decimal points in all of the numbers should be aligned when reasonable values are entered by the user.

loaves = int(input("Number of loaves purchased: "))


def price(loaves):
    start = float(int(loaves)*3.49)
    disc = float((start*6)/10)
    final = start-disc
    print("full price: " + format(start, '4.2f')+ "€")
    print("discount: " + format(disc, '7.2f')+ "€")
    print("final price: " + format(final, '3.2f') + "€")


price(loaves)
