loaves = int(input("How many day old bread loaves would you like to buy? "))
regular_price = 3.49
discount = 0.6
price_discountfree = (loaves * regular_price)
total_discount = price_discountfree * discount
total_price = price_discountfree - total_discount

print("{:>15} {:>7.2f}{}".format("Regular price",price_discountfree,"$"))
print("{:>15} {:>7.2f}{}".format("Discount",total_discount,"$"))
print("{:>15} {:>7.2f}{}".format("Total price",total_price,"$"))

