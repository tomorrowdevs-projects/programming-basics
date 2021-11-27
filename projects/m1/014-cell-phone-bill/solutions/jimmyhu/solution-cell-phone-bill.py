extramin = .25
extrasms = .15
usermin = int(input('please enter the minutes: '))
usersms = int(input('please enter the sms: '))
base = 15
support = .44
tax = 1.05
usersmsplus = 0
userminplus = 0
if usermin <= 50 and usersms <= 50:
    total = (base + support) * tax
else: 
    if usermin > 50 and usersms > 50:
        userminplus = usermin - 50
        usersmsplus = usersms - 50
    elif usermin <= 50 and usersms > 50:
        usersmsplus = usersms - 50
    elif usermin > 50 and usersms <= 50:
        userminplus = usermin - 50
    extracharge = (userminplus * extramin) + (usersmsplus * extramin)
    total = (base + (extracharge + support)) * tax
print('base of the bill is: ' + "%.2f" %base + ' $\n' 'the additional cost are: ' + "%.2f" %support + ' $ for the suppurt of the number 911 and the tax of 5%')
if userminplus != 0 and usersmsplus != 0:
    print('extra minutes cost: ' + "%.2f" %(userminplus * extramin) + ' $\n' 'extra messages cost: ' + "%.2f" %(usersmsplus * extramin) + ' $')
elif userminplus == 0 and usersmsplus != 0:
    print('extra messages cost: ' + "%.2f" %(usersmsplus * extramin) + ' $')
elif usersmsplus == 0 and userminplus != 0: 
    print('extra minutes cost: ' + "%.2f" %(userminplus * extramin) + ' $')
print('the total is: ' + "%.2f" %total + ' $')