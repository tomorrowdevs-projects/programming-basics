# Day Old Bread
#
# A bakery sells loaves of bread for €3.49 each. 
# Day old bread is discounted by 60 percent. 
# Write a program that begins by reading the number of loaves of day old bread being purchased from the user. 
# Then your program should display the regular price for the bread, the discount because it is a day old, and the total price. 
# Each of these amounts should be displayed on its own line with an appropriate label. 
# All of the values should be displayed using two decimal places, 
# and the decimal points in all of the numbers should be aligned when reasonable values are entered by the user.

print('Hello USER, ')

day_old_bread = int(input('How much day old bread you want?'))
bread_price = 3.49
old_bread_price = bread_price / 100 * 60
discount = round(bread_price - old_bread_price, 2)
total_price_digit = round(day_old_bread * old_bread_price, 2)


# Regular bread price padding 
reg = 'Regular bread price: '
padding = ' ' * (70 - len(reg) - len(str(bread_price)))

print(f'{reg} {padding} {bread_price}$')


# Day old bread discount padding
d_old_discount = 'Buying old day bread you will save: '
format_discount = "{:.2f}".format(discount)
padding2 = ' ' * (70 - len(d_old_discount) - len(str(format_discount)))

print(f'{d_old_discount} {padding2} {format_discount}$')


# Total price padding
total_price = f'For {day_old_bread} day old bread you will pay: '
padding3 = ' ' * (70 - len(total_price) - len(str(total_price_digit)))

print(f'{total_price} {padding3} {total_price_digit}$')
