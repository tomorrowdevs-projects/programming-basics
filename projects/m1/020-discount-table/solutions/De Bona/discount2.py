"""the program generate the table showing the original price, the discount amount,
and the new price for purchases of $4.95, $9.95, $14.95, $19.95 and $24.95."""

price_of_product = (4.95, 9.95, 14.95, 19.95, 24.95)
for i in price_of_product:
    print (f'{i:8.2f} '
           f'{i*60/100:8.2f}  '
           f'{i-0.6*i:8.2f}')