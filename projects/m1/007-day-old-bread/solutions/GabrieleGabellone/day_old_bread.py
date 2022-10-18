#Day-old-bread

loaves = int(input("Enter the number of the loaves: "))
regular_price = 3.49 * loaves
discount = regular_price/100*60
total_price = regular_price - discount
regular_price = "{:.2f}".format (regular_price)
discount = "{:.2f}".format (discount)
total_price = "{:.2f}".format (total_price)
print ("The regular price of bread is: €", regular_price)
print ("You have a discount of €", discount, "because it is one day old")
print ("So, the total price is €", total_price)