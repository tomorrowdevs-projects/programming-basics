#target " Write a program that **reads the number of minutes and text messages used in a month** from the user"

#Display: "base charge, extra minutes charge, extra text message charge, 911 fee ,tax ,total bill amount from the user"

base_minutes_consumed = int(input(" Hello how much minutes had you consumed? Could you type the number please! "))
base_text_consumed = int(input(" Please type also the number of text you had consumed "))
extra_minutes_charge = extra_text_charge = 0
    
if base_minutes_consumed > 50:
        extra_minutes_charge = (base_minutes_consumed -50) * 0.25
    
if base_text_consumed > 50:
        extra_text_charge = (base_text_consumed -50) * 0.15
    
locals_sales_tax = (15 + extra_minutes_charge + extra_text_charge + 0.44) * (5/100) 

total_bill_ammount = (15 + extra_minutes_charge + extra_text_charge + 0.44 + locals_sales_tax)

print(" The base charge par month is €15.00 ")

if extra_minutes_charge > 0: print (" Other extra minutes is charge par €{:.2f} ".format(extra_minutes_charge))

if extra_text_charge > 0: print (" For extra text consunmed is charge par €{:.2f} ".format(extra_text_charge))

print(" The 911 fee cost €0.44 ")

print(" The sales tax is €{:.2f} ".format(locals_sales_tax))

print(" The total bill ammount is €{:.2f} ".format(total_bill_ammount))