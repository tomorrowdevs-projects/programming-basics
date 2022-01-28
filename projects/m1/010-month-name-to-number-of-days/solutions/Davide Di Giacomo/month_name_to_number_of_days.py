#variables
months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
february = "february"
months_30 = ["april", "june", "september", "november"]
months_31 = ["january", "march", "may", "july", "august", "october", "december"]

print ("Insert a name of month and I'll show you how many days there are in this:")
month = str(input())

#if the input is not a month's name there is an error
if month not in months:
    print ("Error! Insert a month's name:")
    month = str(input())
    
#calculating how many days there are in a month
if month == february:
    print ("The number of days in your month is 28/29 days, it depens if the year is leap or not.")
    
elif month in months_30:
    print ("The number of days in your month is 30 days!")
    
elif month in months_31:
    print ("The number of days in your month is 31 days!")