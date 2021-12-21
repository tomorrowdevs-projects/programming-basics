# this program returns which day of the week is January 1st for each year
year=int(input('Enter the year '))

dayOfTheWeek = (year +((year - 1) // 4) - ((year - 1) // 100) + ((year - 1) // 400)) % 7

if dayOfTheWeek == 0 :
    dayOfTheWeek = 'Sunday'
    
elif dayOfTheWeek == 1 :
    dayOfTheWeek = 'Monday'

elif dayOfTheWeek == 2 :
    dayOfTheWeek = 'Tuesday'

elif dayOfTheWeek == 3 :
    dayOfTheWeek = 'Wednesday'

elif dayOfTheWeek == 4 :
    dayOfTheWeek = 'Thursday'

elif dayOfTheWeek == 5 :
    dayOfTheWeek = 'Frisay'

elif dayOfTheWeek == 6 :
    dayOfTheWeek = 'Saturday'

print('The first of January of',year,'is',dayOfTheWeek) 