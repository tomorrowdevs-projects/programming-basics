#show the original prices and the prices after the discount has been applied. 
original_prices = [4.95, 9.95, 14.95, 19.95, 24.95]

for i in original_prices:
    discount = round(i * 0.6, 2)
    new_price = round(i - discount, 2)
    print(f'Original Price: {i:5}$   Discount: {discount:5}$   New Price: {new_price:5}$')

