small_size = input('How many drink containers are 1 or less then liter?')
big_size = input('How many drink containers are more then 1 liter?')

amount = float(small_size)*0.10 + float(big_size)*0.25
print('your amount is : ' + str(amount) + '$')