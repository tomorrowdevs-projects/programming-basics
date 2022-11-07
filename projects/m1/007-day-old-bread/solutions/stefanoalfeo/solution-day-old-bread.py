loves_of_bread = int(input("Insert number of new loves of bread\n"))
old_loves_of_bread = int(input("Insert number of old loves of bread\n"))
price_new = 3.49
price_old = round((3.49 / 100) * 60, 2)
total_price_new = loves_of_bread * price_new
total_price_old = old_loves_of_bread * price_old
total_price_discounted = round(total_price_new + total_price_old, 2)
total_price_standard = round((loves_of_bread + old_loves_of_bread) * price_new, 2)

print("Standard price loaves of bread: " + str(price_new) + "$")
print("discount on price old loaves of bread: " + str(price_old) + "$")
print("new loaves of bread: " + str(loves_of_bread))
print("old loaves of bread: " + str(old_loves_of_bread))
print("total loaves of bread: " + str(loves_of_bread + old_loves_of_bread))
print("total price: " + str(total_price_standard) + "$")
print("total price discounted: " + str(total_price_discounted) + "$")




