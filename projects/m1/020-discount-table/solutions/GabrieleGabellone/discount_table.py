#discount table
original_price = [4.95, 9.95, 14.95, 19.95, 24.95]
index = 0
while index < len(original_price):
    discount_amount = (original_price[index] * 60) / 100
    new_price= original_price[index] - discount_amount
    print("Original price: ", original_price[index])
    print("Discount amount: {:.2f}".format(discount_amount))
    print("New price: {:.2f}\n".format(new_price))
    index += 1