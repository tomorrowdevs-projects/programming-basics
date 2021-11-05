
lst = []

while True:
    guest_age = input("Insert guest's age or enter a blank line to end: ")
    if guest_age:
        lst.append(int(guest_age))
    else:
        break 

under_3 = 0
under_12 = 0
normal = 0
over_65 = 0
total = 0

for i in lst:
    if 0 <= i < 3:
        under_3 = under_3 + 1
    elif  3 <= i <= 12:
        under_12 = under_12 + 1
        total = total + 14.00
    elif i >= 65:
        over_65 = over_65 + 1
        total = total + 18.00
    elif 65 > i > 12:
        normal = normal + 1
        total = total + 23.00

print(f"Your group is composed by {under_3} under 3 years old, {under_12} under 12 years old, {over_65} over 65 and {normal} between 12 and 65. Total amount for tickets is {total} $")
