import math 

def day_of_the_week(year):
    return (year + math.floor((year - 1) / 4) - math.floor((year - 1) / 100) + math.floor((year - 1) / 400)) % 7

year = int(input("Enter the year: "))

day_to_string = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

for number_days in range(len(day_to_string)):
    if number_days == day_of_the_week(year):
        print(day_to_string[number_days])
    else:
        print("Error. Incorrect value.")


