freshBreadPrice = 3.49
discount = 3.49 * 0.6
purchasedBread = int(input('how much bread do you want to buy? '))
fullPrice = freshBreadPrice * purchasedBread
discountedPrice = discount * purchasedBread
total = fullPrice - discountedPrice
print('The full price of the bread is: ' + str(freshBreadPrice) + '$' + ' but for day old bread are discounted by 60%')
print('full price: ' + "%.2f" %fullPrice + '$')
print('Discount: ' + "%.2f" %discountedPrice + '$') 
print('The total is = ' + "%.2f" %total + '$')