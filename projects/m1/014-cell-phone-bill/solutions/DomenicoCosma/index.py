
req_min = int(input('How many minutes did you use? Enter only numbers'))
req_text = int(input('How many texts did you use? Enter only numbers'))

bill = 15.00
add_min = req_min-50
add_text = req_text-50
fee_911 = 0.44



print('your monthly bill is €15.00 plus €0.44 fee 911')
if req_min > 50:
    print(f'You used {add_min} extra minutes and add charge is €{(add_min*0.25):.2f}')
else:
    add_min = 0

if req_text > 50:
    print(f'You used {add_text} extra messages and your add charge is €{(add_text*0.15):.2f}')
else:
    add_text = 0

tax = (((bill + fee_911 + add_min*0.25 + add_text*0.15) /100)*5)
print(f'Your tax is €{(tax):.2f}')
print(f'Your total amount for this month is €{(bill+fee_911+(add_text*0.15)+(add_min*0.25)+tax):.2f}')