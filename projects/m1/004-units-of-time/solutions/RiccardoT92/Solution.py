#Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
#Compute and display the total number of seconds represented by this duration.







    #creo la funzione
def read_the_time_second(day,hour,minute,second):
    #converto giorni
    Second_day = day * 86400
    #converto le ore
    Second_hour = hour* 3600
    #converto i minuti
    Second_minutes = minute *60
    #sommo i secondi
    Sum_of_second = Second_day + Second_hour + Second_minutes + second
    
    return Sum_of_second



