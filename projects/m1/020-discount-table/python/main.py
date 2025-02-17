# Collect the price
price_list = [4.95, 9.95, 14.95, 19.95, 24.95]

# Format the table
title_1 = 'Original price'
title_2 = 'Discount amount'
title_3 = 'New price'

row_1 = title_1 + ' ' * (20 - len(title_1))
row_2 = title_2 + ' ' * (20 - len(title_2))
row_3 = title_3 + ' ' * (20 - len(title_3))

print(f'{row_1} {row_2} {row_3}')

# For loop with operation and pseudo-formatting
index = 0
for i in price_list:
    discount_amount = round(price_list[index] / 100 * 60, 2)
    new_price = round(price_list[index] - discount_amount, 2)
    print(f'${price_list[index]}', ' ' * (21 - len(price_list)),  f'${discount_amount}', ' ' * (21 - len(price_list)), f'${new_price}')
    index += 1