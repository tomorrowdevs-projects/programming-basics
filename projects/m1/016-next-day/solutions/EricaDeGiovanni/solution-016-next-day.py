#read a date from the user 

# calc number of days
year_user = next_year = int(input('Insert a year: '))
month_user = next_month = int(input('Insert the number of a month: '))
day_user = next_day = int(input('Insert the number of a day: '))

days_30 = [11, 4, 6, 9]
days_31 = [1, 3, 5, 7, 8, 10, 12]

#verify if is a correct input
def is_correct_input():
    global next_day
    month_day = 30 if day_user in days_30 else 31
    if next_day < month_day: 
         next_day += 1 
         return answer()     
    else:
      print('You entred a wrong date.')
    
# verify if is a leap year
def is_leap_year():
    if year_user % 400 == 0 and year_user % 100 != 0 or year_user % 4 == 0:
        return True
    else:
       return False
   
# compute the day after the date inserted from the user
def answer():
   print(f'Next day: {next_year}-{next_month:02d}-{next_day:02d}')
   
#if the month has 30 days
if month_user in days_30:
    if day_user == 30:
        next_day = 1
        next_month += 1   
        answer()           
    else:
        is_correct_input()        
       
#if the monyh has 31 days
elif month_user in days_31:
    if day_user == 31:
        next_day = 1
        #if december
        if month_user == 12:
            next_month = 1  
            next_year += 1
            answer()
        else:
            next_month += 1    
            answer()           
    else:
        is_correct_input()
          
# if february    
elif month_user == 2:
    if (is_leap_year() and day_user == 29 or not
        is_leap_year() and day_user == 28):
        next_day = 1
        next_month += 1   
        answer()      
    elif (is_leap_year() and day_user < 29 or not
          is_leap_year() and day_user < 28): 
          next_day += 1
          answer()  
    else:
        print('You entred a wrong date.')
        
else:
    print('You entred a wrong date.')       