def main(month, year):
    days_28=2
    days_30=[4, 6, 9 ,11]
    days_31=[1, 3, 5, 7, 8, 10, 12]
    if month==days_28:
        if year % 400 == 0:
            print(f"{str(month).zfill(2)}-{year} has 29 days")
        
        elif year % 100 == 0:
            print(f"{str(month).zfill(2)}-{year} has 28 days")
            
        elif year % 4 == 0:
            print(f"{str(month).zfill(2)}-{year} has 29 days")
            
        else:
            print(f"{str(month).zfill(2)}-{year} has 28 days")
    elif month in days_30:
        print(f"{str(month).zfill(2)}-{year} has 30 days")
    elif month in days_31:
        print(f"{str(month).zfill(2)}-{year} has 31 days")
    else:
        print("Error! Your input isn't valid!")

date =str(input("Insert a date in format MM-YYYY: "))
month, year = map(int, date.split('-'))
main(month, year)