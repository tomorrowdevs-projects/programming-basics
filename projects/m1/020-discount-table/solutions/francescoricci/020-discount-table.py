#exercise 020 by francesco ricci

discount = 60/100

product1_description = 'product one'.ljust(20)
product1_price = 4.95
product1_price_discounted = round((product1_price * (1-discount)),2)
product1_price = str(product1_price).rjust(10)
product1_price_discounted = str(product1_price_discounted).rjust(15)

product2_description = 'product two'.ljust(20)
product2_price = 5.95
product2_price_discounted = round((product2_price * (1-discount)),2)
product2_price = str(product2_price).rjust(10)
product2_price_discounted = str(product2_price_discounted).rjust(15)

product3_description = 'product three'.ljust(20)
product3_price = 14.95
product3_price_discounted = round((product3_price * (1-discount)),2)
product3_price = str(product3_price).rjust(10)
product3_price_discounted = str(product3_price_discounted).rjust(15)

product4_description = 'product for'.ljust(20)
product4_price = 19.95
product4_price_discounted = round((product4_price * (1-discount)),2)
product4_price = str(product4_price).rjust(10)
product4_price_discounted = str(product4_price_discounted).rjust(15)

product5_description = 'product five'.ljust(20)
product5_price = 24.95
product5_price_discounted = round((product5_price * (1-discount)),2)
product5_price = str(product5_price).rjust(10)
product5_price_discounted = str(product5_price_discounted).rjust(15)

# table discount
product_header = 'Product'.ljust(20)
price_header = 'Price'.rjust(10)
price_discounted_header = 'Price %'.rjust(15)
print(f'{product_header}{price_header}{price_discounted_header}')
print(f'{product1_description}{product1_price}{product1_price_discounted}')
print(f'{product2_description}{product2_price}{product2_price_discounted}')
print(f'{product3_description}{product3_price}{product3_price_discounted}')
print(f'{product4_description}{product4_price}{product4_price_discounted}')
print(f'{product5_description}{product5_price}{product5_price_discounted}')


