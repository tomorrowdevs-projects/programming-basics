n = int(input('How many loaves of bread?\n'))

regular_price = 3.49 * n
discount = (regular_price * 60) / 100
total_price = regular_price - discount

print(' - Regular price: ' "{:.2f}".format(regular_price) + '$\n',\
      '- Discount:', "{:.2f}".format(discount) + '$\n',\
      '- Total price:', "{:.2f}".format(total_price) + '$\n')