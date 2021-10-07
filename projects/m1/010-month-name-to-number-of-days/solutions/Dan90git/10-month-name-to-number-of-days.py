month_30 = ['april', 'june', 'september', 'november']
month_31 = ['january', 'march', 'may', 'july', 'august', 'october', 'dicember']


def check_month():
    user = input('Type a month please:\n').lower()
    if not user in month_30 and not user in month_31 and not user == 'february':
        print('Try again')
        check_month()
    elif user == 'february':
        print('FEBRUARY is 28 or 29 days longer')
        check_month()  
    elif user in month_30:
        print(user.upper() + " is 30 days longer")
        check_month()
    else:
        print(user.upper() + " is 31 days longer")
        check_month()

check_month()