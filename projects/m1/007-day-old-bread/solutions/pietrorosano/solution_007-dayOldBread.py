# A bakery sells loaves of bread for €3.49 each. Day old bread is discounted by 60 percent. Write a program that begins by reading the number of loaves of day old bread being purchased from the user. Then your program should display the regular price for the bread, the discount because it is a day old, and the total price. Each of these amounts should be displayed on its own line with an appropriate label. All of the values should be displayed using two decimal places, and the decimal points in all of the numbers should be aligned when reasonable values are entered by the user.
print("\nHow many loaves of bread do you want?")
loaves = int(input())
price = float(format((loaves * 3.49), ".2f"))
discount_price = float(format((price - (price / 100 * 60)), ".2f"))
print("\nPrice: 3.49€")
print("total: " + str(price) + "€")
print("\nDiscount: 60%")
print("new total: " + str(discount_price) + "€")
