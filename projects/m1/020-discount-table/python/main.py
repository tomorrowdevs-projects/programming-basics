import numpy as np

for i in np.arange(4.95,29.95,5):
    discount = (round(i,2) * 60) / 100
    discounted_price = round((round(i,2) - (round(i,2) * 60) / 100),2)
    print(f'The original price was {round(i,2)}, the discount is 60%, equal to {discount} and the new price is {discounted_price }')