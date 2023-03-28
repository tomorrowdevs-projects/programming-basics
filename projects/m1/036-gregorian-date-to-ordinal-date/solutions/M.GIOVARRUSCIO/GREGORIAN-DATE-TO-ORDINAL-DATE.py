"""
An ordinal date consists of a year and a day within it, both of which are integers.
The year can be any year in the Gregorian calendar
while the day within the year ranges from one, which represents January 1,
through to 365 (or 366 if the year is a leap year) which represents December 31.
Ordinal dates are convenient when computing differences between dates
that are a specific number of days (rather than months.
For example, ordinal dates can be used to easily determine
whether a customer is within a 90 day return period,
the sell-by date for a food-product based on its production date, and the due date for a baby.

Write a function named ordinalDate that takes three integers as parameters.

These parameters will be a day, month and year respectively.
The function should return the day within
the year for that date as its only result.
Create a main program that reads a day, month and year from the user
and displays the day within the year for that date.
Your main program should only run when your file has not been imported into another program.

"""
def leapyear(anno):
    if (anno % 400 == 0) or ((anno % 4 == 0) and (anno % 100 != 0)):
        return True
    else:
        return False
def OrdinaData(g, m, a):
    day = g
    for i in range(1,m):
        if i in [1, 3, 5, 6, 7, 10, 12]:
            day += 31
        elif i in [11, 4, 6, 9]:
            day += 30
        elif i == 2 and leapyear(a):
            day += 29
        elif i == 2 and not leapyear(a):
            day += 28
    print(f"Date ordinal is {day} for date {g}-{m}-{a}")


if __name__ == '__main__':
    gg = int(input("day:"))
    mm = int(input("mounth:"))
    aa = int(input("year:"))
    OrdinaData(gg, mm, aa)