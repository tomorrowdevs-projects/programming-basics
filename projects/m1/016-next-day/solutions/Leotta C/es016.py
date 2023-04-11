day = int(input("Enter a day: "))
month = int(input("Enter a month as a number: "))
year = int(input("Enter a year: "))
month_days = [(1,31),(2,28),(3,31),(4,30),(5,31),(6,30),(7,31),(8,31),(9,30),(10,31),(11,30),(12,31)]

for i in range(11):
    if i == 1: continue
    if month_days[i][0] == month:
        if month_days[i][1] > day:
            print(f"The date after {year}-{month}-{day} is {year}-{month}-{day+1}.")
        else:
            print(f"The date after {year}-{month}-{day} is {year}-{month+1}-{1}")

if month == 2:
    if day < 28:
        print(f"The date after {year}-{month}-{day} is {year}-{month}-{day+1}.")
    elif day == 28:
        if year%400 == 0:
            print(f"The date after {year}-{month}-{day} is {year}-{month}-{day + 1}.")
        elif year % 100 == 0:
            print(f"The date after {year}-{month}-{day} is {year}-{month+1}-{1}.")
        elif year % 4 == 0:
                print(f"The date after {year}-{month}-{day} is {year}-{month}-{day + 1}.")
        else:
            print(f"The date after {year}-{month}-{day} is {year}-{month + 1}-{1}")
    elif day == 29:
        print(f"The date after {year}-{month}-{day} is {year}-{month + 1}-{1}")

if month == 12:
    if day < 31:
        print(f"The date after {year}-{month}-{day} is {year}-{month}-{day+1}")
    else:
        print(f"The date after {year}-{month}-{day} is {year+1}-{1}-{1}")



