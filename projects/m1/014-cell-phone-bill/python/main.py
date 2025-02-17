minutes = int(input('Enter the number of minutes used in a month: '))
messages = int(input('Enter the number of messages used in a month: '))

fee_911 = 0.44
base_charge = 15.00
if minutes > 50 or messages > 50:

    extra_min = (minutes - 50) * 0.25
    extra_msg = (messages - 50) * 0.15
    if minutes <= 50:
        extra_min = 0
    if messages <= 50:
        extra_msg = 0
    
    total = base_charge + extra_min + extra_msg + fee_911
    tax = total * 0.05
    final_bill = total + (tax)
    
    print(f'Base charge: {base_charge:.2f}€\nExtra minutes charge: {extra_min:.2f}€\nExtra messages charge: {extra_msg:.2f}€\n911 fee: {fee_911:.2f}€\nTax: {tax:.2f}€\nTotal bill amount: {final_bill:.2f}€')

else: 
   print('Incorrect input.')



    
