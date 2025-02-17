"""# Gregorian Date to Ordinal Date
An ordinal date consists of a year and a day within it, both of which are integers. 
The year can be any year in the Gregorian calendar while the day within the year ranges from one, which represents January 1, through to 365 (or 366 if the year is a leap year) which represents December 31. 

Write a function named ordinalDate that takes three integers as parameters.
These parameters will be a day, month and year respectively. 

The function should return the day within the year for that date as its only result. Create a main program that reads a day, month and year from the user and displays the day within the year for that date"""

#controlli se l'anno è bisestile
#calcoli il numero di giorni già trascorso fino al 1 del mese della data di input
#li sommmi al giorno della data di input

def date_conversion(day,month,year):
    """This function convert a gregorian date into ordinal date"""
    standard_year = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31} #keys=months, values=number of days
    leap_year = {1:31,2:29,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
    days_before_date = [] #support list
    total_days_before_date = 0
    if month == 1:
        return day #se è gennaio il numero di giorni passati è uguale al giorno della data inserita
    else:
        if (year % 400 == 0 and year % 100 == 0) or (year % 4 == 0 and year % 100 !=0): #se è bisestile
            for i in range(1,month):
                days_before_date.append(leap_year[i])
            total_days_before_date = sum(days_before_date) #fai la somma dei giorni trascorsi fino al 1o del mese della data
            total_days_before_date += day #ci aggiungi il numero dei giorni del mese della data inserita
            return total_days_before_date

        else: #uguale ma per l'anno non bisestile
            for i in range(1,month):
                days_before_date.append(standard_year[i]) #<-- non leap year
            total_days_before_date = sum(days_before_date) 
            total_days_before_date += day 
            return total_days_before_date



print(date_conversion(5,1,2020))
print(date_conversion(29,2,2020))
print(date_conversion(31,12,2020))
print(date_conversion(31,12,2021))
"""
ciao = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:21,9:30,10:31,11:30,12:31}
    print(ciao[2:5])
    
    #print(buongiorno)
    #print(buongiorno[i])
    #print(sum(buongiorno)[i])
"""