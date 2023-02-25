discounted_products = [4.95, 9.95, 14.95, 19.95, 24.95]
full_price_products = []
discount = 0.6 

#loop through the products to obtain full price products
for product in discounted_products:
    product = product/(1-0.6)
    full_price_products.append(product)

#insert 2 digits after the . in the full price products
full_price_rounded = [round(product2,2) for product2 in full_price_products]

#second loop to display a table with the 2 lists
for product, product2 in zip(discounted_products, full_price_rounded):
    print(f"The discounted price is {product}, the original price is {product2} and the discount is 60%")