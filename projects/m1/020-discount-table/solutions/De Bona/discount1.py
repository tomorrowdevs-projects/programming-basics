# the program generate the table showing the original price, the discount amount,
# and the new price for purchases of $4.95, $9.95, $14.95, $19.95 and $24.95.

price_of_product = [4.95, 9.95, 14.95, 19.95, 24.95]
for i in price_of_product:
 print(price_of_product)
new_list =[]
for i in price_of_product:
    new_list.append(i*60/100)
new_list1 =[]
for i in price_of_product:
    new_list1.append(i-((i*60)/100))
    print (price_of_product, new_list, new_list1)
