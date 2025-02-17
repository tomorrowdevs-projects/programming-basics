
print("You should insert a date in numeric format")

year = int(input("Insert year in form XXXX "))
month = int(input("Insert month in form XX "))
day = int(input("Insert day in form XX "))

output_year = year
output_month = month
output_day = day

if ((month == 11 or  month == 4 or month == 6 or month == 9) and (day == 30)) or ((month == 1 or month == 3 or month == 5 or month == 7  or month == 8 or month == 10) and (day == 31)):
    output_month = output_month +1
    output_day = 1
elif (month == 12 and day == 31):
    output_year = output_year + 1
    output_month = 1
    output_day = 1
elif month == 2:
    if day == 28:
        if ((year % 400) == 0 or (( year % 4) == 0 and (year % 100) != 0)):
            output_day = output_day + 1
        else:
            output_day = 1
            output_month = output_month + 1 
    elif day == 29:
        output_month = output_month + 1
        output_day = 1
else: 
    output_day = output_day + 1

print("{}/{:02}/{:02}".format(output_year,output_month,output_day))
