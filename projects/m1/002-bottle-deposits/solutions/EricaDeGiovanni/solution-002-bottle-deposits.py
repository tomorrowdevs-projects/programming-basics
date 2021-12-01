
#BOTTLE DEPOSITS

small_container = int(input('Hi! How many containers holding 1L or less do you have?: '))
big_container = int(input('How many containers holding more than 1L do you have?: '))

#display the total refund 
deposit = round(small_container * 0.10 + big_container * 0.25, 2)
print(f'Great! You earned {deposit}$')



