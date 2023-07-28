# ask to user a month
month = input('Type a month please: ').lower()

# check if month is 30, 31, 28 or 29 days longer and print answer on the screen
if month == 'february':
    print('FEBRUARY is 28 or 29 days longer')     
elif month == 'april' or month == 'june' or month == 'september' or month == 'november':
    print(month.upper() + " is 30 days longer")
elif month == 'january' or month == 'march' or month == 'may' or month == 'july' or month == 'august' or month == 'october' or month == 'december':
    print(month.upper() + " is 31 days longer")    
else:
    print("There's something wrong!")
    quit()
