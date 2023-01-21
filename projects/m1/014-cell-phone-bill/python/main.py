#ask to user total minutes and messanges for the bill
minutes = int(input('Type total minutes: '))
messages = int(input('Type total messages: '))
# compute the costs for extra minutes and messages
costs_extra_messages = (messages - 50) * 0.15
costs_extra_minutes = 0
# define a variable with the price of base bill and extra charge for 911 calls
base_bill = 15
fee_911 = 0.44

#print on screen base bill 
print('Base charge is ' + '{:.2f}'.format(base_bill) + ' €')

# print on screen costs for extra messages and extra minutes
if minutes > 50:
    costs_extra_minutes = (minutes - 50) * 0.25
    print(f'Additional charge for extra minutes: {costs_extra_minutes}')
if messages > 50:
    costs_extra_messages = (messages - 50) * 0.15
    print(f'Additional charge for extra messages: {costs_extra_messages}')

#computing sales tax's amount and the total costs, then print on screen results 
sales_tax = ((base_bill + fee_911 + costs_extra_messages + costs_extra_minutes) * 5 / 100)
total = base_bill + fee_911 + sales_tax + costs_extra_messages + costs_extra_messages

total = round(total,2)
sales_tax = round(sales_tax,2)

print('fee for 911: ' + str(fee_911) + ' €')
print('sales tax: ' + str(sales_tax) + ' €')
print('total: ' + str(total) + ' €')
