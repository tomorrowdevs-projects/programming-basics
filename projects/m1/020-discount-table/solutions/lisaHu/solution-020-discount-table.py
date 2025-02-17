discountPrice = [4.95, 9.95, 14.95, 19.95, 24.95]

while(True):
    print('Price    Discount 60%   Sale price')
    for price in discountPrice:
        discount = price * 0.6
        salePrice = price - discount
        print(str(price) + '         ' + str(round(discount, 2)) + '         ' + str(round(salePrice, 2)))
    break
