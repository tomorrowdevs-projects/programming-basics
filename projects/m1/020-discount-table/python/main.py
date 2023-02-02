print("{:8}{:^9}{:3}{:>9}".format("Price","Discount","","New Price"))


price = 4.95
discount = price*0.6
discounted_price = price - discount

while price <= 24.95:
    print("$ {:5.2f} $-{:5.2f} {:4}${:4.2f}".format(price,discount,"-->",discounted_price))
    price += 5
    discount = price*0.6
    discounted_price = price - discount
    
