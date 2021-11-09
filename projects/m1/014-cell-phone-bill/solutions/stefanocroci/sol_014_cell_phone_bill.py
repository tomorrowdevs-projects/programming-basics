# Define the variables and calculate the results
minutes = int(input('Please insert total minutes of air time: '))
messages = int(input('Please insert total text messages: '))

normal_offer = 15
tax_911 = 0.44
normal_bill = normal_offer + tax_911

rest_minutes = (minutes - 50)
rest_messages = (messages -50)

add_minutes = rest_minutes * 0.25
add_messages = rest_messages * 0.15

bill = (add_messages * int(add_messages>0) + add_minutes * int(add_minutes > 0) + normal_bill)
tax_bill =  bill * 5 / 100
tot_bill = tax_bill + bill

# Display the results
print("-------------------------------------------------")
print('Your base charge is:\t\t\t\t' + ' {: .2f}'.format(normal_offer) + '€')

if rest_minutes > 0:
    print('Your additional minutes charge is:\t\t' + ' {: .2f}'.format(add_minutes) + '€')
if rest_messages > 0:
    print('Your additional messages charge is:\t\t' + ' {: .2f}'.format(add_messages) + '€')

print('Your 911 fee is:\t\t\t\t' + ' {: .2f}'.format(tax_911) +  '€')
print('Your total bill is:\t\t\t\t' + ' {: .2f}'.format(tot_bill) + '€')
print('of wich taxes:\t\t\t\t\t' + ' {: .2f}'.format(tax_bill) + '€')
