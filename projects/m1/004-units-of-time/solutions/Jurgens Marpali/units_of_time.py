print("Hello Stranger, if you're here i guess you want to convert your time in seconds. Well, i exist for this purpose only.")
days = input('Please write here the number of day(s), or 0 if you dont have any: ')
if not days.isnumeric():
    days = 0
    print("this isn't a number, i guess you do not have any.")
else:
    days = int(days)

if days <0:
    days = 0
    print("you can't have a negative number of days")
else:
    days = int(days)

hours = input('Please write here the number of hour(s), or 0 if you dont have any: ')
if not hours.isnumeric():
    hours = 0
    print("Try using the number keys next time :)")
else:
    hours = int(hours)

if hours <0:
    hours = 0
    print("Everybody in the world would like to take back some hours and go back in time, unfortunately it is impossible. I guess that you have 0 hours.")
else:
    hours = int(hours)

minutes = input('Please write here the number of minute(s), or 0 if you dont have any: ')
if not minutes.isnumeric():
    minutes = 0
    print("Guess you have 0")
else:
    minutes = int(minutes)

if minutes <0:
    minutes = 0
    print("Negative Numbers don't exist for me")
else:
    minutes = int(minutes)

seconds = input('Please write here the number of second(s), or 0 if you dont have any: ')
if not seconds.isnumeric():
    seconds = 0
    print("You should be the superior species, how come you do this errors?")
else:
    seconds = int(seconds)
if seconds <0:
    seconds = 0
    print("Were you trying to get back seconds?")
else:
    seconds = int(seconds)

total= (days*86400)+(hours*3600)+(minutes*60)+(seconds)
print("Your total number of seconds is: " + str(total))

