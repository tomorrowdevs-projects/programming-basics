from math import floor

year = int(input("Enter a year: "))
day_week = int((year + floor(year - 1)/4) - floor((year - 1)/100) + floor((year - 1)/400)) % 7
day={0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}

for i in day:
    if i == day_week:
        print(f" 1-1-{year} is on {day[i]}")


