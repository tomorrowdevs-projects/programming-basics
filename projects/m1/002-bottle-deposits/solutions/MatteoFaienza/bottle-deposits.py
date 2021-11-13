
# input-containers of one liter or less
containersOneLiterOrLess = int(input('Enter the number of drink containers holding one liter or less '))

# input-containers more than one liter
containersMoreThanOneLiter = int(input('Enter the number of drink containers more than one liter '))

# total refund 0.10 cents
totalRefund10Cents = (containersOneLiterOrLess * 0.10)

# total refund 0.25 cents
totalRefund25cents = (containersMoreThanOneLiter * 0.25)

# total refund
totalRefund = float(totalRefund10Cents + totalRefund25cents)

print('The total refund is',totalRefund,'$')
