

list_price=[5]
list_price[0]=4.95
percent_discount=60/100

for i in range(5):
    if i>0:
        list_price[i]=list_price[i]+5
    else:
        discount=list_price[i]*percent_discount
        discount_price=list_price[i]-discount
    print (f"Original Price {list_price[i]} $ - Discount: {discount:.2f} $ - Final Price is: {discount_price:.2f} $")