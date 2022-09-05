prices = [4.95, 9.95, 14.95, 19.95, 24.95]

print('DISCOUNT TABLE')
print('%15s' %('Original Price'), '%15s' %('Scount'), '%15s' %('Final Price'))
for price in prices:

    scount =(price*60)/100 # I create two variables to insert in the discount table
    final_price = price-scount

    print('%15.2f' %price, end=' ')
    print('%15.2f' %(scount), end=' ')
    print('%15.2f' %(final_price))