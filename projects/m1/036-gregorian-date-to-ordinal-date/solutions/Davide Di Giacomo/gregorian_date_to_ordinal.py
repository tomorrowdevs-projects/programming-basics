def ordinalDate (year, month, day):
    if month<= 12 and day <= 31:
        if year % 400 == 0:
            i=2
        elif year % 100 == 0:
            i=3
        elif year % 4 == 0:
            i=2
        else:
            i=3
        if month <= 2:
            val = 1.4
        else:
            val=0.55
        
        round_month= round(val*(month+1))
        print(f"your ordinal date is: {year}-{(30*(month-1))+(round_month-(i))+day}")
        
    else: 
        print("Error! Invalid input!")

def main():
        date = str(input("Enter a date in YYYY-MM-DD format: "))
        year, month, day = map(int, date.split('-'))
        ordinalDate(year, month, day)

if __name__ == '__main__':
        main()
