
loaves = int(input("Please insert the number of loaves"))
hot_bread = float(3.49 * loaves)
old_bread = float (3.49*0.60*loaves)
total_price = round(hot_bread + old_bread)
total_discount = round(hot_bread - old_bread)
print(total_price)
print(total_discount)
