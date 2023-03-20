#The program write the number of loaves of day old bread being purchased from the user
# display the regular price for the bread, the discount because it is a day old, and the total price.

pieces=int(input("Number of loaves day old bread "))
original_price=(pieces*3.49)
discounted=(original_price*60)/100
discounted_price=original_price-discounted
total_price=original_price+discounted_price

print("price of bread", format(original_price,'.2f'))
print("price of discount", format(discounted_price,'.2f'))
print("total price:", format(total_price,'.2f'))