# Create variable price with base price of 4.95
price = 4.95    

# While loop: it works for price between 4.95 and 24.95. each cycle price increases by 5
while 4.95 <= price <= 24.95:
    print('Original price was: ' + '{:.2f}'.format(price) + ' €')
    discount = price * 60 / 100
    print('The discount is:    ' + '{:.2f}'.format(discount) + ' €')
    new_price = price - discount
    print('New price is:       ' + '{:.2f}'.format(new_price) + ' €')
    print('--------------------')
    price += 5
