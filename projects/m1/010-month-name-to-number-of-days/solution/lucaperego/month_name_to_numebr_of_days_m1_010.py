#The length of a month varies from 28 to 31 days. 
#In this exercise you will create a program that reads the name of a month from the user as a string. 
#Then your program should display the number of days in that month. Display “28 or 29 days” for February so that leap years are addressed.

month = str(input("Please, write the name of the month with the first letter capitalized - es.: March - Insert the Month ---> "))


calendar = {
"January":"31", "February": ("28 or 29"), "March":"31", "April":"30", "May":"31", "June":"30", "July":"31", "August":"31", "September":"30", "October":"31", "November":"30", "December":"31"
}
# The values "31", "30", "28 or 29"... are written in this way - like a string - in order to bring them all in line with the February
# requirement that demands, for graphical reasons, a string, having two values to show instead of one.
# Mixing STR and INT in a Dictionary is theoretically allowed, but it could give problems in the Future!!!

if month in calendar:

    print(f"{month} has - {calendar[month]} - days")

else:
    
    print("Error in data entry - repeat this program")