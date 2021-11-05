minutes, mex = input('Insert total minutes and total messages separated by a whitespace:\n').split()

minutes_extra = (int(minutes) - 50) * 0.25
messages_extra = (int(minutes) - 50) * 0.15
base_bill = 15.00
fee_911 = 0.44

print("Base charge is " + str(base_bill))

if int(minutes) > 50:
    print(str(minutes_extra) + " euro for extra minutes")
else: 
    minutes_extra = 0
if int(mex) > 50:
    print(str(messages_extra) + " euro extra messages")
else:
    messages_extra = 0

sales_tax = ((base_bill + fee_911 + minutes_extra + messages_extra) * 5 / 100)
total = base_bill + fee_911 + minutes_extra + messages_extra + sales_tax

print("Plus fee for 911 it's " + str(fee_911) + " and plus sales tax it's " + str(round(sales_tax, 2)) + " \nTotal amount is " + str(round(total, 2)))