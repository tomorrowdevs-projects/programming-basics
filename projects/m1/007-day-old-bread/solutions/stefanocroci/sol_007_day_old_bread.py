# Ask to insert number of loaves of day old bread being purchased from the user
day_old_breads = int(input('insert number of day old bread loaves purchased: '))

# Calculate reg. price, discount, and tot. price
reg_price = day_old_breads * 3.49
discount = round(reg_price * 60 / 100, 2)
tot_price = reg_price - discount

# Format the results:
# Truncate reg_price to two decimal digits
reg_price = "{:.2f}".format(reg_price)
# Calculate number of digits of reg_price plus the point
reg_price_int_digits = len(reg_price)
# Format discount and tot_price to have two decimal digits and to be aligned with reg_price
format_align = '{:' + str(reg_price_int_digits) + '.2f}'
discount = format_align.format(discount)
tot_price = format_align.format(tot_price)

# Display the results
print('Regular price: ' + str(reg_price) + '€')
print('Discount:      ' + str(discount) + '€')
print('Total price:   ' + str(tot_price) + '€')



