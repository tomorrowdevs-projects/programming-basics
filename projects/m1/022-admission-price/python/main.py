
under_3 = 0
under_13 = 0
adult = 0
senior = 0
under_13_ticket = 14
adult_ticket = 23
senior_ticket = 18

while True:
    user_input = input('insert guest age or a blank line to quit: ')
    if user_input == '':
        break
    if int(user_input) < 3:
        under_3 += 1 
    elif  12 >= int(user_input) >= 3:
        under_13 += 1
    elif int(user_input) >= 65:
        senior += 1
    else:
        adult += 1

price_under_13 = int(under_13) * under_13_ticket
price_adult = int(adult) * adult_ticket
price_senior = int(senior) * senior_ticket
total = '%.2f' % (price_under_13 + price_adult + price_senior)


if under_3 and under_13 and adult and senior == 0:
    quit()
else: 
    print(f"Your group is composed by {under_3} children equal or under 2 years old , {under_13} equal or under 12 years old, {senior} over 65 and {adult} between 12 and 65. Total amount for tickets is {total} $")
    