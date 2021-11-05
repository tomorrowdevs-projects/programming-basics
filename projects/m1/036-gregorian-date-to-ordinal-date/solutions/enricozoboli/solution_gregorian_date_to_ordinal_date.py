def is_leap(year, month):
    if year % 400 == 0 or (year % 100 != 0
    and year % 4 == 0) and month >= 3:
        return 1
    else:
        return 0

def ordinal_date(day, month):
    ord_day = day
    for i in range(1, month):
        if 1 <= i <= 7 and i % 2 != 0:
            ord_day += 31
        elif i == 2:
            ord_day += 28
        elif 8 <=i <= 12 and i % 2 == 0:
            ord_day += 31
        else:
            ord_day += 30
    return ord_day

def main():
    year = int(input("Year: "))
    month = int(input("Month: "))
    day = int(input("Day: "))
    print(f"Ordinal date is: "
    f"{ordinal_date(day, month) + is_leap(year,month)}")
    

if __name__ == "__main__":
    main()
   
