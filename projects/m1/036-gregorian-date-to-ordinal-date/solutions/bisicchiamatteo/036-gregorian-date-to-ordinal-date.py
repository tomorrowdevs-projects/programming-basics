def ordinalDate():
    if ((int(year)%400)==0):
        if(((int(year)%100)==0)):
            leap=0
        else:
            leap=1
    elif((int(year)%4)==0):
            leap=1
    else:
            leap=0
    global total_day
    total_day =(month_number[int(month)]+ int(day)+leap)



month_number=[0,31,59,90,120,151,181,212,242,272,304,334]

day =input("insert the day : ")

month=input("insert the month : ")
    
year=input("insert the year : ")

ordinalDate()
print ("the total of the days are : "+ str(total_day)+ " in the year : "+str(year))