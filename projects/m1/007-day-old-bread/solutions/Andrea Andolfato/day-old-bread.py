
hot bread = float(3.49 * loaves)
old bread = float (3.49*0,60*loaves)
total price = (hot bread + old bread)
total discount = (hot bread - old bread)
print('Total price:'.ljust(15), f'{round(total_price, 2)}€')
print('Totaldiscount:'.ljust(15) , f'{round(discount, 2)}€')