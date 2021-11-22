price_before = [4.95, 9.95, 14.95, 19.95, 24.95]
price_after = []
for x in price_before:
    value = x * 0.4
    price_after.append(value)
print('Full price\tDiscount\tDiscounted List')
column_size = 3
for i, value1, value2 in zip(range(10), price_before, price_after):
    print(str(value1).center(column_size),
        '\t\t', ('60%').center(column_size),
        '\t\t', ("%.2f" %value2).center(column_size))
