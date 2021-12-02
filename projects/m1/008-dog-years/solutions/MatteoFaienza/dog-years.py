# input user enter the number of human years
humanYears=int(input('Enter the number of human years '))
# the first two canine years are equivalent to 10.5  human years
dogYears = 10.5
# from the third year onwards they are equivalent to 4 human years
dogYears1 = 4
# depending on the user's initial choice, the age condition varies
if humanYears <= 2 :
    dogYears = 10.5 * humanYears

if humanYears > 2 :
    dogYears=dogYears * 2 + ((humanYears-2) * dogYears1)

if humanYears <= 0 :
    dogYears = 'Error, please enter a number greater than zero'

print(dogYears) 