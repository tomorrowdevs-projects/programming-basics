# ask to user the duration to calculate
print("Let's calculate the duration of time (in days, hours, minutes and seconds) in seconds")
days = int(input('How much days?'))
hours = int(input('How much hours?'))
minutes = int(input('how much minutes?'))
seconds = int(input('How much seconds?'))

# seconds in a day, an hour and a minute
day = 86400
hour = 3600
minute = 60

# compute the seconds 
if days >= 1:
    sDay = day * days
if hour >= 1:
    sHour = hour * hours
if minute >=1:
    sMinute = minute * minutes

totalSeconds = sDay + sHour + sMinute + seconds

# output the result
print('The duration in seconds is:', totalSeconds)