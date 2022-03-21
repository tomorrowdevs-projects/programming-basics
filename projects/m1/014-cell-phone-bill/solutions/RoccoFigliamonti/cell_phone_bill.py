"""
A particular cell phone plan includes 50 minutes of air time and 50 text messages for € 15.00 a month. 
Each additional minute of air time costs € 0.25, while additional text messages cost € 0.15 each. 
All cell phone bills include an additional charge of € 0.44 to support 911 call centers, and the entire bill (including the 911 charge) is subject to 5 percent sales tax.
Write a program that reads the number of minutes and text messages used in a month from the user. Display the base charge, additional minutes charge (if any),
additional text message charge (if any), the 911 fee, tax and total bill amount. 
Only display the additional minute and text message charges if the user incurred costs in these categories. 
Ensure that all of the charges are displayed using 2 decimal places.
"""

cap = 50
fixed_fee = 15
air_surplus_fee = 0.25
messages_surplus_fee = 0.15
charge911 = 0.44
tax = 0.05

minutes = int(input("How many minutes: "))
messages = int(input("How many messages: "))

if minutes>cap:
    air_surplus_charge = (minutes - cap) * air_surplus_fee
else:
    air_surplus_charge = 0

if messages>cap:
    messages_surplus_charge = (messages - cap)*messages_surplus_fee
else:
    messages_surplus_charge = 0

total_charge_taxfree = fixed_fee + air_surplus_charge + messages_surplus_charge + charge911
total_charge = total_charge_taxfree*tax + total_charge_taxfree

print(f"Base charge: {fixed_fee:2d} $")
if minutes>cap:
    print(f"Additional minutes charge: {air_surplus_charge} $")
if messages>cap:
    print(f"Additional messages charge: {messages_surplus_charge} $")
print(f"911 fee: {charge911} $")
print(f"Tax fee: {tax*100} %")
print(f"Total bill amount: {round(total_charge,2)} $")
