price_list = [4.95, 9.95, 14.95, 19.95, 24.95]

for price in price_list:
    discount = round(price * 0.60, 2)
    final_price = round(price - discount, 2)
    print(("-------------------------"))
    print(("The price is ${}") .format(price))
    print(("The discount is ${}") .format(discount))
    print(("THe final price is ${}") .format(final_price))
    print(("-------------------------"))