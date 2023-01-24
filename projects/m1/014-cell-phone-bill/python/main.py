monthly_fee = 15
format_monthly_fee = '{:.2f}'.format(monthly_fee)
included_min = 50
included_text = 50
additional_min_charge = 0.25
additional_text_charge = 0.15
additional_911_charge = 0.44
sales_tax = 5 / 100

min_charge = 0
text_charge = 0

print("Hello user let's calculate your bill amount this month")

used_minutes = int(input('How much minutes have you used this month? '))
used_text = int(input('How much text messages have you sent this month? '))

if used_minutes > included_min:
    min_to_pay = used_minutes - included_min
    min_charge = min_to_pay * additional_min_charge
    format_min_charge = '{0:.2f}'.format(min_charge)

if used_text > included_text:
    text_to_pay = used_text - included_text
    text_charge = text_to_pay * additional_text_charge
    format_text_charge = '{0:.2f}'.format(text_charge)

untaxed_bill = monthly_fee + min_charge + text_charge + additional_911_charge

taxes = untaxed_bill * sales_tax
taxed_bill = untaxed_bill + taxes

print_sentece = 'The costs of your bill consist of: \n'
print(f'{print_sentece}')

monthly_fee_sentence = 'the base charge of: '
print(f'{monthly_fee_sentence}', ' ' * (50 - len(monthly_fee_sentence)), f'{format_monthly_fee :>10}')

if min_charge > 0:
    min_charge_sentence = 'Additional minute cost of: '
    print(f'{min_charge_sentence}', ' ' * (50 - len(min_charge_sentence)), f'{format_min_charge :>10}')

if text_charge > 0:
    text_charge_sentence = 'Additional text cost of: '
    print(f'{text_charge_sentence}', ' ' * (50 - len(text_charge_sentence)), f'{format_text_charge :>10}')

additional_911_charge_sentence = "The 911 fee: "
print(f'{additional_911_charge_sentence}', ' ' * (50 - len(additional_911_charge_sentence)), f'{additional_911_charge :>10}')

tax_sentence = 'Sales tax: '
print(f'{tax_sentence}', ' ' * (50 - len(tax_sentence)), f'{round(taxes, 2) :>10}')

taxed_bill_sentence = 'For a total of: '
print(f'\n{taxed_bill_sentence}', ' ' * (50 - len(taxed_bill_sentence)), f'{round(taxed_bill, 2) :>10}')