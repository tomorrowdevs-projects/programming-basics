def almo () :
    question = str(input('Please insert a month: '))
    question = question.lower()
    
    daysmonth_30 = ['november', 'april', 'june', 'september']
    month_31 = ['january', 'march', 'may', 'july', 'august', 'october', 'dicember']
    feb = ['february']

    

    if question in month_30:
        print('This month has 30 days')
    elif question in month_31:
        print('This month has 31 days')
    elif question in feb:
        print('This month could have 28 or 29 days')
    else:
        print('Errorr')