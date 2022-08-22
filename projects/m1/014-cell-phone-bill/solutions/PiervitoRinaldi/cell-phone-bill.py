minutes_air_time = int(input('Enter the minutes used in a month: '))
text_messages = int(input('Enter the text messagese used in a month: '))

additional_minutes = minutes_air_time - 50
additionald_text_messages = text_messages - 50

call_phone_plane = 15
fee_911 = 0.44
tax = ((call_phone_plane + fee_911) * 5) / 100

price_additional_minutes = additional_minutes * 0.25
price_additional_text_messages = additionald_text_messages * 0.15
tax_2 = ((call_phone_plane + price_additional_minutes + price_additional_text_messages + fee_911) *5) / 100

total_bill = call_phone_plane + price_additional_minutes + price_additional_text_messages + fee_911 + tax_2
total_bill_basic = call_phone_plane + fee_911 + tax


print('Base charge: € 15.00')

if minutes_air_time > 50:
    print('Additional minutes charge: € %.2f' %(price_additional_minutes))
    print('911 fee: € 0.44')
    print('Tax: %.2f' %(tax_2))
    print('Total bill: € %.2f' %(total_bill))
elif text_messages > 50:
    print('Additional text messages charge: € %.2f' %(price_additional_text_messages))
    print('911 fee: € 0.44')
    print('Tax: %.2f' %(tax_2))
    print('Total bill: € %.2f' %(total_bill))
else:
    print('911 fee: € 0.44')
    print('Tax: %.2f' %(tax_2))
    print('Total bill: € %.2f' %(total_bill))
