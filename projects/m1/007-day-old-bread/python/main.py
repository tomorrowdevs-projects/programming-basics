laoves_of_bread = (int(input('How many laoves of old days are you purcharsed?')))

full_price = laoves_of_bread * 3.49

discounts = full_price *60/100

final_price = full_price - discounts

print('the full price is {:.2f} $' .format(full_price))

print('today are going to get a discounts for {:.2f} $' .format(discounts))

print('the effective price is {:.2f} $' .format(final_price))