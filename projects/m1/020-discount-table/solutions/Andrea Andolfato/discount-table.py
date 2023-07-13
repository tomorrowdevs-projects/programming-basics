
prices = (4.95, 9.95, 14.95, 19.95, 24.95)
for price in prices:
    print("Original price is: ", "${:.2f}".format(price))
    discount = (price/100) * 60
    print("Discount is", "${:.2f}".format(discount))
    discounted_price = price - discount
    print("Discounted price is", "${:.2f}".format(discounted_price))