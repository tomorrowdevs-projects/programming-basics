list_price=(4.95, 9.95, 14.95, 19.95, 24.95)
percent_discount=60/100
number_price=5

for i in range(number_price):
    
    discount=list_price[i]*percent_discount
    discount_price=list_price[i]-discount
    
    print (f"Original Price {list_price[i]} $ - Discount: {discount:.2f} $ - Final Price is: {discount_price:.2f} $")