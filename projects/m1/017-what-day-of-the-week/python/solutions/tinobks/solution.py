year = int(input("Enter a year: "))

import math
day_of_the_week = (year + math.floor((year - 1) / 4) - math.floor((year - 1) / 100) + math.floor((year - 1) / 400)) % 7

if day_of_the_week == 0:
    print("The day of the week for January 1 of this year is Sunday")

elif day_of_the_week == 1:
    print("The day of the week for January 1 of this year is Monday")

elif day_of_the_week == 2:
    print("The day of the week for January 1 of this year is Tuesday")

elif day_of_the_week == 3:
    print("The day of the week for January 1 of this year is Wednesday")

elif day_of_the_week == 4:
    print("The day of the week for January 1 of this year is Thursday")

elif day_of_the_week == 5:
    print("The day of the week for January 1 of this year is Friday")

elif day_of_the_week == 6:
    print("The day of the week for January 1 of this year is Saturday")
    







