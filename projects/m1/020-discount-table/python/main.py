
header = "Original Price   Discount amount   New Price"
separator = "-" * len(header)

print(f'{header}\n{separator}')

original_price = [4.95, 9.95, 14.95, 19.95, 24.95]

for price in original_price:
    discount_amount = price * 0.6
    new_price = price - discount_amount 

    print(f'${price:<15.2f}${discount_amount:<17.2f}${new_price:.2f}')