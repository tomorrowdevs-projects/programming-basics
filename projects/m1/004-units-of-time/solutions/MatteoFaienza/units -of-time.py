# I ask the user to enter days hours minutes and seconds
days=int(input('Enter the number of the days ')) 

hours=int(input('Enter the number of the hours '))

minutes=int(input('Enter the number of the minutes '))

seconds=int(input('Enter the number of the seconds '))

#I convert everything into seconds
minutesInSec=minutes*60

hoursInSec=hours*3600

daysInSec=days*86400

# I add the results to calculate the total of seconds
totSec=daysInSec+hoursInSec+minutesInSec+seconds

totSec=f'{totSec:,}'

print('The length of time is',totSec,'sec')

