price = [4.95, 9.95, 14.95, 19.95, 24.95]

for i in price:
    discount = (i * 60) / 100
    discounted_price = i - discount
    print(f"The original price was {i} $, the discount is 60% equal to ({discount} $) and the discounted price is {round(discounted_price, 2)} $")