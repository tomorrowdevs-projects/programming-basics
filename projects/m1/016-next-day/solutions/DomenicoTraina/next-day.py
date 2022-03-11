user_day= int(input("Enter day: "))
user_month= int(input("Enter month: "))
user_year= int(input("Enter year: "))

index=0
next_year=user_year
next_day=user_day
next_month=user_month

while index==0:  ##verifica anno bisestile
    if user_year%400 == 0 :        
        print("{} is a leap year".format(user_year)) 
        lapyear=1                                             ##introduco un flag per anno bisestile
        break
    elif user_year%100 != 0 and user_year%4==0 :
        print("{} is a leap year".format(user_year))
        lapyear=1
    else:    
        print("{} is NOT a leap year".format(user_year))
        lapyear=0
        break
    index += 1

while True:
    if (user_month == 11 or 4 or 6 or 9) and (user_day==30):
        next_day=1
        next_month=user_month+1
        break
    if user_day == 31:
        next_day = 1
        next_month=user_month+1
        break
    if user_day==31 and user_month == 12:
        next_day=1
        next_month=1
        next_year=user_year+1
        break
    if lapyear==1 and user_day==28 and user_month==2:
        next_day=29
        break
    if lapyear==1 and user_day==29 and user_month==2:
        next_day=1
        next_month=3
        break
    if lapyear==0 and user_day==29 and user_month==2:
        next_day=28
        print("That day does not exist!")
        break
    else: 
        next_day=next_day+1
        break

print("Next day: {}/{}/{}".format(next_day,next_month,next_year))

