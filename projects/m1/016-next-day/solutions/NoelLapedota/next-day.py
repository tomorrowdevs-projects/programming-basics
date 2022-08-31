data=int(input('enter the year : ')
data_a=int(input('Enter the mounth: ')
data_b=int(input(' Enter the day :')       
c =[1,3,5,7,8,10,12]

next_year = data
next_month = data_a
next_day = data_b + 1



if month == 2:
    if year % 400 == 0 or year % 100 != 0 and year % 4 == 0 and data_b == 28 :
         data_b = next_day  

elif data_a == c:
    if next_day > 31 :
        return next_day - 30 and 
        next_month = data_a + 1
    else:
        return next_day 

elif data_a ==12 and day > 31:
    return next_month - 11 and
    next_year += 1



else :
    return next_day 
    return next_month
    return next_year 

print(next_day-next_month-next_year)       
