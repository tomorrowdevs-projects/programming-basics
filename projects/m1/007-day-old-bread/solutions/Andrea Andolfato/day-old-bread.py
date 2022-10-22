
loaves = int(input("Please insert the number of loaves"))
hot_bread = float(3.49 * loaves)
old_bread = float (3.49*0.60*loaves)
total_price = (hot_bread + old_bread)
total_discount = (hot_bread - old_bread)
print("Total price rounded to 2 decimal places: ", round(total_price))
print("Total discount rounded to 2 decimal places: ", round(total_discount))
