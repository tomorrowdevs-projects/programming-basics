def days_month(month,year):
    days30 = [4,6,9,11]
    days31 = [1,3,5,7,8,10,12]
    month = int(month)
    year = int(year)
    if month in days30:
        return("30 days")
    elif month in days31:
        return("31 days")
    elif month == 2:
        if year % 400 == 0 or year % 4 == 0 and year % 100 != 0:
            return("29 days")
        else:
            return("28 days")
    else:
        return("Enter a correct integer for month (1-12).")

def main():
    print("Enter a month and a year and this program will tell you how many days are in that month.")
    user_month = input("Enter the month (1-12): ")
    user_year = input("Enter the year: ")
    print(days_month(user_month,user_year))

if __name__ == "__main__":
    main()
    
    