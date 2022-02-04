prices = [4.95, 9.95, 14.95, 19.95, 24.95]

for price in prices:
    print (f"the original price is: {price}$\nthe amount of discount is: {(price*60)/100}$\nthe price with discount is: {price-(price*60/100):.2f}$\n")