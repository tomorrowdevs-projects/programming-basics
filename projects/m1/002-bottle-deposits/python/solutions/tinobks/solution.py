print('Refund Calculator')
lessthan1 = input('Drink containers holding one liter or less: ')
morethan1 = input('Drink containers holding more than one liter: ')
refund_lessthan1 = int(lessthan1) * 0.10 #refund drink containers <=1
refund_morethan1 = int(morethan1) * 0.25 #refund drink containers >1
refund_total = int(refund_lessthan1) + int(refund_morethan1)
print('The total refund that will be received for returning the containers is {} $' .format(refund_total))