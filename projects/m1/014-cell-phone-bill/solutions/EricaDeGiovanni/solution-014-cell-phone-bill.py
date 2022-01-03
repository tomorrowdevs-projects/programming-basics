
# Write a program that reads the number of minutes and text messages
user_min = int(input('Insert the number of minutes used in the month: ')) 
user_txt = int(input('Insert the number of messages used in the month: '))

add_min = max((user_min - 50) * 0.25, 0)
add_txt = max((user_txt - 50) * 0.15, 0)
base_charge = 15.00
fee_911 = 0.44
total = base_charge + fee_911 + add_min + add_txt
tax = total * 0.05
bill = total + tax

# Display: base charge, additional txt and min charge (only if the user incurred in extra txt an min), 911 fee, tax, total bill.
# all of the charges are displayed using 2 decimal places.

print(f'Base charge: {base_charge:.2f}€')

if user_min > 50 and user_txt > 50:
    print(f'Extra minutes charge: {add_min:.2f}€')
    print(f'Extra messages charge: {add_txt:.2f}€')
elif user_min > 50:
    print(f'Extra minutes charge: {add_min:.2f}€')
elif user_txt > 50:
    print(f'Extra messages charge: {add_txt:.2f}€')
    
print(f'911 additional charge: {fee_911}€')
print(f'Taxes: {tax:.2f}€')
print(f'Total bill amount: {bill:.2f}€')




