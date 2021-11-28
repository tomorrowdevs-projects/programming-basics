#In this exercise you will reverse the process described in Exercise 24. 
#Develop a program that begins by reading a number of seconds from the user. 
#Then your program should display the equivalent amount of time in the form D:HH:MM:SS, where D, HH, MM, and SS represent days, hours, minutes and seconds respectively. 
#The hours, minutes and seconds should all be formatted so that they occupy exactly two digits. 
#Use your research skills determine what additional character needs to be included in the format specifier so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.




Secondi=int(input("quanti secondi: "))
D = 86400
HH = 3600
MM = 60
SS = 1
#trovo i giorni dividendo i secondi per D che sarebbe la quantita di secondi in un giorno
Second_day= int(Secondi / D)
print("numero Giorni: ", Second_day) 
#trovo il resto dei secondi una volta divisi per D
Rest_second1= int(Secondi % D)
        
Second_hour= int(Rest_second1 / HH)
#passaggio importante per usare zfill, trasformare un intero in una stringa
Second_hour_str=str(Second_hour)
print("numero Ore: ", Second_hour_str.zfill(2))
Rest_second2= int(Rest_second1 % HH)
        
Second_minute= int(Rest_second2 / MM)
Second_minute_str=str(Second_minute)
print("numero Minuti: ", Second_minute_str.zfill(2))
Rest_second3= int(Rest_second2  %  MM)


Second_second= int(Rest_second3 / SS)
Second_second_str=str(Second_second)
print("numero Secondi: ", Second_second_str.zfill(2))