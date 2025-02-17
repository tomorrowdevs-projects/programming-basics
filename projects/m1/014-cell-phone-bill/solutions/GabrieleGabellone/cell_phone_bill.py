#cell-phone-bill

minutes_used = int(input("Enter the number of minutes used in the month: "))
txt_used = int(input("Enter the number of text messages used in the month: "))
add_minutes_charge = add_txt_charge = 0
if minutes_used > 50:
    add_minutes_charge = (minutes_used - 50) * 0.25
if txt_used > 50:
    add_txt_charge = (txt_used - 50) * 0.15
sales_tax = (15 + add_minutes_charge + add_txt_charge + 0.44) * (5/100)
total_bill_amount = 15 + add_minutes_charge + add_txt_charge + 0.44 + sales_tax
print("-The base charge is €15.00")
if add_minutes_charge > 0: print("-The additional minutes charge is €{:.2f}".format(add_minutes_charge))
if add_txt_charge > 0: print("-The additional text message charge is €{:.2f}".format(add_txt_charge))
print("-The 911 fee is €0.44")
print("-The sales tax is €{:.2f}".format(sales_tax))
print("Total bill amount: €{:.2f}".format(total_bill_amount))