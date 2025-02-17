price = 4.95

for i in range(1,6):
    discount = round((price * 60) / 100, 2)
    discounted_price = round((price - discount),2)
    print(f'The original price was {price} $, the discount is 60%, equal to {discount} % and the new price is {discounted_price } $')
    price = price + 5.0