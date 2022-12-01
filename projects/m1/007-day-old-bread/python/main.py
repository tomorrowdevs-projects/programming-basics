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