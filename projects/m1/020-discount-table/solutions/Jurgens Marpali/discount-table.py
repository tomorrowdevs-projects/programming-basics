print("This table will show you, considering th eitem you picked, the original price, the discount and the current price that you will pay")

price = [4.95, 9.95, 14.95, 19.95, 24.95] 

for x in price:
    discount = (x * 60) / 100
    saved = x - discount
    print(f"The original price was {x}$, the discount is {discount}$, the new price is ", "%.2f" % saved, "$")



