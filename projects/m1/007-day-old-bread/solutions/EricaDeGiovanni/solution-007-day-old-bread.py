#DAY OLD BREAD

#read from the user the number of loaves of day old bread.
loaves = int(input('Insert the number of old bread purchased: '))

regular_price = 3.49 * loaves
discount = (3.49 * 0.6 ) * loaves
total_price = regular_price - discount

#display: regular price, the discount because it is a day old, total price.
#each amount in one line, with two decimal digits aligned.

print('Regular price:'.ljust(15), f'{round(regular_price, 2)}€')
print('Discount:'.ljust(15) , f'{round(discount, 2)}€')
print('Total price:'.ljust(15), f'{round(total_price, 2)}€')

