"""A particular retailer is having a 60 percent off sale on a variety of discontinued products. 
The retailer would like to help its customers determine the reduced price of the merchandise 
by having a printed discount table on the shelf that shows the original prices and the prices after the discount has been applied. 

Write a program that uses a loop to generate this table, showing the original price, the discount amount, and the new price 
for purchases of $4.95, $9.95, $14.95, $19.95 and $24.95. 
Ensure that the discount amounts and the new prices are rounded to 2 decimal places when they are displayed.
"""

price_list = [4.95, 9.95, 14.95, 19.95, 24.95]

index = 0

title_1 = 'Original price'
title_2 = 'Discount amount'
title_3 = 'New price'

row_1 = title_1 + ' ' * (20 - len(title_1))
row_2 = title_2 + ' ' * (20 - len(title_2))
row_3 = title_3 + ' ' * (20 - len(title_3))

print(f'{row_1} {row_2} {row_3}')

for i in price_list:
    discount_amount = round(price_list[index] / 100 * 60, 2)
    new_price = round(price_list[index] - discount_amount, 2)
    print(f'${price_list[index]}', ' ' * (21 - len(price_list)),  f'${discount_amount}', ' ' * (21 - len(price_list)), f'${new_price}')
    index += 1