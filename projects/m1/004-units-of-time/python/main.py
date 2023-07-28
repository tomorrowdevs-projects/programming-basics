# ask to user how many days, hours, minutes and seconds then store it in a variables
a, b, c, d = input("Enter number of days, hours, minutes and seconds separated by a whitespace: " ).split()

# convert variable from string to integer
days = int(a)
hours = int(b)
minutes = int(c)
seconds = int(d)

# calculate the total amount of seconds
seconds_day = days * 24 * 60 * 60
seconds_hours = hours * 60 * 60
seconds_minutes = minutes * 60
seconds_total = seconds_day + seconds_hours + seconds_minutes + seconds 

# print on screen the result
print("The total ammount of seconds are: " + str(seconds_total))

