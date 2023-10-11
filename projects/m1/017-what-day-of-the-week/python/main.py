
from math import floor

day_word_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

def weekday(year):
    weekday = (year + floor((year - 1) / 4) - floor((year - 1) / 100) + floor((year - 1) / 400)) % 7

    return day_word_week[weekday]

while True:
    try:
        year_from_user = int(input("\nInsert year:(int number) "))
    except ValueError:
        print("\nInput error, please try again..")
        continue

    print(weekday(year_from_user))
    break