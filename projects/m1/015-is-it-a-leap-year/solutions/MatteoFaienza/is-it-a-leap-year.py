# This program calculates whether it is a leap year

year=int(input('Enter the year '))

if year % 400 == 0 :
    print('The year',year,'is leap')

elif year % 100 == 0 :
    print('The year',year,'is not leap' )

elif year % 4 == 0 :
    print ('The year',year,'is leap' )

else :
     print('The year',year,'is not leap' ) 