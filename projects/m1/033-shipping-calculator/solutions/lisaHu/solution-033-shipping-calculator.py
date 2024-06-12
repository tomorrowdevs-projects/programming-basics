def shipping(items):
    #computing of price of 1st item + price for the rest of items (less 1 because it's charged as 1st item)
    charging = 10.99 + float((items - 1) * 2.99)
    print('Total shipping charge is:  ' + str("{:.2f}".format(charging)) + '$')
    return charging

#input from user and if statement to check if the integer is bigger than 0. If it is, the function is called
items = int(input('Enter total items purchased:  '))
if items <= 0:
    print('Please, enter a number bigger than 0')
else:
    shipping(items)