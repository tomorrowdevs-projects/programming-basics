
containersOneLiterOrLess = int(input('Enter the number of drink containers holding one liter or less '))

containersMoreThanOneLiter = int(input('Enter the number of drink containers more than one liter '))

totalRefund10Cents = (containersOneLiterOrLess * 0.10)

totalRefund25cents = (containersMoreThanOneLiter * 0.25)

totalRefund = float(totalRefund10Cents + totalRefund25cents)

print('The total refund is',totalRefund,'$')
