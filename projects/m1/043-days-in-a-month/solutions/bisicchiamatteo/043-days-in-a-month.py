def month_d():
    month_number=[31,28,31,30,31,30,31,30,30,31,30,31]
    month=input("insert the month : ")
        
    year=input("insert the year : ")
    if ((int(year)%400)==0):
        if(((int(year)%100)==0)):
            leap=0
        else:
            leap=1
    elif((int(year)%4)==0):
            leap=1
    else:
            leap=0
    global days_month
    days_month = month_number[int(month)-1]
    

def main():
        month_d()
        print ("the month's days are " + str(days_month))

      
   

if __name__ == "__main__":
    main()
