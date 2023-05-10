shop_prices = [4.95, 9.95, 14.95, 19.95, 24.95]
print("PRICE    DISCOUNT   FINAL PRICE")
for price in shop_prices:
    discount = 0.60 * price
    new_price = 0.40 * price
    print(f"{price:5.2f}$  {discount:6.2f}$      {new_price:3.2f}$ ")