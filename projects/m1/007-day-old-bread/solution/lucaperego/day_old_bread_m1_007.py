old_loave_discount_euro = (3.49 * 60)/100

regular_price = format((3.49 * old_loaves_purchased_number), '.2f')

discounted_price = format((old_loave_discount_euro * old_loaves_purchased_number), '.2f')

total_price = format((float(regular_price) - float(discounted_price)), '.2f')


print("Loaves's regular price: ", end = "")
print(regular_price)
     
print("Discounted price for one day old loaves: ", end = "")
print(discounted_price)

print("Total price: ", end = "")
print(total_price)