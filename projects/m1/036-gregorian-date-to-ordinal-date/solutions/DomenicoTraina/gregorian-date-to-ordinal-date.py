user_day= int(input("Enter day: "))
user_month= int(input("Enter month: "))
user_year= int(input("Enter year: "))

def leap_year(user_year):
    if user_year%400 == 0 :        
        print("{} is a leap year".format(user_year)) 
    elif user_year%100 != 0 and user_year%4==0 :
        return True
    else:    
        return False

def ordinal_date(user_day,user_month,user_year):
    daysnumber=0
    
    for index in range(1,user_month):
        if index in [4,6,9,11]:
            daysnumber=daysnumber+30
        elif index==2:
            daysnumber=daysnumber+28
           
            if leap_year(user_year)==True:
                daysnumber=daysnumber+1         
        else: 
            daysnumber=daysnumber+31
    daysnumber=daysnumber+user_day
    print(f"{daysnumber} are the total days")

ordinal_date(user_day,user_month,user_year)