num_min=float(input('how many minutes of conversation did you have? :\n'))
sms_min=float(input('How many sms did you have?\n'))

minutes = 50
sms = 50
add_min = 0.25
add_sms = 0.15
charge = (num_min - minutes) * add_min
charge_a =(num_min - minutes) * add_sms
total = float(15 + 0.44 + charge)
total_b = float(total + charge_a)

if num_min <= 50 and sms_min <= 50:
    print('you have respected the phone plan!\n Your bill : 15.44€')
elif num_min > 50 and sms_min <= 50:
        print(f'Your base charge is 15€ \n additional minutes charge : {charge:.f}\n additional text message charge :0.00 €\n 911 fee :0.44 €\ntax and total bill amount :{total:.f}')
else:
    print(f'your base charge is 15€ \n additional minutes charge : {charge:.f}\n additional text message charge : {charge_a:.f}\n 911 fee :0.44 €\ntax and total bill amount :{total_b:.f}')



