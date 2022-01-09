#execise m1/014 by Francesco Ricci

voice_base = 50
sms_base = 50
plane_base_price = 15.00
voice_extra_price = 0.25
sms_extra_price = 0.15
voice_extra = 0
sms_extra  = 0
extra_charges = False
contribution_911_price = 0.44
tax_percent = 0.05

#read minutes and sms used in mounth
voice_total = input('Enter minutes used in mounth: ')
sms_total =  input('Enter sms used in mounth: ')

# see you info phone plan
print(f'Your phone plan includes {voice_base:2d} minutes and {sms_base:2d} sms.Its price is {plane_base_price:.2f} €')

#avoid typerror
voice_total = int(voice_total)
sms_total = int(sms_total)

#verify if is present voice and sms extra plan
if voice_total > voice_base:
   voice_extra = voice_total - voice_base
   print('Extra voice minutes: ' + str(voice_extra))
   extra_charges = True
if sms_total > sms_base:
   sms_extra = sms_total - sms_base
   print('Extra sms: ' + str(sms_extra))
   extra_charges = True

#show a message if there are or are not extra charges
if extra_charges:
    print('There are extra charges in your phone plan this month')
else:
    print('There are no extra charges in your phone plan this month')

# see result
bill_total = plane_base_price + (voice_extra * voice_extra_price) + (sms_extra * sms_extra_price)

#two decimal format number
print(f"\nTotal bill amount: {bill_total:.2f} €")
