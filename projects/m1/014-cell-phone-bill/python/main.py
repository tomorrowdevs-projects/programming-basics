minutes = int(input("How many minutes have you spent this month? "))
sms = int(input("How many sms have you sent this month? "))

flat = 15
add_min_charge = 0
add_sms_charge = 0

if minutes > 50:
    add_min_charge = (minutes - 50)*0.25
if sms > 50:
    add_sms_charge = (sms - 50)*0.15

charge_911 = 0.44

tax_percent = 0.05

print("{:_<27}{:>6.2f} $".format("Base charge",flat))

if add_min_charge != 0:
    print("{:_<27}{:>6.2f} $".format("Additional minutes charge",add_min_charge))

if add_sms_charge != 0:
    print("{:_<27}{:>6.2f} $".format("Additional sms charge",add_sms_charge))

print("{:_<27}{:>6.2f} $".format("Contribute to 911",charge_911))

total_taxfree = flat + add_min_charge + add_sms_charge + charge_911
tax_amount = total_taxfree*tax_percent

print("{:_<27}{:>6.2f} $".format("Tax amount",tax_amount))

total_bill_amount = total_taxfree + tax_amount

print("{:_<27}{:>6.2f} $".format("Total bill amount",total_bill_amount))