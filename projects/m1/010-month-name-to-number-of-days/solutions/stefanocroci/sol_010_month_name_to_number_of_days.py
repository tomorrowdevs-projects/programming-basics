# Create lists of months grouped by number of days
month_30 = ['november', 'april', 'june', 'september']
month_31 = ['january', 'march', 'may', 'july', 'august', 'october', 'dicember']
month_f = ['february']

# Ask the user for the input
ask_month = str(input('Please insert a month: '))
ask_month = ask_month.lower()

# Check if the input is in one of the list and display the output
if ask_month in month_30:
    print('This month has 30 days')
elif ask_month in month_31:
    print('This month has 31 days')
elif ask_month in month_f:
    print('This month could have 28 or 29 days')
else:
    print('ERROR! You should insert a month')
            


            



