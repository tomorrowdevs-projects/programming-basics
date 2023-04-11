import math
#the first day of year, calculated with a formula but the output should be a string
day= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
year = int(input("enter a year: "))
day_of_week = (year + math.floor((year-1)/4)-math.floor((year-1)/100) + math.floor((year-1)/400)) % 7

print("the first day of year", year,"is: ",day[day_of_week])
