# ask to user number of day old 
loaves = int(input("Type the number of day old bread's loaves: "))
# compute regular price
price_regular = round(3.49 * loaves, 2)
# compute discount
discount = round(price_regular * 60 / 100, 2)
# compute the real price
total_price = round(price_regular - discount, 2)
# print results on screen
print("The price is:\n" + str(total_price))
print("The regular price would be:\n" + str(price_regular))
print("The discount for day-old bread is:\n" + str(discount))

