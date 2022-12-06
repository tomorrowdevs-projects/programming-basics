loaves = (int(input("How many loaves of day old bread are you purchasing? ")))

price = loaves * 3.49
discount = price * 0.6    #60% discount
final_price = price - discount

print(("The price is {:.2f} €") .format(price))
print(("You will receive a discount of {:.2f} €") .format(discount))
print(("The final price is {:.2f} €") .format(final_price))