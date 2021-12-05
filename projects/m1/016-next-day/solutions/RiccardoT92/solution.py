'''Write a program that reads a date from the user and computes its immediate successor. 
For example, if the user enters values that represent 2019-11-18 then your program should display a message indicating that the day immediately after 2019-11-18 is 2019-11-19. 
If the user enters values that represent 2019-11-30 then the program should indicate that the next day is 2019-12-01. 
If the user enters values that represent 2019-12-31 then the program should indicate that the next day is 2020-01-01. 
The date will be entered in numeric form with three separate input statements; one for the year, one for the month, and one for the day. 
Ensure that your program works correctly for leap years.'''


def date(day,month,year):
    #inizializzo le variabili
    month_dec=[12]
    month_days30=[4,6,9,11]
    month_days31=[1,3,4,7,8,10]
    month_days28_29=[2]
    #effettuo i vari controlli per determinare se il giorno successivo devo aumentare mese anno solamente il giorno
    if day < 30 and month in month_days30:
        day+=1
    elif day == 31 and month in month_days31:
        month+=1
        day=1
    elif day == 30 and month in month_days31:
        day+=1
    elif day==30 and month in month_dec:
         day+=1
    elif day == 30 and month in month_days30:
        month+=1
        day=1
    elif day==31 and month in month_dec:
         year+=1
         day=1
         month=1
    elif day < 28 and month in month_days28_29:
        day+=1
    elif day==28 and year % 4 ==0:
        day+=1
    elif day == 28 and month in month_days28_29:
        month+=1
        day=1
    return day,month,year    