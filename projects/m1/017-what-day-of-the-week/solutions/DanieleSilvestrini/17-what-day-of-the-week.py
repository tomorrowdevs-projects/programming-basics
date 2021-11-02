import math

year = int(input('inser year: '))

day_of_the_week = (year + math.floor((year - 1) / 4) - math.floor((year - 1) / 100) + math.floor((year - 1) / 400)) % 7

number_to_day = {0:'sunday', 1:'monday', 2:'tuesday', 3:'wednesday', 4:'thursday', 5:'friday', 6:'saturday'}

if day_of_the_week in number_to_day:
    print(number_to_day[day_of_the_week])