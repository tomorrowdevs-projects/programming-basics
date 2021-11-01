def is_leap(year):
    if year % 400 == 0 or (year % 100 != 0 and year % 4 == 0):
        return True

def days_month(month, year):
    if  (1 <= month <= 7 and month % 2 != 0) or(
      (8 <= month <= 12 and month % 2 == 0)
      ):
      return 31
    if is_leap(year) and month == 2:
        return 29 
    if not is_leap(year) and month == 2:
        return 28
    else:
        return 30

if __name__ == "__main__":
    month = int(input("Enter the month: "))
    year = int(input("Enter the year: "))
    print(f"Month has {days_month(month, year)} days.")
    

