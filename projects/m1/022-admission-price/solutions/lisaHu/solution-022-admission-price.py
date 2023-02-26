#input to get total of tickets from user
print('Welcome, please enter how many tickets would you like to purchase.')
totToddlers = input('How many tickets for Guests of or under 2 years old (blank line to skip): ')
totChildren = input('How many Guests between 3 and 12 years old (blank line to skip): ')
totNormal = input('How many Guests between 13 and 64 years old (blank line to skip): ')
totSeniors = input('How many Guests of or over 65 year old (blank line to skip): ')
print('Tot tickets:')

#if statements in case the user inputs a number - if not, variable = 0 so i can add it to the total
if totToddlers != " ":
    toddlers = int(totToddlers) * 0
    print(str(totToddlers) + ' x Guests of or under 2 years old')
else:
    toddlers = 0
if totChildren != " ":
    children = int(totChildren) * 14
    print(str(totChildren) + ' x Guests between 3 and 12 years old')
else:
    children = 0
if totNormal != " ":
    normal = int(totNormal) * 23
    print(str(totNormal) + ' x Guests between 13 and 64 years old')
else:
    normal = 0
if totSeniors != " ":
    seniors = int(totSeniors) * 18
    print(str(totSeniors) + ' x Guests of or over 65 year old')
else:
    seniors = 0
total = toddlers + children + normal + seniors
print('Total due: $' + str("%.2f" %total))